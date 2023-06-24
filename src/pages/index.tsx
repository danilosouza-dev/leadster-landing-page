import {
  ContainerHero,
  HeadlineHero,
  SubHeadlineHero,
  WebinarTag,
  WrapperHero,
} from '@/styles/pages/home'

export default function Home() {
  return (
    <ContainerHero>
      <WrapperHero>
        <WebinarTag>Webnars exclusivos</WebinarTag>
        <HeadlineHero>
          Menos Conversinha, <span>Mais Conversão</span>
        </HeadlineHero>
        <SubHeadlineHero>
          Conheças as estratégias que <b>mudaram o jogo</b> e como aplicá-la no
          seu negócio
        </SubHeadlineHero>
      </WrapperHero>
    </ContainerHero>
  )
}
