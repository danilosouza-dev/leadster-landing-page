import { ContainerButton } from './styles'

interface DemonstrationButtonProps {
  text: string
}

export function DemonstrationButton({ text }: DemonstrationButtonProps) {
  return <ContainerButton>{text}</ContainerButton>
}
