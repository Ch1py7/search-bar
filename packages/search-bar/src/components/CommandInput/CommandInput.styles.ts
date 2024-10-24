import styled from 'styled-components'
import magnifyingGlass from '../../assets/magnifying-glass.svg'

export const CommandLabel = styled.label`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0px;
    width: 20px;
    background: url("${magnifyingGlass}") center / contain no-repeat;
  }
  &:after {
    content: 'esc';
    position: absolute;
    right: 1rem;
    top: 0;
    bottom: 0px;
    color: #9ca3af;
    border-radius: 4px;
    padding: 0 4px;
  }
  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export const CommandInput = styled.input`
  padding: 10px 20px 10px 42px;
  border-radius: 14px 14px 0 0;
  font-size: 1rem;
  width: 48rem;
  border: 0;
  border-bottom: 1px solid #9ca3af;
  color: #181818;
  background-color: white;
`
