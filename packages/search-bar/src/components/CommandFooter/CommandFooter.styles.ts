import styled from 'styled-components'

export const CommandFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  padding: 8px 0;
  background-color: white;
  border-radius: 0 0 14px 14px;
  border: 0;
  border-top: 1px solid #9ca3af;
  color: #181818;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const CommandFooterSpan = styled.span`
  display: inline-block;
  color: #f00;
  transition: transform 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    transform: scale(1.2);
    text-shadow: 0 0 0.6rem #f00;
  }
`
