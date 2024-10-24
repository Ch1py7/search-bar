import { useModal } from '@/hooks/useModal'
import { handleKeyDown } from '@/utils/handlerChange'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CommandFooter } from '../CommandFooter'
import { CommandInput } from '../CommandInput'
import { CommandOptions } from '../CommandOptions'
import { EmptyResults } from '../EmptyResults'
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
					d.name
						.toLowerCase()
						.includes(value?.toLowerCase().trim() || searchBarValue.toLowerCase().trim())
				)
			: options
	}, [value, searchBarValue, options])

	const controlledOptions = basicFilter ? filteredOptions : options

	useEffect(() => {
		const handleKey = onKeyDown ? onKeyDown : handleKeyDown(setSearchBarOpen, setOpen)

		window.addEventListener('keydown', handleKey)

		return () => {
			window.removeEventListener('keydown', handleKey)
		}
	}, [setOpen, onKeyDown])
	return (
		<S.Dialog ref={modalRef} style={dialogStyles} className={dialogClassNames}>
			<S.CommandContainer style={commandContainerStyles} className={commandContainerClassNames}>
				<CommandInput
					commandInputClassNames={commandInputClassNames}
					commandInputStyles={commandInputStyles}
					commandLabelClassNames={commandLabelClassNames}
					commandLabelStyles={commandLabelStyles}
					placeholder={placeholder}
					searchBarOnChange={searchBarOnChange}
					searchBarValue={searchBarValue}
					value={value}
					onChange={onChange}
					childrenInput={childrenInput}
				/>
				{controlledOptions.length > 0 ? (
					<CommandOptions
						optionsLimiterStyles={optionsLimiterStyles}
						optionsLimiterClassNames={optionsLimiterClassNames}
						controlledOptions={controlledOptions}
						maxItems={maxItems}
						optionAnchorStyles={optionAnchorStyles}
						optionAnchorClassNames={optionAnchorClassNames}
						optionsContainerStyles={optionsContainerStyles}
						optionsContainerClassNames={optionsContainerClassNames}
						optionNameStyles={optionNameStyles}
						optionNameClassNames={optionNameClassNames}
						optionDescriptionStyles={optionDescriptionStyles}
						optionDescriptionClassNames={optionDescriptionClassNames}
						childrenOptions={childrenOptions}
					/>
				) : (
					<EmptyResults
						emptyResultsClassNames={emptyResultsClassNames}
						emptyResultsSpanClassNames={emptyResultsSpanClassNames}
						emptyResultsSpanStyles={emptyResultsSpanStyles}
						emptyResultsStyles={emptyResultsStyles}
						searchBarValue={searchBarValue}
						value={value}
					/>
				)}
				<CommandFooter
					commandFooterStyles={commandFooterStyles}
					commandFooterClassNames={commandFooterClassNames}
					commandFooterSpanStyles={commandFooterSpanStyles}
					commandFooterSpanClassNames={commandFooterSpanClassNames}
				/>
			</S.CommandContainer>
		</S.Dialog>
	)
}
