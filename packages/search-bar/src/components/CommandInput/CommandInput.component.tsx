import * as S from './CommandInput.styles'

export const CommandInput: React.FC<CommandInput> = ({
	commandInputStyles,
	commandLabelStyles,
	commandInputClassNames,
	placeholder,
	onChange,
	searchBarOnChange,
	value,
	searchBarValue,
	commandLabelClassNames,
	childrenInput,
}): React.ReactElement => {
	return (
		<>
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
		</>
	)
}

interface CommandInput {
	placeholder: string
	searchBarOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	searchBarValue: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	commandInputStyles?: React.CSSProperties
	commandLabelStyles?: React.CSSProperties
	commandInputClassNames?: string
	commandLabelClassNames?: string
	childrenInput?: React.ReactNode
}
