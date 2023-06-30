import { ContainerButton } from './styles'

interface DemonstrationButtonProps {
  text: string
  onModalChatOpen: () => void
}

export function DemonstrationButton({
  text,
  onModalChatOpen,
}: DemonstrationButtonProps) {
  return <ContainerButton onClick={onModalChatOpen}>{text}</ContainerButton>
}
