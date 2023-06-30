import { ContainerCardVideo, Thumbnail, Title, ContainerTitle } from './styles'
import { FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface CardVideoProps {
  videoId: string
  title: string
  description: string
  thumbnail: string
  onModalOpen: (videoId: string, title: string, description: string) => void
}

export function CardVideo({
  videoId,
  title,
  description,
  thumbnail,
  onModalOpen,
}: CardVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ContainerCardVideo
        onClick={() => onModalOpen(videoId, title, description)}
      >
        <FaPlay size={70} fill="#e9e9e9" />
        <Thumbnail src={thumbnail} alt="" />
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
      </ContainerCardVideo>
    </motion.div>
  )
}
