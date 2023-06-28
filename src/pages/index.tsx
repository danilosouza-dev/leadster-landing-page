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
  ContainerSectionCardVideos,
  CredicardText,
  HeadlineComparative,
  HeadlineHero,
  RatingTaxt,
  SubHeadlineHero,
  WebinarTag,
  WrapperCardVideos,
  WrapperFilter,
  WrapperHeadlineComparative,
  WrapperHero,
  WrapperTagButtons,
} from '@/styles/pages/home'
import { DemonstrationButton } from '@/components/DemonstrationButton'
import { CardVideo } from '@/components/CardVideo'
import { TagFilter } from '@/components/TagFilter'
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SelectFilter } from '@/components/SelectFilter'

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
      medium: {
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

type Button = {
  id: number
  label: string
}

const buttons = [
  { id: 1, label: 'Agência' },
  { id: 2, label: 'Chatbot' },
  { id: 3, label: 'Marketing Digital' },
  { id: 4, label: 'Geração de Leads' },
  { id: 5, label: 'Mídia Paga' },
]

export default function Home({ videos }: Props) {
  const [selectedTagButtonId, setSelectedTagButtonId] = useState(0)
  const [selectedTagButtonLabel, setSelectedTagButtonIdLabel] = useState('')
  const [videosList, setVideosList] = useState<Video[]>([])
  const [sortBy, setSortBy] = useState('Mais Recentes')

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await youtube.get('/search', {
        params: {
          channelId: 'UCrydTYsZKHPE_pe9NNLMeDA',
          q: selectedTagButtonLabel,
        },
      })
      const videos = response.data.items
      setVideosList(videos)
    }

    fetchVideos()
  }, [selectedTagButtonLabel, sortBy])

  function handleColorButton(button: Button) {
    if (button.id === selectedTagButtonId) {
      setSelectedTagButtonId(0)
      setSelectedTagButtonIdLabel('')
    } else {
      setSelectedTagButtonId(button.id)
      setSelectedTagButtonIdLabel(button.label)
    }
  }

  function handleSelectFilter(selectedLabel: string) {
    setSortBy(selectedLabel)
  }

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

      <ContainerSectionCardVideos>
        <WrapperFilter>
          <WrapperTagButtons>
            {buttons.map((button) => {
              return (
                <TagFilter
                  key={button.id}
                  label={button.label}
                  name={button.id === selectedTagButtonId ? 'selected' : ''}
                  onClick={() => handleColorButton(button)}
                />
              )
            })}
          </WrapperTagButtons>
          <SelectFilter onSelectFilter={handleSelectFilter} />
        </WrapperFilter>
        <WrapperCardVideos>
          <AnimatePresence>
            {sortBy === 'Mais Recentes'
              ? videosList
                  .filter((i) => i.id.videoId)
                  .sort(
                    (a, b) =>
                      new Date(b.snippet.publishedAt).getTime() -
                      new Date(a.snippet.publishedAt).getTime(),
                  )
                  .map((post: Video) => {
                    return (
                      <CardVideo
                        key={post.id.videoId}
                        thumbnail={post.snippet.thumbnails.medium.url}
                        title={post.snippet.title}
                      />
                    )
                  })
              : sortBy === 'Mais Antigos'
              ? videosList
                  .filter((i) => i.id.videoId)
                  .sort(
                    (a, b) =>
                      new Date(a.snippet.publishedAt).getTime() -
                      new Date(b.snippet.publishedAt).getTime(),
                  )
                  .map((post: Video) => {
                    return (
                      <CardVideo
                        key={post.id.videoId}
                        thumbnail={post.snippet.thumbnails.medium.url}
                        title={post.snippet.title}
                      />
                    )
                  })
              : videosList
                  .filter(
                    (i) =>
                      i.id.videoId &&
                      (i.snippet.title.includes(selectedTagButtonLabel) ||
                        i.snippet.description.includes(selectedTagButtonLabel)),
                  )
                  .map((post: Video) => {
                    return (
                      <CardVideo
                        key={post.id.videoId}
                        thumbnail={post.snippet.thumbnails.medium.url}
                        title={post.snippet.title}
                      />
                    )
                  })}
          </AnimatePresence>
        </WrapperCardVideos>
      </ContainerSectionCardVideos>

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
            <CredicardText>
              <b>Não</b> é necessário Cartão de Crédito
            </CredicardText>

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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await youtube.get('/search', {
    params: {
      channelId: 'UCrydTYsZKHPE_pe9NNLMeDA',
    },
  })
  const videos = response.data.items
  return {
    props: {
      videos,
    },
  }
}
