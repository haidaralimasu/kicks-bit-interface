import styled, { createGlobalStyle } from "styled-components";
import LatoRegular from "../fonts/LatoRegular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato Regular';
    src: url(${LatoRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato Regular', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#FF5F1F" : "#FF5F1F")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#FF6F1F" : "#FF6F1F")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
