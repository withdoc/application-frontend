import styled from "styled-components";
import back from "../../imgs/backbtn.svg";

export const mainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: #FFFFFF;
`;

export const header = styled.div`
    width: 100%;
    height: 110px;
    position: fixed;
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
    height: 100%;
    background: rgba(91, 99, 169, 0.1);
`;