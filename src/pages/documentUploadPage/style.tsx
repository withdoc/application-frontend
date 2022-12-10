import styled from "styled-components";

export const mainContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    background: #FFFFFF;
`;

export const folderContainer = styled.div`
    width: 19%;
    height: 1450px;
    background: #102141;
    border-radius: 0 30px 30px 0;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 20%;
    align-items: center;
`

export const profileImg = styled.img`
    width: 120px;
    height: 120px;
    margin-top: 10%;
`

export const userName = styled.div`
  white-space: pre-line;
  font-weight: 700;
  font-size: 25px;
  font-family: 'Poppins-Bold';
  line-height: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #FFFFFF;
  margin-top: 5%;
`;

export const line = styled.div`
    width: 90%;
    left: 19px;
    top: -2005px;   
    border: 0.5px solid #FFFFFF;
    margin-top: 10%;
`;

export const forderName = styled.div`
  white-space: pre-line;
  font-weight: 700;
  font-size: 25px;
  font-family: 'Poppins-Bold';
  line-height: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #FFFFFF;
  margin-top: 10%;
`;

export const uploadContainer = styled.div`
    width: 80%;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 80%;
    align-items: center;
`

export const TitleBox = styled.div`
    width: 80%;
    height: 30%;
`

export const mainTitle = styled.div`
    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 56px;
    color: rgba(20, 36, 59, 0.35);
    margin-top: 5%;
`;

export const inputContainer = styled.div`
    width: 100%;
    margin-top: 8%;
    display: grid;
    grid-template-columns: 510px 510px;
	grid-template-rows: 135px 135px 135px 135px;
`

export const inputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const inputTitle = styled.div`
    color: rgba(20, 36, 59, 0.35);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
`

export const inputLine = styled.input`
    width: 67%;
    height: 45px;
    border: none;
    border-bottom: 1px solid rgba(20, 36, 59, 0.35);
    font-family: 'Poppins';
    font-style: normal;
    font-size: 20px;
    line-height: 38px;
    color: rgba(20, 36, 59, 0.5);
    margin-top: 2%;
`

export const radioBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 3%;
`

export const radioCheck = styled.input`
    width: 25px;
    margin-right: 3%;
`
export const radioLabel = styled.label`
    font-family: 'Poppins';
    font-style: normal;
    font-size: 20px;
    line-height: 38px;
    color: rgba(20, 36, 59, 0.5);
    margin-right: 8%;
`

export const uploadBox = styled.div`
    width: 80%;
    height: 80%;
    background: rgba(91, 99, 169, 0.1);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
`

export const fileUploadImg = styled.img`
    width: 220px;
    height: 220px;
    margin-top: 10%;
`

export const uploadCommnet = styled.div`
    white-space: pre-line;
    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: rgba(20, 36, 59, 0.35);
    margin-top: 5%;
`;

export const btnUpload = styled.button`
    width: 240px;
    height: 65px;
    background: #102141;
    border: none;
    border-radius: 25px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 2%;
    cursor: pointer;
    margin-bottom: 4%;
`;

export const inputFile = styled.input`
    width: 277px;
    height: 75px;
    background: #102141;
    border-radius: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 2%;
    cursor: pointer;
    display: none;
`;

export const uploadList = styled.div`
    width: 78%;
    border: 1px solid rgba(20, 36, 59, 0.35);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5%;

    font-family: 'Poppins';
    font-style: normal;
    font-size: 22px;
    line-height: 42px;
    padding-left: 2%;
`
