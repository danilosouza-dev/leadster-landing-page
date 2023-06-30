import { LiaCloudDownloadAltSolid } from 'react-icons/lia'
import { IoCloseSharp } from 'react-icons/io5'
import { motion } from 'framer-motion'

import {
  BackDrop,
  ContainerModalVideo,
  Description,
  Header,
  SupportMaterial,
  SupportMaterialButton,
  TextSection,
  Title,
  TitleSection,
  WrapperIconDownload,
  WrapperSupportMaterialButton,
  WrapperVideo,
} from './styles'

interface ModalVideoProps {
  videoId: string
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
}

export function ModalVideo({
  videoId,
  title,
  description,
  isOpen,
  onClose,
}: ModalVideoProps) {
  if (!isOpen) {
    return null
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContainerModalVideo isOpen={false}>
        <IoCloseSharp size={30} color="#6f6f6f" onClick={onClose} />
        <Header>
          <Title>{title}</Title>
        </Header>

        <WrapperVideo>
          <iframe
            // src={`https://www.youtube.com/embed/${videoId}`}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </WrapperVideo>

        <Description>
          <TitleSection>Description</TitleSection>
          <TextSection>{description}</TextSection>
        </Description>

        <SupportMaterial>
          <TitleSection>Download</TitleSection>

          <WrapperSupportMaterialButton>
            <SupportMaterialButton Backgroundcolor="#bcf5e9" color="#37a890">
              <WrapperIconDownload BackgroundcolorIcon="#85e4d0">
                <LiaCloudDownloadAltSolid size={22} color="#37a890" />
              </WrapperIconDownload>
              Spreasheet.xls
            </SupportMaterialButton>

            <SupportMaterialButton Backgroundcolor="#C2E6FF" color="#579dcc">
              <WrapperIconDownload BackgroundcolorIcon="#97d5ff">
                <LiaCloudDownloadAltSolid size={22} color="#579dcc" />
              </WrapperIconDownload>
              Document.doc.xls
            </SupportMaterialButton>

            <SupportMaterialButton Backgroundcolor="#FFF8D0" color="#bfaf55">
              <WrapperIconDownload BackgroundcolorIcon="#eade96">
                <LiaCloudDownloadAltSolid size={22} color="#bfaf55" />
              </WrapperIconDownload>
              Presentation.ppt
            </SupportMaterialButton>
          </WrapperSupportMaterialButton>
        </SupportMaterial>
      </ContainerModalVideo>
      <BackDrop isOpen={isOpen} onClick={onClose} />
    </motion.div>
  )
}
