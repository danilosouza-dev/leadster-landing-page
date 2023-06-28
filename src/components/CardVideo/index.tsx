import { ContainerCardVideo, Thumbnail, Title, ContainerTitle } from './styles'
import { FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface CardVideoProps {
  thumbnail: string
  title: string
}

export function CardVideo({ thumbnail, title }: CardVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ContainerCardVideo>
        <FaPlay size={70} fill="#e9e9e9" />
        <Thumbnail src={thumbnail} alt="" />
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
      </ContainerCardVideo>
    </motion.div>
  )
}
