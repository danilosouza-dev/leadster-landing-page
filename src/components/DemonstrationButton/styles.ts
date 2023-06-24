import { styled } from 'styled-components'

export const ContainerButton = styled.button`
  width: 250px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme['blue-300']};
  border: none;
  border-radius: 35px;

  padding: 20px;

  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`
