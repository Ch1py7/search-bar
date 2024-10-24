import styled, { css, keyframes } from 'styled-components'

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
`

export const CommandContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  animation: ${css`${searchBarFadeIn} 0.2s ease-out`};
`
