import styled from 'styled-components'

export const OptionsLimiter = styled.div`
  max-height: 500px;
  overflow-y: auto;
  background-color: white;
  padding: 0 8px;

  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
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
