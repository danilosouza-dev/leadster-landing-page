import { styled } from 'styled-components'

interface ContainerModalVideoProps {
  isOpen: boolean
}

export const ContainerModalChat = styled.div<ContainerModalVideoProps>`
  width: 33vw;
  /* height: 85vh; */
  max-width: 600px;
  /* min-height: 780px; */

  background: #fff;
  border-radius: 16px;

  display: ${(isOpen) => (isOpen ? 'block' : 'none')};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;
  z-index: 11;

  & > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.3);
    }
  }

  iframe {
    border: 0;
  }
`

export const BackDrop = styled.div<ContainerModalVideoProps>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 125, 255, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
  display: ${(isOpen) => (isOpen ? 'block' : 'none')};
`
