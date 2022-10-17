import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    background: linear-gradient(141.8deg, #ECEEF8 2.92%, #CCCFDE 111.13%);
  }
  html {
    height: 100%;
  }
`;

export const mainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const titleContainer = styled.div`
  width: 1000px;
  height: fit-content;
`;

export const mainTitle = styled.div`
  font-size: 220px;
  font-weight: 650;
  font-family: 'Poppins';
  line-height: 420px;
  position: relative;
  color: rgba(78, 83, 94, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const subTitle = styled.div`
  white-space: pre-line;
  font-weight: 650;
  font-size: 70px;
  font-family: 'Poppins';
  line-height: 80px;
  position: relative;
  margin-top: -250px;
  letter-spacing: -0.0111111em;
  color: #4E535E;
  mix-blend-mode: normal;
  opacity: 0.44;
  display: flex;
  flex-direction: column;
  //margin-left: 15%;
  text-align: left;
`;

export const btnStart = styled.button`
  width: 340px;
  height: 71px;
  background: rgba(16, 33, 65, 0.247934);
  backdrop-filter: blur(11.5318px);
  border-radius: 100px;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  
  margin-top: 10%;
  cursor: pointer;
`;