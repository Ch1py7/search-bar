import { useModal } from '@/hooks/useModal'
import { useCallback, useEffect, useMemo, useState } from 'react'
import * as S from './Command.styles'

interface Command {
	open?: boolean
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>
	value?: string
	setValue?: React.Dispatch<React.SetStateAction<string>>
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	childrenOptions?: React.ReactNode
	childrenInput?: React.ReactNode
	styles?: Styles
	placeholder?: string
	options?: Option[]
	onKeyDown?: (e: KeyboardEvent) => any
	maxItems?: number
	basicFilter?: boolean
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
	emptyResultsStyles?: React.CSSProperties
	emptyResultsClassNames?: string
	emptyResultsSpanStyles?: React.CSSProperties
	emptyResultsSpanClassNames?: string
}

export const Command: React.FC<Command> = ({
	open,
	setOpen,
	onKeyDown,
	onChange,
	value,
	setValue,
	styles,
	placeholder = 'Search',
	options = [],
	childrenInput,
	childrenOptions,
	maxItems = 10,
	basicFilter = true,
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
		emptyResultsStyles,
		emptyResultsClassNames,
		emptyResultsSpanStyles,
		emptyResultsSpanClassNames,
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
		emptyResultsStyles: styles?.emptyResultsStyles,
		emptyResultsClassNames: styles?.emptyResultsClassNames,
		emptyResultsSpanStyles: styles?.emptyResultsSpanStyles,
		emptyResultsSpanClassNames: styles?.emptyResultsSpanClassNames,
	}
	const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false)
	const [searchBarValue, setSearchBarValue] = useState<string>('')

	const { modalRef } = useModal(open ? open : searchBarOpen, setOpen ? setOpen : setSearchBarOpen)

	const searchBarOnChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target
			setValue ? setValue(value) : setSearchBarValue(value)
		},
		[setValue]
	)

	const filteredOptions = useMemo(() => {
		return value || searchBarValue
			? options.filter((d) =>
					d.name.toLowerCase().includes(value?.toLowerCase() || searchBarValue.toLowerCase())
				)
			: options
	}, [value, searchBarValue, options])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event?.key === 'k' && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen ? setOpen((prev) => !prev) : setSearchBarOpen((prev) => !prev)
			} else if (event.key === 'Escape') {
				event.preventDefault()
				setOpen ? setOpen(false) : setSearchBarOpen(false)
			}
		}

		window.addEventListener('keydown', onKeyDown ? onKeyDown : handleKeyDown)

		return () => {
			window.removeEventListener('keydown', onKeyDown ? onKeyDown : handleKeyDown)
		}
	}, [onKeyDown, setOpen])
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
							onChange={onChange ? onChange : searchBarOnChange}
							value={value || searchBarValue}
						/>
					</S.CommandLabel>
				)}
				{childrenOptions ? (
					childrenOptions
				) : (
					<S.OptionsLimiter style={optionsLimiterStyles} className={optionsLimiterClassNames}>
						{basicFilter ? (
							filteredOptions.length > 0 ? (
								filteredOptions
									.slice(maxItems ? 0 : undefined, maxItems ? maxItems : undefined)
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
									))
							) : (
								<S.EmptyResults style={emptyResultsStyles} className={emptyResultsClassNames}>
									No results for "
									<S.EmptyResultsSpan
										style={emptyResultsSpanStyles}
										className={emptyResultsSpanClassNames}
									>
										{value ? value : searchBarValue}
									</S.EmptyResultsSpan>
									"
								</S.EmptyResults>
							)
						) : options.length > 0 ? (
							options
								.slice(maxItems ? 0 : undefined, maxItems ? maxItems : undefined)
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
								))
						) : (
							<S.EmptyResults style={emptyResultsStyles} className={emptyResultsClassNames}>
								No results for "
								<S.EmptyResultsSpan
									style={emptyResultsSpanStyles}
									className={emptyResultsSpanClassNames}
								>
									{value ? value : searchBarValue}
								</S.EmptyResultsSpan>
								"
							</S.EmptyResults>
						)}
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
