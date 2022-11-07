import styled from "styled-components";
import addbutton from "../../imgs/addbtn.png";
import valid from "../../imgs/valid.png";


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Document = styled.div`
    height: 276px;
    width: 489px;
    border-radius: 20px;
    border: 1px solid #D8D8D8
    // position: relative;
`;

export const AddButton = styled.img.attrs({
    src: addbutton,
})`
    width: 64px;
    height: 64px;
`;

export const ValidIcon = styled.img.attrs({
    src: valid,
})`
    width: 40px;
    height: 40px;
    // position: absolute;
    top: 22px;
`;

export const nameBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    margin-left: 66px;
    margin-bottom: 20px;

    > span:nth-child(1) {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #41477AB2;
        opacity: 70%;
        margin-bottom: 8px;
    }

    > span:nth-child(2) {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: #41477A;
    }
`;

export const numberBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 21px;
    margin-left: 66px;

    > span:nth-child(1) {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #41477AB2;
        opacity: 70%;
        margin-bottom:8px;
    }

    > span:nth-child(2) {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: #41477A;
    }
`;

export const HrLine = styled.div`
    width: 489px;
    height: 0px;
    border: 0.25px solid #D8D8D8;
    margin-top: 45.1px;
`;

export const Organization = styled.div`
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #41477A;
    margin-top: 15px;
`;

export const PublishedDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
    margin-left: 143px;

    > span:nth-child(1) {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        text-transform: uppercase;

        color: rgba(151, 151, 151, 0.7);
    }

    > span:nth-child(2) {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;

        color: #979797;
    }
`;