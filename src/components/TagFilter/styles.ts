import { styled } from 'styled-components'

interface TagFilterProps {
  name?: 'selected' | ''
}

export const ContainerTagFilter = styled.button<TagFilterProps>`
  font-size: 18px;
  font-weight: 400;
  text-wrap: nowrap;
  color: ${({ theme }) => theme['gray-300']};
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 30px;
  padding: 8px 18px;
  cursor: pointer;
  transition: all 0.5s;

  background: transparent;

  &.selected {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['blue-300']};
    border: 1px solid ${({ theme }) => theme['blue-300']};
  }

  &.selected:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['blue-300']};
  }

  &:hover {
    color: ${({ theme }) => theme['blue-300']};
    border: 1px solid ${({ theme }) => theme['blue-300']};
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`
