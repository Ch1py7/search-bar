import { useEffect } from 'react'
import * as S from './Command.styles'

interface Command {
	open: boolean
	inputRef?: React.MutableRefObject<HTMLInputElement | null>
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
	childrenOptions?: React.ReactNode
	childrenInput?: React.ReactNode
	styles?: Styles
	placeholder?: string
	options?: Option[]
	onKeyDown?: (e: KeyboardEvent) => any
}

interface Option {
	id: number
	name: string
	description: string
	href?: string
}

interface Styles {
	background?: string
	animation?: string
	blur?: string
	inputColor?: string
}

export const Command: React.FC<Command> = ({
	open,
	inputRef,
	onChange,
	value,
	styles,
	placeholder = 'Search',
	options,
	childrenInput,
	childrenOptions,
	onKeyDown,
}): React.ReactElement => {
	const { animation, bg, blur, inputBg } = {
		animation: styles?.animation,
		bg: styles?.background,
		blur: styles?.blur,
		inputBg: styles?.inputColor,
	}

	useEffect(() => {
		if (!onKeyDown) return

		window.addEventListener('keydown', onKeyDown)
		return () => {
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [onKeyDown])
	return (
		<>
			{open && (
				<>
					<S.GlobalStyle />
					<S.Container $animation={animation}>
						<S.Blur $bg={bg} $blur={blur} />
						<S.CommandContainer>
							{childrenInput ? (
								childrenInput
							) : (
								<S.CommandLabel>
									<S.CommandInput
										$inputBg={inputBg}
										ref={inputRef}
										placeholder={placeholder}
										onChange={onChange}
										value={value}
									/>
								</S.CommandLabel>
							)}
							{childrenOptions ? (
								childrenOptions
							) : (
								<S.OptionsLimiter>
									{options?.map((item) => (
										<S.OptionAnchor key={item.id} href={item.href}>
											<S.OptionsContainer key={item.id}>
												<S.OptionName>{item.name}</S.OptionName>
												<S.OptionDescription>{item.description}</S.OptionDescription>
											</S.OptionsContainer>
										</S.OptionAnchor>
									))}
								</S.OptionsLimiter>
							)}
							<S.CommandFooter>
								<p>
									Made with <S.CommandFooterSpan>♥️</S.CommandFooterSpan> by Gerardo Garcia
								</p>
							</S.CommandFooter>
						</S.CommandContainer>
					</S.Container>
				</>
			)}
		</>
	)
}
