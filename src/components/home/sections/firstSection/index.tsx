import Theme from "@/styles/themes";
import { BigTitle, Button, Container, Form, FormButton, FormLogo, Logo, Section, SubTitle } from "./styles";
import { useRef } from "react";
import RegistrationCard from "../../registrationCard";
import PulseAnimation from "../../animacoes/pulse/PulseAnimation";

export default function FirstSection() {

    const registrationCardRef = useRef<HTMLDivElement>(null);



    const scrollToRegistrationCard = () => {
        const registrationCardElement = document.getElementById("registrationCard");
        if (registrationCardElement) {
          registrationCardElement.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
        <Section color={Theme.color.primary_100} height="100vh" >             

            <Container>
            <Form height="100%" >
                <Form width="80vw"flexDirection="column" > 
                <BigTitle color={Theme.color.secondary_100}>
                Primeira Inteligência Artificial Focada em Seu Escritório
            </BigTitle>
                <Form>       
                <SubTitle>
                Transformando a Maneira como Advogados Abordam Processos e Contratos,com uma Inteligência Artificial você terá muita produtividade e verá seu Escritório decolar sem precisar de Altos Investimentos
                </SubTitle> 
                </Form>                              
                </Form>
            <FormLogo>  
            <Logo src="/logoFull.svg"/>
            </FormLogo>  
            </Form>

            <FormButton>
            <PulseAnimation>
                
                <Button onClick={scrollToRegistrationCard}>
                Entrar na Waitlist
                </Button>
                </PulseAnimation>
                </FormButton>
                </Container> 

                   
        </Section>
  )
    }