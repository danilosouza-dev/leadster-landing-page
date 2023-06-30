import { BackDrop, ContainerModalChat } from './styles'
import { motion } from 'framer-motion'

interface ModalChatProps {
  isOpen: boolean
  onClose: () => void
}

export function ModalChat({ isOpen, onClose }: ModalChatProps) {
  if (!isOpen) {
    return null
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContainerModalChat isOpen={false}>
          <iframe
            lang="pt-BR"
            src="https://leadster.com.br/account-creation-chatbot"
            className="fullscreen-chat"
            width="600"
            height="480"
            data-hj-allow-iframe=""
            id="registration-chatbot"
          ></iframe>
        </ContainerModalChat>
      </motion.div>
      <BackDrop isOpen={isOpen} onClick={onClose} />
    </>
  )
}
