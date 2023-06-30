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

  overflow: visible;
`

export const WrapperHero = styled(wrapper)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 150px;

  p {
    text-align: center;
  }

  @media screen and (max-width: 850px) {
    padding: 20px;
  }
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

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
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

  @media screen and (max-width: 850px) {
    width: 270px;
    &::after {
      content: '';
      width: 100%;
    }
    &::before {
      display: none;
    }
  }

  @media screen and (max-width: 610px) {
    width: none;
    font-size: 1.8rem;
    line-height: normal;

    span {
      font-size: 3rem;
    }

    &::after {
      content: '';
      width: 100%;
    }
    &::before {
      top: 135px;
      right: 50px;
    }
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

  overflow: hidden;

  img {
    z-index: 1;
  }

  @media screen and (max-width: 1440px) {
    overflow-y: hidden;
  }

  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;

    & > img {
      width: 100%;
      aspect-ratio: 3/2;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0 0 50px;
  }

  @media screen and (max-width: 740px) {
    padding: 0;
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

  @media screen and (max-width: 1350px) {
    justify-content: center;
    align-items: center;
    padding: 0 0 50px;

    height: auto;
  }

  @media screen and (max-width: 550px) {
    padding: 0 15px 50px;
  }

  @media screen and (max-width: 600px) {
    margin-top: -70px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: -100px;
    padding-bottom: 150px;

    h2 {
      font-size: 1.8rem;
    }
  }
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

  @media screen and (max-width: 1440px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 1350px) {
    font-size: 2.8rem;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`

export const ContainerDemonstrationButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
`

export const ContainerNoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  margin-top: 18px;

  @media screen and (max-width: 1350px) {
    flex-direction: column;
  }
`

export const CredicardText = styled.div`
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
  border-right: 2px solid ${({ theme }) => theme['gray-200']};

  @media screen and (max-width: 1350px) {
    border: 0;
  }
`

export const RatingTaxt = styled.div`
  font-size: 1.05rem;
  padding-right: 10px;

  display: flex;
  align-items: center;
  gap: 10px;
`

export const ContainerSectionCardVideos = styled(container)`
  flex-direction: column;
  overflow: visible;
`

export const WrapperCardVideos = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 50px 15px;

  @media screen and (max-width: 768px) {
    padding: 0 7px 15px;
    gap: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 75px 130px 20px;

  @media screen and (max-width: 850px) {
    padding: 75px 50px 20px;
  }
`

export const WrapperTagButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`
