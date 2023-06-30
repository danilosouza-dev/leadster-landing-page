import { styled } from 'styled-components'
interface ContainerModalVideoProps {
  isOpen: boolean
}

export const ContainerModalVideo = styled.div<ContainerModalVideoProps>`
  width: 33vw;
  height: 95vh;
  max-width: 600px;
  min-height: 780px;

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

  @media screen and (max-width: 1024px) {
    min-width: 33vw;
    width: 600px;
    min-height: 100px;
    height: 60vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  @media screen and (max-width: 768px) {
    width: 95vw;
    height: 80vh;

    h1 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 428px) {
    min-height: 100px;
    height: 99vh;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 15%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  border-radius: 8px 8px 0 0;
  overflow: hidden;

  &::before {
    content: '';
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme['blue-300']};

    position: absolute;
    top: 0;
  }
`

export const Title = styled.h1`
  width: 435px;
  padding: 20px;
  font-size: 22px;
  font-weight: 700;
`

export const WrapperVideo = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
  }
`

export const Description = styled.div`
  width: 100%;
  padding: 50px 20px 30px;

  @media screen and (max-width: 625px) {
    padding: 17px 10px 10px;
  }
`

export const SupportMaterial = styled(Description)`
  padding: 25px 20px;

  @media screen and (max-width: 625px) {
    padding: 17px 10px 10px;
  }
`
interface SupportMaterialButtonProps {
  color?: string
  Backgroundcolor?: string
  BackgroundcolorIcon?: string
}

export const SupportMaterialButton = styled.button<SupportMaterialButtonProps>`
  height: 30px;
  font-size: 15px;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${(props) => props.Backgroundcolor};
  padding: 5px 5px 5px 40px;
  border: 0;
  border-radius: 4px;
  position: relative;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.94);
  }

  @media screen and (max-width: 496px) {
    height: 20px;
    font-size: 10px;
    padding: 5px 5px 5px 35px;

    svg {
      width: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    height: 20px;
    font-size: 9px;
    padding: 5px 5px 5px 23px;

    svg {
      width: 14px;
    }
  }
`

export const WrapperIconDownload = styled.div<SupportMaterialButtonProps>`
  width: 30px;
  height: 100%;
  background: ${(props) => props.BackgroundcolorIcon};
  border-radius: 4px 0 0 4px;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 496px) {
    width: 20px;
  }
`

export const WrapperSupportMaterialButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  @media screen and (max-width: 496px) {
    flex-wrap: wrap;
    gap: 5px;
  }
`

export const TitleSection = styled.h3`
  font-size: 1rem;
  font-weight: 700;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme['gray-200']};
    display: block;
    margin-top: 5px;
  }
`

export const TextSection = styled.p`
  font-size: 1rem;
  margin-top: 10px;
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
