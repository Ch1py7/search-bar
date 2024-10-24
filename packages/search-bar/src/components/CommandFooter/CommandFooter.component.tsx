import * as S from './CommandFooter.styles'

export const CommandFooter: React.FC<CommandFooter> = ({
	commandFooterStyles,
	commandFooterClassNames,
	commandFooterSpanStyles,
	commandFooterSpanClassNames,
}): React.ReactElement => {
	return (
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
	)
}

interface CommandFooter {
	commandFooterStyles?: React.CSSProperties
	commandFooterClassNames?: string
	commandFooterSpanStyles?: React.CSSProperties
	commandFooterSpanClassNames?: string
}
