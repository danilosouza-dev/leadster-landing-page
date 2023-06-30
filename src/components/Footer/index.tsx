import React from 'react'
import {
  ContainerFooter,
  ListMenu,
  NavMenu,
  SocialItem,
  WrapperNav,
} from './styles'
import Image from 'next/image'
import logoAnimation from '@/assets/logo-leadster-animada.gif'
import { BiLogoLinkedin, BiLogoInstagram, BiLogoFacebook } from 'react-icons/bi'
import Link from 'next/link'

export function Footer() {
  return (
    <>
      <ContainerFooter>
        <Image src={logoAnimation} alt="logo leadster" />
        <h3>Transformando visitantes em clientes.</h3>

        <WrapperNav>
          <NavMenu>
            <ListMenu>
              <li>Links Principais</li>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Ferramentas</Link>
              </li>
              <li>
                <Link href="#">Preços</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
            </ListMenu>

            <ListMenu>
              <li>Cases</li>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Ferramentas</Link>
              </li>
              <li>
                <Link href="#">Preços</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
            </ListMenu>

            <ListMenu>
              <li>Materiais</li>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Ferramentas</Link>
              </li>
              <li>
                <Link href="#">Preços</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
            </ListMenu>

            <ListMenu>
              <li>Siga a Leadster</li>
              <li>
                <SocialItem>
                  <Link href="#">
                    <BiLogoLinkedin size={25} />
                  </Link>
                </SocialItem>

                <SocialItem>
                  <Link href="#">
                    <BiLogoFacebook size={25} />
                  </Link>
                </SocialItem>

                <SocialItem>
                  <Link href="#">
                    <BiLogoInstagram size={25} />
                  </Link>
                </SocialItem>
              </li>
              <li>
                <Link href="mailto:contato@leadster.com.br">
                  E-mail: contato@leadster.com.br
                </Link>
              </li>
              <li>
                <Link href="tel: +5542988289851">Telefone: (42) 988289851</Link>
              </li>
            </ListMenu>
          </NavMenu>
        </WrapperNav>
      </ContainerFooter>
    </>
  )
}
