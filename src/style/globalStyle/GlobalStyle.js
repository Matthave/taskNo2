import { createGlobalStyle } from "styled-components";
import background from "../../IMG/backgroundApp.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing:border-box;
    border:none;
    outline:0;
  }

  html{
    font-size:10px;
  }

  body{
    position:relative;
    min-height:100vh;
    background-image: url(${background});
    background-position:center;
    background-size:cover;
    z-index:0;

    &:before{
  content: "";
  position: absolute;
  width:50%;
  height:100%;
  background-color: rgba(100,100,100,0.3);
  box-shadow: 0 0 15px 1px black;
  z-index:1 
    }
  }

  .app{
    position:relative;
    min-height:100vh;
  }

  .csvLink{
    position:absolute;
    bottom:0;
    width:100%;
    height: 25px;
    line-height:25px;
    text-align:center;
    font-size:1.2rem;
    background-color: rgba(0, 0, 0, 0.6);
    color:#fff;
    text-decoration:none;
  }
`;

export default GlobalStyle;
