import { styled } from 'styled-components'

export const ContainerCardVideo = styled.div`
  width: 360px;
  height: 290px;
  max-height: 290px;
  display: flex;
  flex-direction: column;
  background: #c9c9c9;
  border-radius: 16px;

  box-shadow: 0 0px 20px 5px #ddd;
  position: relative;

  transition: all 0.5s;
  cursor: pointer;

  img {
    max-height: 200px;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -110%);
    transition: all 0.5s;
  }

  &:hover {
    transform: translateY(-5px);

    svg {
      fill: ${({ theme }) => theme['background-white']};
    }

    h1 {
      color: ${({ theme }) => theme['blue-300']};
    }
  }

  &::before {
    content: '';
    width: 360px;
    height: 202.5px;
    border-radius: 16px 16px 0 0;
    position: absolute;
    inset: 0;
    visibility: hidden;
    transition: all 0.5s;
  }
  &:hover::before {
    visibility: visible;
    background: rgba(0, 125, 255, 0.5);
  }
`

export const Thumbnail = styled.img`
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  transition: transform 0.5s;
`
export const ContainerTitle = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 0 0 16px 16px;
  background: #fff;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;

  transition: all 0.5s;
`
