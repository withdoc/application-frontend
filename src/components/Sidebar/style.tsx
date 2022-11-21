import styled from "styled-components";
import closebutton from "../../imgs/closebutton.png";
import sidebarprofileimg from "../../imgs/sidebarprofileimg.png";

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

export const SidebarModalContainer = styled.div`
    width: 337px;
    height: 911px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    // box-shadow: 3px 3px 5px #00000029;
    border: 0.25px solid #B7B7B7;
    border-radius: 30px;
    opacity: 1;
    // z-index: 999;
    position: fixed;
    right: 66px;

    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
`;

export const CloseButton = styled.img.attrs({
    src: closebutton,
})`
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 280px;
    cursor: pointer;
`;

export const SideBarProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
        font-family: 'Poppins-Bold';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        color: rgba(20, 36, 59, 0.7);
        margin-top: 12px;
    }
`;

export const SideBarProfileImg = styled.img.attrs({
    src: sidebarprofileimg,
})`
    width: 120px;
    height: 120px;
    margin-top: 11px;
`;

export const SideBarPersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 46px;
    margin-left: 22px;

    > span {

        &:nth-child(1){
            font-family: 'Poppins-Bold';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            color: rgba(20, 36, 59, 0.5);
        }

        &:nth-child(2){
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: rgba(20, 36, 59, 0.35);
            margin-top: 11px;
            cursor: pointer;

            &:hover{
                color: rgba(20, 36, 59, 0.65);
                text-decoration: underline;
            }
        }

        &:nth-child(3){
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: rgba(20, 36, 59, 0.35);
            margin-top: 8px;
            cursor: pointer;

            &:hover{
                color: rgba(20, 36, 59, 0.65);
                text-decoration: underline;
            }
        }
    }
`;

export const SideBarHrLine = styled.div`
    width: 294px;
    height: 0;
    border: 0.5px solid rgba(20, 36, 59, 0.3);
    margin-top: 31px;
    margin-left: 22px;
`;

export const SideBarSupport = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 31px;
    margin-left: 22px;

    > span {

        &:nth-child(1){
            font-family: 'Poppins-Bold';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            color: rgba(20, 36, 59, 0.5);
        }

        &:nth-child(2){
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: rgba(20, 36, 59, 0.35);
            margin-top: 11px;
            cursor: pointer;

            &:hover{
                color: rgba(20, 36, 59, 0.65);
                text-decoration: underline;
            }
        }

        &:nth-child(3){
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: rgba(20, 36, 59, 0.35);
            margin-top: 8px;
            cursor: pointer;

            &:hover{
                color: rgba(20, 36, 59, 0.65);
                text-decoration: underline;
            }
        }

        &:nth-child(4){
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: rgba(20, 36, 59, 0.35);
            margin-top: 8px;
            cursor: pointer;

            &:hover{
                color: rgba(20, 36, 59, 0.65);
                text-decoration: underline;
            }
        }
    }
`;

export const Copyright = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #5F6776;
    opacity: 0.66;

    margin-top: 270px;
    margin-left: 45px;
`;

// 회원탈퇴 모달 디자인 --------------------------------------------------
export const WithdrawalModalContainer = styled.div`
    width: 639px;
    height: 395px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    // box-shadow: 3px 3px 5px #00000029;
    border: 0.25px solid #B7B7B7;
    border-radius: 30px;
    opacity: 1;
    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WithdrawalModalCloseBtn = styled.img.attrs({
    src: closebutton,
})`
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 570px;
    cursor: pointer;
`;

export const WithdrawalModalTitle = styled.div`
    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: rgba(20, 36, 59, 0.8);
`;

export const WithdrawalModalText = styled.div`
    font-family: 'Poppins-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: rgba(20, 36, 59, 0.8);
    margin-top: 55px;
`;

export const WithdrawalModalButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`;

export const WithdrawalModalCancel = styled.button`
    width: 212.2px;
    height: 57px;
    background: #C4C8D0;
    border-radius: 20px;

    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: none;
`;

export const WithdrawalModalWithdraw = styled.button`
    width: 212.2px;
    height: 57px;
    background: #102141;
    border-radius: 20px;

    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: none;

    margin-left: 20px;
`;