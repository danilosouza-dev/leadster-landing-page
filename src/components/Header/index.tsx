import { ContainerHeader } from './styles'
import logoLeadster from '@/assets/logo.png'
import Imagem from 'next/image'

export function Header() {
  return (
    <>
      <ContainerHeader>
        <Imagem src={logoLeadster} alt="logo leadster" />
      </ContainerHeader>
    </>
  )
}
