import { styled } from 'styled-components'
import img from '@/assets/asset-header.png'
const imgUrl = img.src

const Wrapper = styled.div`
  max-width: 1400px;
`
const Container = styled.section`
  width: 100%;
  height: 600px;
`

export const ContainerHero = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme['background-soft-gray']};
`
export const WrapperHero = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 150px;
`
export const WebinarTag = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme['blue-300']};

  padding: 6px 20px;
  margin-bottom: 10px;

  border: solid 2px ${({ theme }) => theme['blue-300']};
  border-radius: 30px 30px 30px 5px;
`
export const HeadlineHero = styled.h1`
  width: 850px;

  text-align: center;
  color: ${({ theme }) => theme['gray-300']};
  line-height: 4.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding: 0 70px;

  span {
    display: block;
    font-size: 5.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme['blue-300']};
  }

  &::before {
    content: '';
    background-image: url(${imgUrl});
    background-size: cover;
    position: absolute;
    top: 65px;
    right: 70px;
    height: 35px;
    width: 54px;
  }

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    display: block;
    background: ${({ theme }) => theme['gray-100']};
    margin: 30px 0 15px;
  }
`
export const SubHeadlineHero = styled.p`
  font-size: 19px;
  color: ${({ theme }) => theme['gray-300']};
`
export const ContainerFreeTrial = styled.section`
  font-size: 19px;
  color: ${({ theme }) => theme['gray-300']};
`
