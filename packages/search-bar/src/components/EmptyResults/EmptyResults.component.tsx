import * as S from './EmptyResults.styles'

export const EmptyResults: React.FC<EmptyResults> = ({
	emptyResultsStyles,
	emptyResultsClassNames,
	emptyResultsSpanStyles,
	emptyResultsSpanClassNames,
	value,
	searchBarValue,
}): React.ReactElement => {
	return (
		<S.EmptyResults style={emptyResultsStyles} className={emptyResultsClassNames}>
			No results for "
			<S.EmptyResultsSpan style={emptyResultsSpanStyles} className={emptyResultsSpanClassNames}>
				{value ? value : searchBarValue}
			</S.EmptyResultsSpan>
			"
		</S.EmptyResults>
	)
}

interface EmptyResults {
	emptyResultsStyles?: React.CSSProperties
	emptyResultsClassNames?: string
	emptyResultsSpanStyles?: React.CSSProperties
	emptyResultsSpanClassNames?: string
	value?: string
	searchBarValue: string
}
