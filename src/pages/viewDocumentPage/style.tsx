import styled from "styled-components";
import back from "../../imgs/backbtn.svg";

export const mainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
`;

export const header = styled.div`
    width: 100%;
    height: 11%;
    //position: fixed;
    background: #FFFFFF;
    display: flex;
    align-items: center;
`;

export const documentTitle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 40px;
    color: #000000;
    margin-left: 2%;
`;

export const btnBack = styled.img.attrs({src: back})`
    width: 35px;
    height: 35px;
    margin-left: 3%;
    cursor: pointer;
`

export const btnBox = styled.div`
    width: 80%;
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const btnPrint = styled.button`
    width: 200px;
    height: 70px;
    background: #C4C8D0;
    border-radius: 30px;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    text-align: center;

    color: #FFFFFF;
    cursor: pointer;

    margin-right: 3%;
`

export const btnDownload = styled.button`
    width: 200px;
    height: 70px;
    background: #102141;;
    border-radius: 30px;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    text-align: center;

    color: #FFFFFF;
    cursor: pointer;
`

export const viewContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color:  #EFEFF6;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const documentBox = styled.img`
    width: fit-content;
    height: fit-content;
`
export const viewBtnBox = styled.div`
    width: 40%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    position: absolute;
    justify-content: flex-end;
`

export const btnMinus = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 1%;
    cursor: pointer;
`

export const btnPlus = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
`