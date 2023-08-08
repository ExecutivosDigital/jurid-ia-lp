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
}
export const Container = styled.div`
  //font-size: clamp(1rem, px2vw(50, 1024), 1.5rem);
  display: flex;
  background-color: ${Theme.color.primary_80};
  flex-direction: column;
`;
export const Section = styled.div<Props>`
  display: flex;
  background-color: ${(props) => (props.color ? props.color : Theme.color.primary_80)};
  padding: 30px;
  height: ${(props) => (props.height ? props.height : null)};
  flex-direction: column;
  justify-content: center;
  border: none;
  @media (max-width: 500px) {
    //height: 90%;
    
  }
  @media (max-width: 1024px) {
    
  }
`;
export const BigTitle = styled.label<Props>`
  font-size: 70px;
  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  @media (max-width: 768px) {
    font-size: ${px2vw(70, 768)};
  }
  @media (max-width: 1024px) {
    font-size: ${px2vw(70, 1024)};
  }
`;
export const Title = styled.label<Props>`
  font-size: 50px;
  font-family: bold;
  
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  z-index: 1;
  @media (max-width: 768px) {
    font-size: ${px2vw(46, 768)};
    width: 90%;
  }

`;
export const SubTitle = styled.label<Props>`
  font-size: 28px;
  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};  
  @media (max-width: 790px) {
    font-size: ${px2vw(24, 790)};
  }
`;
export const Logo = styled(Image) `
  width: 500px;
  height: 500px;
  margin-top: -180px;
  background-color: transparent;
  @media (max-width: 1024px) {
    width: ${px2vw(500, 1024)};
    height: ${px2vw(500, 1024)};
    margin-top: ${px2vw(-160, 1024)};
  }
    @media (max-width: 600px) {

    margin-top: ${px2vw(-40, 600)};

  }
`;
export const Form = styled.div<Props>`
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  background-color: transparent;
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0px')};
`;
export const FormSmallCard = styled.div<Props>`
  justify-content: space-between;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;

  @media (max-width: 700px) {
    flex-direction: column;    
  }
`;
export const Button = styled.button`
  width: 150px;
  height: 60px;
  background-color: ${Theme.color.secondary_100};
  border-radius: 10px;
  color:#fff;
  font-size: 18px;
  font-family: bold;
  margin-top:-80px;
  margin-left:100px;
  

  @media (max-width: 840px) {
    align-self: center;
    margin-top: 10px;
    margin-left:0px;
  }
`;
export const Input = styled.input`
  width: 300px;
  height: 60px;
  background-color: white;
  color: ${Theme.color.secondary_100};
  font-size: 20px;
  font-family: bold;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 40px;
  padding: 10px;
  &::placeholder {
      color: ${Theme.color.secondary_100};
    }
    @media (max-width: 500px) {
    font-size: ${px2vw(18, 500)};
    width: ${px2vw(300, 500)};
    height: ${px2vw(60, 500)};
    
    padding: ${px2vw(10, 500)};
  }

`;
export const SquareStyle = styled.div`
  height: 10px;
  width: 200px;
  background-color: ${Theme.color.secondary_100};
  margin-top: -20px;
  z-index: 0;
  margin-bottom: 10px;
  @media (max-width: 769px) {
    margin-top: ${px2vw(-20, 769)};
    width:${px2vw(200, 769)};
  }
`;
export const VideoPlayer = styled.div`
  background-color: transparent;
  display: flex;
  width: 80vw;
  height: auto;
  align-self: center;
  border: 2px solid ${Theme.color.secondary_100};
`;
export const VideoContainer = styled.div`
position: relative;
  width: 100%; /* Ocupa 100% da largura disponível */
  padding-bottom: 56.25%; /* Proporção de aspecto 16:9 */
  height: 0; /* Definido para 0 para calcular a altura com base no padding-bottom */

`;

export const VideoFrame = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
`;
export const VideoTitle = styled.div`
  background-color: ${Theme.color.secondary_100};
  width: 70vw;
  height: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
  font-size: 50px;
  font-family: bold;
  font-weight: bold;
  border-radius: 10px;
  @media (max-width: 790px) {
    font-size: ${px2vw(45, 790)};
    width: 80vw;
  }
`;