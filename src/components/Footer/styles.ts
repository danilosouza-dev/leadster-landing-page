import { styled } from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 0.9rem;
    font-weight: 200;

    margin-bottom: 50px;
  }
`

export const WrapperNav = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 100px;

  @media screen and (max-width: 1254px) {
    padding: 0 50px;
  }
`

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 35px;
  }

  @media screen and (max-width: 635px) {
    nav:last-child {
      width: 190px;
    }
  }

  @media screen and (max-width: 487px) {
    flex-direction: column;
    align-content: center;
  }
`

export const ListMenu = styled.nav`
  font-size: 19px;
  list-style: none;
  display: flex;

  flex-direction: column;
  gap: 20px;

  li:not(:first-child) {
    cursor: pointer;
  }

  li:first-child {
    font-size: 18px;
    font-weight: 700;

    margin-bottom: 20px;
  }

  li:nth-child(2) {
    display: flex;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme['gray-200']};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme['blue-300']};
    }
  }

  @media screen and (max-width: 487px) {
    gap: 5px;
    align-items: center;

    li:first-child {
      margin-bottom: 8px;
    }
  }
`

export const SocialItem = styled.div`
  width: 46px;
  height: 46px;
  background: #f7f8fb;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  transition: all 0.3s;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: ${({ theme }) => theme['blue-300']};

    svg {
      fill: #fff;
    }
  }
`
