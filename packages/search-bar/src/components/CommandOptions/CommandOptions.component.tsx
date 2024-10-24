import * as S from './CommandOptions.styles'

export const CommandOptions: React.FC<CommandOptions> = ({
	optionsLimiterStyles,
	optionsLimiterClassNames,
	controlledOptions,
	maxItems,
	optionAnchorStyles,
	optionAnchorClassNames,
	optionsContainerStyles,
	optionsContainerClassNames,
	optionNameStyles,
	optionNameClassNames,
	optionDescriptionStyles,
	optionDescriptionClassNames,
	childrenOptions,
}): React.ReactElement => {
	return (
		<>
			{childrenOptions ? (
				childrenOptions
			) : (
				<S.OptionsLimiter style={optionsLimiterStyles} className={optionsLimiterClassNames}>
					{controlledOptions
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
						))}
				</S.OptionsLimiter>
			)}
		</>
	)
}

interface CommandOptions {
	optionsLimiterStyles?: React.CSSProperties
	optionsLimiterClassNames?: string
	controlledOptions: Option[]
	maxItems: number
	optionAnchorStyles?: React.CSSProperties
	optionAnchorClassNames?: string
	optionsContainerStyles?: React.CSSProperties
	optionsContainerClassNames?: string
	optionNameStyles?: React.CSSProperties
	optionNameClassNames?: string
	optionDescriptionStyles?: React.CSSProperties
	optionDescriptionClassNames?: string
	childrenOptions?: React.ReactNode
}

interface Option {
	id: number
	name: string
	description: string
	href?: string
}
