import { styled } from "styled-components";
import Theme from "@/styles/themes";
import { Image } from "react-bootstrap";
import px2vw from "@/utils/size";




interface ContainerProps {
  type: boolean;
}
interface Props {
  color?: string ;
  marginTop?: string ;
  marginLeft?: string ;
  marginBottom?: string ;
  size?: string | number;
  flexDirection?: string;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignSelf?: string;
}

export const Section = styled.div<Props>`
  display: flex;
  background-color: ${(props) => (props.color ? props.color : Theme.color.primary_80)};
  padding: 30px;
  height: ${(props) => (props.height ? props.height : null)};
  flex-direction: column;


  @media (max-width: 500px) {
    //height: 90%;
    
  }
  @media (max-width: 1024px) {
    
  }
`;
export const Container = styled.div`
    display:flex;
    align-self: center;
    background-color: ${Theme.color.primary_100};
    flex-direction: column;
    height: 60%;
    width: 100%;
`;
export const FormLogo = styled.div`
    display:flex;
    align-self: center;
    justify-content: center;
    background-color: transparent;
    flex-direction: column;    
    width: 100%;
    @media (max-width: 500px) {   
      margin-top: 20%;
  }

`;
export const BigTitle = styled.label<Props>`
  font-size: 65px;
  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  line-height: 1.2;
  width: 50vw;
  @media (max-width: 768px) {
    font-size: ${px2vw(65, 768)};
  }
  @media (max-width: 600px) {
    font-size: ${px2vw(65, 768)};
    width: 80vw;
  }

`;
export const Title = styled.label<Props>`
  display: flex;
  font-size: 50px;

  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  z-index: 1;
  line-height-step: 5px;
  line-height: 0.1;
  @media (max-width: 768px) {
    font-size: ${px2vw(50, 768)};
  }

`;
export const SubTitle = styled.label<Props>`
  font-size: 26px;
  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};

  
  @media (max-width: 790px) {
    font-size: ${px2vw(24, 790)};
    margin-top: 10px;
    
  }
`;
export const Logo = styled(Image) `
  width: 350px;
  height: 450px;
  align-self: center;
  background-color: transparent;
  
  @media (max-width: 1124px) {
    width: ${px2vw(350, 1024)};
    height: ${px2vw(450, 1024)};
    margin-top: ${px2vw(-160, 1024)};
  }
    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
    align-self: center;
    margin-top: ${px2vw(-40, 600)};

  }
`;
export const Form = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : null)};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  background-color: transparent;
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : null)};
  @media (max-width: 600px) {
    flex-direction: column;

  }
;
  
`;
export const Button = styled.button`
  width: 150px;
  height: 60px;
  background-color: ${Theme.color.secondary_100};
  border-radius: 10px;
  color:#fff;
  font-size: 18px;
  font-family: bold;
  margin-top:20vh;
  margin-left: 10vh;
  

  @media (max-width: 938px) {
    margin-top: 200px;
    align-self: center;
    margin-left: 0;
  }
  @media (max-width: 711px) {
    margin-top: 20vh;
    margin-left: 0px;
}
  
  
`;
export const FormButton = styled.div`
    display:flex;    
    background-color: transparent;
    height: 70px ;
    width: 100%;
  
    @media (max-width: 900px) {
      justify-content: center;
    margin-left:0px;
    
  }
`;