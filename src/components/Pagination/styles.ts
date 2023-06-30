import styled from 'styled-components'

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0px 0 80px;
`

export const PaginateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export const RoundEffect = styled.button`
  width: 35px;
  height: 40px;

  font-size: 22px;
  font-weight: 400;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  border: 0;
  margin: 5px;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme['blue-300']};
    border: 1px solid ${({ theme }) => theme['blue-300']};
    border-radius: 4px;
  }

  &.active {
    font-weight: 700;
    color: ${({ theme }) => theme['blue-300']};
    border: 1px solid ${({ theme }) => theme['blue-300']};
    border-radius: 4px;
  }
`
