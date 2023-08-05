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
    margin-top: 20px;
    @media (max-width: 768px) {
    margin-top: ${px2vw(30, 768)};
  }
`;
export const Cards = styled.div<Props>`
    display: flex;
    background-color: ${Theme.color.primary_100};
    width: 43vw;
    height: 100% ;
    margin-top: 20px;
    border-radius: 10px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 700px) {
    width: 100vw;
    height: 25vh;
  }
`;
export const Icon = styled(Image)`
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
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};

  @media (max-width: 768px) {
    font-size: ${px2vw(35, 768)};
  }

`;
export const SubTitle = styled.label<Props>`
  font-size: 20px;
  
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: ${px2vw(20, 768)};
  }

`;