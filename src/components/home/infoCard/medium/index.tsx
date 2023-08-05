import { Cards, Container, Icon, SubTitle, Title } from "./styles";

interface Props {
    title?: string ;
    subTitle?: string ;
    width?: string;
    height?: string;
    icon?: any;
  }

export default function InfoCardMedium({ title, subTitle, width, height, icon}:Props) {
    return (
        <Container>
            <Cards >
                <Icon src={icon}/>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </Cards>
        </Container>
    );
}