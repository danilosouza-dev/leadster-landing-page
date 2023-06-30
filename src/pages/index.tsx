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
import { ModalVideo } from '@/components/ModalVideo'
import { Pagination } from '@/components/Pagination'
import { ModalChat } from '@/components/ModalChat'
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
  const [isModaVideolOpen, setIsModaVideolOpen] = useState(false)
  const [isModalChatOpen, setIsModalChatOpen] = useState(false)

  const [videoId, setVideoId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [selectedTagButtonId, setSelectedTagButtonId] = useState(0)
  const [selectedTagButtonLabel, setSelectedTagButtonLabel] = useState('')
  const [sortBy, setSortBy] = useState('Mais Recentes')

  const [videosList, setVideosList] = useState<Video[]>(videos)
  const [currentPage, setCurrentPage] = useState(0)
  const videosPerPage = 9
  const [totalPages, setTotalPages] = useState(
    Math.ceil(videosList.length / videosPerPage - 1),
  )

  const startIndex = currentPage * videosPerPage
  const endIndex = startIndex + videosPerPage
  const currentItems = videosList.slice(startIndex, endIndex)

  const filteredVideosList =
    sortBy === 'Mais Recentes'
      ? handleCurrentVideos().sort(
          (a, b) =>
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime(),
        )
      : sortBy === 'Mais Antigos'
      ? handleCurrentVideos().sort(
          (a, b) =>
            new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime(),
        )
      : currentItems.filter(
          (video) =>
            (video.id.videoId &&
              video.snippet.title.includes(selectedTagButtonLabel)) ||
            video.snippet.description.includes(selectedTagButtonLabel),
        )

  function handleCurrentVideos() {
    const currentVideos = videosList
      .filter((video) => video.id.videoId)
      .slice(startIndex, endIndex)
    return currentVideos
  }

  useEffect(() => {
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: 'smooth',
    })
  }, [currentPage])

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
      setCurrentPage(0)
      setTotalPages(Math.ceil(videos.length / videosPerPage - 1))
    }

    fetchVideos()
    setSortBy('Mais Recentes')
  }, [selectedTagButtonLabel])

  useEffect(() => {
    const pp = videosList.filter(
      (video) =>
        (video.id.videoId &&
          video.snippet.title.includes(selectedTagButtonLabel)) ||
        video.snippet.description.includes(selectedTagButtonLabel),
    )
    if (pp.length > videosPerPage) {
      setTotalPages(Math.ceil(pp.length / videosPerPage - 1))
    } else {
      setTotalPages(Math.ceil(pp.length / videosPerPage))
    }
  }, [sortBy])

  function handleColorButton(button: Button) {
    if (button.id === selectedTagButtonId) {
      setSelectedTagButtonId(0)
      setSelectedTagButtonLabel('')
      setSortBy('Mais Recentes')
    } else {
      setSelectedTagButtonId(button.id)
      setSelectedTagButtonLabel(button.label)
      setSortBy('Mais Recentes')
    }
  }

  function handleSelectFilter(selectedLabel: string) {
    if (selectedTagButtonLabel.length) {
      setSortBy(selectedLabel)
    }
  }

  function handleOpenModalVideo(
    videoId: string,
    title: string,
    description: string,
  ) {
    setIsModaVideolOpen(true)
    setVideoId(videoId)
    setTitle(title)
    setDescription(description)
  }

  function handleCloseModalChat() {
    setIsModalChatOpen(false)
  }

  function handleOpenModalChat() {
    setIsModalChatOpen(true)
  }

  function handleCloseModalVideo() {
    setIsModaVideolOpen(false)
  }

  function handlePagination(page: number) {
    setCurrentPage(page)
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
          <SelectFilter onSelectFilter={handleSelectFilter} sortBy={sortBy} />
        </WrapperFilter>

        <WrapperCardVideos>
          <AnimatePresence>
            {filteredVideosList.map((video: Video) => {
              return (
                <CardVideo
                  key={video.id.videoId}
                  videoId={video.id.videoId}
                  title={video.snippet.title}
                  description={video.snippet.description}
                  thumbnail={video.snippet.thumbnails.medium.url}
                  onModalOpen={handleOpenModalVideo}
                />
              )
            })}
          </AnimatePresence>
        </WrapperCardVideos>
        <Pagination
          pages={totalPages}
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
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
            <DemonstrationButton
              text="Ver demonstração"
              onModalChatOpen={handleOpenModalChat}
            />
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

      <AnimatePresence>
        <ModalVideo
          isOpen={isModaVideolOpen}
          onClose={handleCloseModalVideo}
          videoId={videoId}
          title={title}
          description={description}
        />
      </AnimatePresence>

      <AnimatePresence>
        <ModalChat isOpen={isModalChatOpen} onClose={handleCloseModalChat} />
      </AnimatePresence>
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
