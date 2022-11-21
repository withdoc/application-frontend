import styled from "styled-components";
import profileimg from "../../imgs/profileimg.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    // max-width: 1920px;
    // min-width: 1300px;
    height: 100vh;
    
    background: linear-gradient(0deg, rgba(195, 202, 210, 0.242527), rgba(195, 202, 210, 0.242527)), linear-gradient(141.8deg, #D1D8E4 2.92%, #ACB7CD 111.13%);
`;

export const MainBox = styled.div`
    width: 1790px;
    height: fit-content;
    min-height: 911px;
    left: 65px;
    right: 65px;
    top: 88px;
    margin-top: 5%;
    margin-bottom: 5%;

    background: #FFFFFF;
    box-shadow: 0px 4px 40px #8CA4D8;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProfileImg = styled.img.attrs({
    src: profileimg,
})`
    width: 120px;
    height: 120px;
`;

export const ImgUploadBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 169px;
    height: 41px;
    background: #102141;
    border-radius: 20px;

    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;

    margin-top: 25px;
`;

export const ImgRemoveBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 169px;
    height: 41px;
    background: #C4C8D0;
    border-radius: 20px;

    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;

    margin-top: 10px;
`;

export const NicknameBox = styled.div`
    width: 872px;
    height: 242px;
    border-radius: 15px;
    border: 1px solid rgba(20, 36, 59, 0.3);
    margin-left: 33px;
`;

export const EmailBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 65px;
    margin-bottom: 22px;

    > span:nth-child(1) {
        width: 216px;
        font-family: 'Poppins-Bold';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #14243B;
    }

    > span:nth-child(2){
        width: 803px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        color: rgba(20, 36, 59, 0.35);
    }

    > span:nth-child(3){
        font-family: 'Poppins-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
        text-decoration-line: underline;
        color: rgba(20, 36, 59, 0.35);
    }
`;

export const HrLine = styled.div`
    width: 1107px;
    height: 0px;

    border: 0.5px solid rgba(20, 36, 59, 0.3);
`;

export const PasswordBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 22px;

    > span:nth-child(1) {
        width: 216px;
        font-family: 'Poppins-Bold';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #14243B;
    }

    > span:nth-child(2){
        width: 40px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        color: rgba(20, 36, 59, 0.35);
        margin-right: 802px;
        text-decoration-line: underline;
    }
`;

export const PhoneNumberBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 22px;

    > span:nth-child(1) {
        width: 216px;
        font-family: 'Poppins-Bold';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #14243B;
    }

    > span:nth-child(2){
        width: 803px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        color: rgba(20, 36, 59, 0.35);
    }

    > span:nth-child(3){
        font-family: 'Poppins-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
        text-decoration-line: underline;
        color: rgba(20, 36, 59, 0.35);
    }
`;

export const BirthBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 22px;

    > span:nth-child(1) {
        width: 216px;
        font-family: 'Poppins-Bold';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #14243B;
    }

    > span:nth-child(2){
        width: 803px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        color: rgba(20, 36, 59, 0.35);
    }

    > span:nth-child(3){
        font-family: 'Poppins-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
        text-decoration-line: underline;
        color: rgba(20, 36, 59, 0.35);
    }
`;