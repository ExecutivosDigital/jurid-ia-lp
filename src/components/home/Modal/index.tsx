
import { useRef, useState } from "react";
import { CloseButtonTop, Container, Content, CopyButton, FinishButton, Form, FormImages, FormSocial, FormText, FormTop, InstagramImage, Link, LogoImg, LogoText, SocialButton, Title, WhatsAppImage } from "./styles";

import Theme from "@/styles/themes";


interface ModalProps {
  open: boolean;
  close: () => void;
}

export default function ChangeBudgetStatusModal({
  open,
  close,
}: ModalProps) {
  const [copyButtonText, setCopyButtonText] = useState("Copiar");
  const fixedLink = "https://listadeespera.juridia.com.br"; // Texto fixo do input
  const inputRef = useRef<HTMLInputElement>(null);
  const openWhatsapp = () => {
    window.open("https://wa.me/send?text=Ja%20viu%20a%20nova%20Intligencia%20Artificial%20Juridica?%0AAcesse%20para%20saber%20os%20benficios:%0Ahttps://listadeespera.juridia.com.br");

} 
  const handleCopyClick = () => {
    try {
      if (inputRef.current) {
        inputRef.current.select();
        document.execCommand("Copiar");
        setCopyButtonText("copiado!");
        setTimeout(() => {
          setCopyButtonText("Copiar");
        }, 5000); // 5000 milissegundos = 5 segundos
      }
    } catch (err) {
      console.error("Não foi possível copiar o texto: ", err);
    }
  };

  return (
    <Container show={open} onHide={close} size='lg' >
      <Content>
        <FormTop>
        <CloseButtonTop onClick={close}> x </CloseButtonTop>
        <Form>
          <FormImages >
      <LogoImg width={120}height={120} src={'/logoImg.svg'} alt=""/>
      <LogoText width={120}height={120} src={'/logoText.svg'} alt=""/>
      </FormImages>
      </Form>
      </FormTop>
          <FormText>
            <Title size={20} marginTop='30px' color={Theme.color.secondary_100}>OBRIGADO POR ENTRAR NA LISTA DE ESPERA</Title>
            <Title size={9} marginTop='10px'>Entraremos em contato no lançamento para informar se voce é um dos 100 Primeiro.<br/> Mas todos que se inscreverem na Lista de Espera terão uma Grande Surpresa</Title>
            <Title size={20} marginTop='10px' ><strong style={{backgroundColor:'transparent', color:'#D2AE6D' , fontWeight:'normal'}} >#COMPARTILHE </strong>COM SEUS AMIGOS JURISTAS</Title>
                      
            {/* <SocialButton><InstagramImage src="/instagram.svg"/></SocialButton> */}
        
              <SocialButton onClick={openWhatsapp}>
                <WhatsAppImage src="/whatsapp.svg" />
              </SocialButton>

            
            <Form>
            <Link autoComplete="off" ref={inputRef} value={fixedLink}></Link>
            <CopyButton onClick={handleCopyClick}>{copyButtonText}</CopyButton>
            </Form>
            <FinishButton onClick={close}> Fechar</FinishButton>
          </FormText>

      </Content>
    </Container>
  );
}
