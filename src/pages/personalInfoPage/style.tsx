import styled from "styled-components";
import profileimg from "../../imgs/profileimg.png";
import closebtn from "../../imgs/closebutton.png";
import { text } from "node:stream/consumers";

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

    > span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 38px;
        color: rgba(20, 36, 59, 0.35);
        margin-top: 15px;
        margin-left: 67px;

        &:hover {
            cursor: pointer;
            text-decoration-line: underline;
            color: rgba(20, 36, 59, 0.5);
        }
    }
`;

export const Nickname = styled.div`
    font-family: 'Poppins-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 52px;
    color: rgba(20, 36, 59, 0.7);
    margin-top: 36px;
    margin-left: 67px;
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
        color: rgba(20, 36, 59, 0.35);

        &:hover {
            cursor: pointer;
            text-decoration-line: underline;
            color: rgba(20, 36, 59, 0.5);
        }
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

        &:hover {
            cursor: pointer;
            text-decoration-line: underline;
            color: rgba(20, 36, 59, 0.5);
        }
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
        color: rgba(20, 36, 59, 0.35);

        &:hover {
            cursor: pointer;
            text-decoration-line: underline;
            color: rgba(20, 36, 59, 0.5);
        }
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
        color: rgba(20, 36, 59, 0.35);

        &:hover {
            cursor: pointer;
            text-decoration-line: underline;
            color: rgba(20, 36, 59, 0.5);
        }
    }
`;





// 모달창 --------------------------
export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);;
`;

export const ModalContainer = styled.div`
    width: 639px;
    height: 453px;
    background: #FFFFFF;
    border: 1px solid #D8D8D8;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    position: relative;
`;

export const CloseButton = styled.img.attrs({
    src: closebtn,
})`
    position: absolute;
    width: 40px;
    height: 40px;
    // margin-top: 24px;
    // margin-left: 555px;
    top: 24px;
    right: 24px;
    cursor: pointer;
`;

export const ChangePasswordText = styled.div`
    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 56px;
    color: rgba(20, 36, 59, 0.8);
    margin-top: 41px;
    margin-bottom: 49px;
`;

export const PasswordInputBox = styled.div`
    width: 493px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    vertical-align: middle;

    > span {
        width: 146px;
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;

        color: #14243B;
    }
`;

export const PasswordInput = styled.input.attrs({
    type: 'password',
})`
    width: 343px;
    border: none;
    outline : none;
    font-size: 17px;
`;

export const ModalHrLine = styled.div`
    width: 493px;
    height: 0px;
    border: 0.5px solid rgba(20, 36, 59, 0.3);
    margin-top: 16px;
    margin-bottom: 16px;
`;

export const ChangeButton = styled.button`
    width: 217px;
    height: 57px;
    background: #102141;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    cursor: pointer;

    border: none;
    outline : none;
    margin-top: 49px;
`;



// 회원 정보 수정 인풋창 css

export const InfoChangeInput = styled.input.attrs({
    type: 'text',
})`
    width: 708px;
    height: 58px;
    border-radius: 15px;
    border: 1px solid rgba(20, 36, 59, 0.3);
    outline : none;
    padding-left: 15px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: rgba(20, 36, 59, 0.35);
`;

export const SaveButton = styled.button`
    width: 96px;
    height: 55px;
    background: #C4C8D0;
    border-radius: 20px;
    border: none;
    outline: none;
    margin-left: 23px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;

    cursor: pointer;
`;