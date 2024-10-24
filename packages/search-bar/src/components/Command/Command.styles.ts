import styled, { css, keyframes } from 'styled-components'
import magnifyingGlass from '../../assets/magnifying-glass.svg'

const searchBarFadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const Dialog = styled.dialog`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 0;

  &::backdrop{
    background-color: #16161650;
    backdrop-filter: 1px;
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

export const CommandContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  animation: ${css`${searchBarFadeIn} 0.2s ease-out`}
`

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
`

export const CommandInput = styled.input`
  padding: 10px 20px 10px 42px;
  background-color: white;
  border-radius: 14px 14px 0 0;
  font-size: 1rem;
  width: 48rem;
  border: 0;
  border-bottom: 1px solid #9ca3af;
  color: #181818;
`

export const OptionsContainer = styled.div`
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 #0000000d;
  background-color: white;
  transition: transform 0.3s ease, background-color 0.3s ease, filter 0.3s ease;
  margin-bottom: 4px;
  cursor: pointer;
  text-align: start;

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    transform: translateY(-2px);
    background-color: #f1f0fb;
    filter: drop-shadow(0 4px 3px #00000012) drop-shadow(0 2px 2px #0000000f);
  }

  &:first-child {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const OptionsLimiter = styled.div`
  max-height: 500px;
  overflow-y: auto;
  background-color: white;
  padding: 0 8px;
`

export const OptionName = styled.h3`
  font-weight: 600;
  color: #181818;
`

export const OptionDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #4b5563;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const OptionAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`

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

export const EmptyResults = styled.p`
  text-align: center;
  padding: 24px 0;
  font-weight: 600;
  color: #999
`

export const EmptyResultsSpan = styled.span`
  font-weight: 600;
  color: #181818
`
