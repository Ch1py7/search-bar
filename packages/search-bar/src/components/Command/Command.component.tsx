import { useModal } from '@/hooks/useModal'
import { useEffect } from 'react'
import * as S from './Command.styles'

interface Command {
	open: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
	childrenOptions?: React.ReactNode
	childrenInput?: React.ReactNode
	styles?: Styles
	placeholder?: string
	options?: Option[]
	onKeyDown?: (e: KeyboardEvent) => any
	maxItems?: number
}

export interface Option {
	id: number
	name: string
	description: string
	href?: string
}

export interface Styles {
	dialogStyles?: React.CSSProperties
	dialogClassNames?: string
	commandContainerStyles?: React.CSSProperties
	commandContainerClassNames?: string
	commandLabelStyles?: React.CSSProperties
	commandLabelClassNames?: string
	commandInputStyles?: React.CSSProperties
	commandInputClassNames?: string
	optionsLimiterStyles?: React.CSSProperties
	optionsLimiterClassNames?: string
	optionAnchorStyles?: React.CSSProperties
	optionAnchorClassNames?: string
	optionsContainerStyles?: React.CSSProperties
	optionsContainerClassNames?: string
	optionNameStyles?: React.CSSProperties
	optionNameClassNames?: string
	optionDescriptionStyles?: React.CSSProperties
	optionDescriptionClassNames?: string
	commandFooterStyles?: React.CSSProperties
	commandFooterClassNames?: string
	commandFooterSpanStyles?: React.CSSProperties
	commandFooterSpanClassNames?: string
}

export const Command: React.FC<Command> = ({
	open,
	onKeyDown,
	onChange,
	value,
	styles,
	placeholder = 'Search',
	options,
	childrenInput,
	childrenOptions,
	maxItems = 10,
}): React.ReactElement => {
	const {
		dialogStyles,
		dialogClassNames,
		commandContainerStyles,
		commandContainerClassNames,
		commandLabelStyles,
		commandLabelClassNames,
		commandInputStyles,
		commandInputClassNames,
		optionsLimiterStyles,
		optionsLimiterClassNames,
		optionAnchorStyles,
		optionAnchorClassNames,
		optionsContainerStyles,
		optionsContainerClassNames,
		optionNameStyles,
		optionNameClassNames,
		optionDescriptionStyles,
		optionDescriptionClassNames,
		commandFooterStyles,
		commandFooterClassNames,
		commandFooterSpanStyles,
		commandFooterSpanClassNames,
	} = {
		dialogStyles: styles?.dialogStyles,
		dialogClassNames: styles?.dialogClassNames,
		commandContainerStyles: styles?.commandContainerStyles,
		commandContainerClassNames: styles?.commandContainerClassNames,
		commandLabelStyles: styles?.commandLabelStyles,
		commandLabelClassNames: styles?.commandLabelClassNames,
		commandInputStyles: styles?.commandInputStyles,
		commandInputClassNames: styles?.commandInputClassNames,
		optionsLimiterStyles: styles?.optionsLimiterStyles,
		optionsLimiterClassNames: styles?.optionsLimiterClassNames,
		optionAnchorStyles: styles?.optionAnchorStyles,
		optionAnchorClassNames: styles?.optionAnchorClassNames,
		optionsContainerStyles: styles?.optionsContainerStyles,
		optionsContainerClassNames: styles?.optionsContainerClassNames,
		optionNameStyles: styles?.optionNameStyles,
		optionNameClassNames: styles?.optionNameClassNames,
		optionDescriptionStyles: styles?.optionDescriptionStyles,
		optionDescriptionClassNames: styles?.optionDescriptionClassNames,
		commandFooterStyles: styles?.commandFooterStyles,
		commandFooterClassNames: styles?.commandFooterClassNames,
		commandFooterSpanStyles: styles?.commandFooterSpanStyles,
		commandFooterSpanClassNames: styles?.commandFooterSpanClassNames,
	}

	const { modalRef } = useModal(open)

	useEffect(() => {
		if (!onKeyDown) return
		window.addEventListener('keydown', onKeyDown)
		return () => {
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [onKeyDown])
	return (
		<S.Dialog ref={modalRef} style={dialogStyles} className={dialogClassNames}>
			<S.CommandContainer style={commandContainerStyles} className={commandContainerClassNames}>
				{childrenInput ? (
					childrenInput
				) : (
					<S.CommandLabel style={commandLabelStyles} className={commandLabelClassNames}>
						<S.CommandInput
							style={commandInputStyles}
							className={commandInputClassNames}
							placeholder={placeholder}
							onChange={onChange}
							value={value}
						/>
					</S.CommandLabel>
				)}
				{childrenOptions ? (
					childrenOptions
				) : (
					<S.OptionsLimiter style={optionsLimiterStyles} className={optionsLimiterClassNames}>
						{options
							?.slice(maxItems ? 0 : undefined, maxItems ? maxItems : undefined)
							.map((item) => (
								<S.OptionAnchor
									style={optionAnchorStyles}
									className={optionAnchorClassNames}
									key={item.id}
									href={item.href}
								>
									<S.OptionsContainer
										style={optionsContainerStyles}
										className={optionsContainerClassNames}
										key={item.id}
									>
										<S.OptionName style={optionNameStyles} className={optionNameClassNames}>
											{item.name}
										</S.OptionName>
										<S.OptionDescription
											style={optionDescriptionStyles}
											className={optionDescriptionClassNames}
										>
											{item.description}
										</S.OptionDescription>
									</S.OptionsContainer>
								</S.OptionAnchor>
							))}
					</S.OptionsLimiter>
				)}
				<S.CommandFooter style={commandFooterStyles} className={commandFooterClassNames}>
					<p>
						Made with{' '}
						<S.CommandFooterSpan
							style={commandFooterSpanStyles}
							className={commandFooterSpanClassNames}
						>
							♥️
						</S.CommandFooterSpan>{' '}
						by Gerardo Garcia
					</p>
				</S.CommandFooter>
			</S.CommandContainer>
		</S.Dialog>
	)
}
