import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
  }
  html {
    height: 100vh;
  }
`;

export const mainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(141.8deg, #ECEEF8 2.92%, #CCCFDE 111.13%);
`;

export const titleContainer = styled.div`
  width: 70%;
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
  margin-top: -25%;
  letter-spacing: -0.0111111em;
  color: #4E535E;
  mix-blend-mode: normal;
  opacity: 0.44;
  display: flex;
  flex-direction: column;
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

export const questionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 13%;
  align-items: center;
`

export const answerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: fit-content;
  align-items: flex-end;
`

export const profileImg = styled.img`
  width: 120px;
  height: 120px;
  align-items: flex-start;
  margin-right: 2%;
`

export const speechBubble = styled.div<{direction: string}>`
  width: ${(props) =>
    props.direction === "left" ? "fit-content" : "500px"};
  height: fit-content;
  background-color: ${(props) =>
    props.direction === "left" ? "rgba(255, 255, 255, 0.4)" : "rgba(16, 33, 65, 0.4)"};
  backdrop-filter: blur(11.5318px);
  border-radius: 100px;
  
  white-space: pre-line;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 650;
  font-size: 22px;
  line-height: ${(props) =>
    props.direction === "left" ? "80px" : "40px"};
  letter-spacing: -0.0111111em;
  color: ${(props) =>
    props.direction === "left" ? "#4E535E" : "#FFFFFF"};

  mix-blend-mode: normal;
  opacity: 0.4;

  padding: ${(props) => 
    props.direction === "left" ? "0 6%" : "2% 6%"};
  margin-bottom: ${(props) =>
    props.direction === "left" ? "0" : "5%"};
`