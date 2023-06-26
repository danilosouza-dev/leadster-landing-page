import Imagem from 'next/image'
import imgComparative from '@/assets/comparativo_img_CTA.png'
import seloRD from '@/assets/selo_RD.png'
import noCard from '@/assets/no-card-dark.webp'
import rating from '@/assets/rating.webp'
import youtube from '../services/youtube'
import { GetServerSideProps } from 'next'

import {
  BackgroundShapeComparative,
  ComparativeText,
  ContainerComparative,
  ContainerDemonstrationButton,
  ContainerHero,
  ContainerNoCard,
  HeadlineComparative,
  HeadlineHero,
  NoCardText,
  RatingTaxt,
  SubHeadlineHero,
  WebinarTag,
  WrapperHeadlineComparative,
  WrapperHero,
} from '@/styles/pages/home'
import { DemonstrationButton } from '@/components/DemonstrationButton'

interface Video {
  kind: 'youtube#searchResult'
  etag: string
  id: {
    kind: string
    videoId: string
    channelId: string
    playlistId: string
  }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      (key: any): {
        url: string
        width: string
        height: string
      }
    }
    channelTitle: string
  }
}

interface StateProps {
  videos: Video[]
}

type Props = StateProps

export default function Home() {
  return (
    <>
      <ContainerHero>
        <WrapperHero>
          <WebinarTag>Webnars exclusivos</WebinarTag>
          <HeadlineHero>
            Menos Conversinha, <span>Mais Conversão</span>
          </HeadlineHero>
          <SubHeadlineHero>
            Conheças as estratégias que <b>mudaram o jogo</b> e como aplicá-la
            no seu negócio
          </SubHeadlineHero>
        </WrapperHero>
      </ContainerHero>

      <div style={{ height: 650 }}></div>

      <ContainerComparative>
        <Imagem src={imgComparative} alt="logo leadster" />

        <WrapperHeadlineComparative>
          <HeadlineComparative>
            Pronto para triplicar sua <span>Geração de Lead?</span>
          </HeadlineComparative>
          <ComparativeText>
            Criação e ativação em <span>4 minutos.</span>
          </ComparativeText>

          <ContainerDemonstrationButton>
            <DemonstrationButton text="Ver demonstração" />
            <Imagem src={seloRD} alt="logo leadster" />
          </ContainerDemonstrationButton>

          <ContainerNoCard>
            <Imagem src={noCard} alt="logo leadster" />
            <NoCardText>
              <b>Não</b> é necessário Cartão de Crédito
            </NoCardText>

            <Imagem src={rating} alt="logo leadster" />
            <RatingTaxt>
              <b>4.9/5</b> média de satisfação
            </RatingTaxt>
          </ContainerNoCard>
        </WrapperHeadlineComparative>

        <BackgroundShapeComparative />
      </ContainerComparative>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const response = await youtube.get('/search', { params: { q: 'camuda' } })
  const videos = response.data.items
  return {
    props: {
      videos,
    },
  }
}
