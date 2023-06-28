import { styled } from 'styled-components'
import img from '@/assets/asset-header.png'
const imgUrl = img.src

const wrapper = styled.div`
  max-width: 1400px;
  height: 600px;

  display: flex;
`

const container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

export const ContainerHero = styled(container)`
  background: ${({ theme }) => theme['background-soft-gray']};

  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const WrapperHero = styled(wrapper)`
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
    background: ${({ theme }) => theme['gray-100']};

    margin: 30px 0 15px;
    display: block;
  }
`

export const SubHeadlineHero = styled.p`
  font-size: 19px;
  color: ${({ theme }) => theme['gray-300']};
`

export const ContainerComparative = styled(container)`
  font-size: 19px;
  color: ${({ theme }) => theme['gray-300']};
  background: ${({ theme }) => theme['background-soft-gray']};

  padding: 50px 0;
  position: relative;

  img {
    z-index: 1;
  }
`

export const BackgroundShapeComparative = styled.div`
  width: 1100px;
  height: 1022px;

  background-color: #e6f3ff;

  border-radius: 80px;
  display: block;
  position: absolute;

  top: 300px;
  left: -350px;
  transform: rotate(-43deg);

  z-index: 0;
`

export const WrapperHeadlineComparative = styled(wrapper)`
  flex-direction: column;
  justify-content: center;

  padding-left: 50px;
  position: relative;

  z-index: 1;
`

export const HeadlineComparative = styled.h2`
  text-align: left;
  line-height: 3rem;
  color: ${({ theme }) => theme['gray-300']};

  display: flex;
  flex-direction: column;
  position: relative;

  span {
    display: block;
    font-weight: 700;
    color: ${({ theme }) => theme['gray-300']};
  }
`

export const ContainerDemonstrationButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ComparativeText = styled.h3`
  margin-top: 10px;

  &::after {
    content: '';
    width: 110%;
    height: 2px;
    background: ${({ theme }) => theme['gray-100']};
    margin: 30px 0 15px;
    display: block;
  }

  span {
    font-weight: 700;
    color: ${({ theme }) => theme['gray-300']};
  }
`

export const ContainerNoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  margin-top: 18px;
`

export const CredicardText = styled.div`
  font-size: 1.05rem;
  padding-right: 10px;
  border-right: 2px solid ${({ theme }) => theme['gray-200']};
`

export const RatingTaxt = styled.div`
  font-size: 1.05rem;
  padding-right: 10px;
`

export const ContainerSectionCardVideos = styled(container)`
  flex-direction: column;
`

export const WrapperCardVideos = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 100px 100px;

  &::before {
    content: '';
    width: 95%;
    height: 2px;
    background: ${({ theme }) => theme['gray-100']};
    margin-bottom: 30px;
  }

  &::after {
    content: '';
    width: 95%;
    height: 2px;
    background: ${({ theme }) => theme['gray-100']};
  }
`

export const WrapperFilter = styled.div`
  max-width: 1440px;
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 75px 0 20px;
`

export const WrapperTagButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`
