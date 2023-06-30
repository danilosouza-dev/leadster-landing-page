import { styled } from 'styled-components'

export const ContainerSelectFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const WrapperSelect = styled.div`
  width: 190px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 8px;
  background: #fff;
  cursor: pointer;

  position: relative;

  &:hover > div {
    opacity: 1;
  }

  &:hover svg {
    transform: rotate(180deg);
  }

  label {
    padding-left: 25px;
  }

  @media screen and (max-width: 767px) {
    width: 170px;
  }
`

export const Select = styled.div`
  width: 190px;
  height: 130px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  padding: 10px 20px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;

  box-shadow: 0 0px 20px 5px #ddd;
  position: absolute;
  top: 120%;
  z-index: 1;
  opacity: 0;
  transition: opacity 367ms cubic-bezier(0.21, 0, 0.07, 1);
`

export const Option = styled.div`
  width: 100%;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme['blue-300']};
  }
`

export const WrapperArrow = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  svg {
    transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
  }
`
export const SortBy = styled.h4`
  font-weight: 700;

  @media screen and (max-width: 767px) {
    width: 100px;
  }
`
