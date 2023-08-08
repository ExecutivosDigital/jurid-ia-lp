import Theme from "@/styles/themes";
import { BigTitle, Button, Container, Form, FormSmallCard, Input, Logo, Section, SquareStyle, SubTitle, Title, VideoContainer, VideoFrame, VideoPlayer, VideoTitle } from "./styles";
import Icon from "../../../public/favicon.ico"
import RegistrationCard from "@/components/home/registrationCard";
import InfoCardLarge from "@/components/home/infoCard/large";
import InfoCardMedium from "@/components/home/infoCard/medium";
import InfoCardSmall from "@/components/home/infoCard/smal";
import FirstSection from "@/components/home/sections/firstSection";
import { useRef, useState } from "react";
import FadeInAnimation from "@/components/home/animacoes/fadeIn/FadeInAnimation";
import SlideInFromLeft from "@/components/home/animacoes/slideIn/SlideInFromLeft";
import SlideInFromBottom from "@/components/home/animacoes/slideIn/SlideInFromBottom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeInCenterAnimation from "@/components/home/animacoes/fadeInCenter/FadeInAnimation";


export default function Home() {
  const registrationCardRef = useRef(null);
  return ( 
  <Container>
 
    <FirstSection/>

    {/* Second Section */}
   
    <Section>
      
      <Title size={48}>
        Porque escolher a Jurid.IA?
      </Title>
      <SquareStyle/>
      <SubTitle >
        Descubra o Potencial da Jurid Ia em Detalhes
      </SubTitle>
      
      <SlideInFromLeft delay={1}>
      <InfoCardLarge 
        title="Correção de Documentos" 
        subTitle="Uma Inteligência Artificial que fará a correção de possíveis erros de português, concordância verbal e Leis, e até trará opiniões que podem fazer com que seu trabalho seja mais completo" 
        icon={'/4.svg'}
      />
      </SlideInFromLeft>
      <FormSmallCard>
      <SlideInFromLeft delay={1}>
        <InfoCardMedium title="Automação de Documentos" 
          subTitle="Simplifique a criação de documentos legais complexos. Crie contratos, petições e outros materiais com apenas alguns cliques." 
          icon={'/2.svg'}
        />
        </SlideInFromLeft>
        <SlideInFromLeft delay={1}>
        <InfoCardMedium
          title="Pesquisa Jurídica Avançada" 
          subTitle="Acesse um vasto banco de dados jurídicos com rapidez e precisão, encontrando informações relevantes para embasar seus casos." 
          icon={'/3.svg'}
        />
        </SlideInFromLeft>
      </FormSmallCard>
    </Section>
    {/* Third Section */}
    <Section height="90%">
      <Title size={48}>
        3 Simples Passos para usar a Jurid-IA
      </Title>
      <SquareStyle/>
      <FormSmallCard>
        <SlideInFromBottom delay={1}>
        <InfoCardSmall title="Voce deve se Cadastrar" 
          subTitle="Você precisa se cadastrar na Plataforma Jurid IA  para poder ter Acesso." 
          icon={'/5.svg'}
        />
        </SlideInFromBottom>
        <SlideInFromBottom delay={1}>
        <InfoCardSmall title="Insira o Desafio que quer Resolver" 
          subTitle=" Inserir os problemas que está passando, seja fazer um Contrato, outra visão sobre o Processo, ver possíveis falhas e diversos outras coisas" 
          icon={'/6.svg'}
        />
        </SlideInFromBottom>
        <SlideInFromBottom delay={1}>
        <InfoCardSmall title="Deixe a Mágica Acontecer" 
          subTitle=" Agora a Jurid IA utilizara de toda sua Tecnologia especial para poder fazer tudo para você" 
          icon={'/7.svg'}
        />
        </SlideInFromBottom> 
      </FormSmallCard>
    </Section>
    {/* fourth Section */}
    <Section>
      <VideoTitle>Jurid IA Explicado para Você</VideoTitle>
        <VideoPlayer>
          <VideoContainer >
            <VideoFrame 
            src="https://www.youtube.com/embed/2pBZoxaX5zw?autoplay=1" 
            title="⚖️Lista de Espera Exclusiva - Jurid IA 🧠" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            />
          </VideoContainer>
        </VideoPlayer>
    </Section>
    <Section ref={registrationCardRef}>
     <FadeInAnimation delay={0.5}>
      <RegistrationCard/>
      </FadeInAnimation>
    </Section>
  </Container>
  );
}
