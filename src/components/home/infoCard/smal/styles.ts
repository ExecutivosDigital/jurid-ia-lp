import Theme from "@/styles/themes";
import { styled } from "styled-components";
import { Image } from "react-bootstrap";
import px2vw from "@/utils/size";

interface Props {
    color?: string ;
    marginTop?: string ;
    marginLeft?: string ;
    size?: string | number;
    flexDirection?: string;
    width?: string;
    height?: string;
    justifyContent?: string;
  }

export const Container = styled.div`
    display: flex;
    background-color: transparent;
`;
export const Cards = styled.div<Props>`
    display: flex;
    background-color: ${Theme.color.primary_100};
    width: 30vw;
    height: 60vh ;
    margin-top: 50px;
    border-radius: 10px;
    padding: 20px;
    flex-direction: column;

    @media (max-width: 700px) {
    width: 100vw;
    height: 20vh;
  }
`;
export const Form = styled.div`
    display: flex;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
export const Icon = styled(Image)`
    margin-top: -15px;
    width: 60px;
    height: 60px;
    background-color: transparent;
`;
export const Title = styled.label<Props>`
  font-size: 35px;
  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '-10px')};
  @media (max-width: 768px) {
    font-size: ${px2vw(35, 768)};
  }

`;

export const SubTitle = styled.label<Props>`
  font-size: 18px;
  
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: ${px2vw(18, 768)};
  }

`;