import styled from "styled-components";
import searchicon from "../../imgs/searchicon.png";
import settingicon from "../../imgs/settingicon.png";
import addbutton from "../../imgs/addbtn.png";
import closebutton from "../../imgs/closebutton.png";
import sidebarprofileimg from "../../imgs/sidebarprofileimg.png";


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
    height: 911px;
    left: 65px;
    right: 65px;
    top: 88px;

    background: #FFFFFF;
    box-shadow: 0px 4px 40px #8CA4D8;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
`;

export const Header = styled.div`
    // width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 61px;
`;

export const SearchIcon = styled.img.attrs({
    src: searchicon,
})`
    width: 30px;
    height: 30px;
`;

export const SearchInputBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;

    > span {
        font-family: "Poppins-Regular";
        font-size: 24px;
        color: #14243B59
    }
`;

export const SettingIcon = styled.img.attrs({
    src: settingicon,
})`
    width: 30px;
    height: 30px;
    margin-left: 1187px;
    cursor: pointer;
`;

export const DocumentListTitle = styled.div`
    font-family: 'Poppins-Black';
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    color: #14243B;
    margin-left: 86px;
    margin-top: 40px;
`;
 
export const DocumentMonth = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: rgba(20, 36, 59, 0.35);
    margin-top: 50px;
    margin-left: 93px;
    margin-bottom: 6px;
`;

export const DocumentBox = styled.div`
    width: 1641px;
    height: 82px;

    border: 1px solid #D8D8D8;
    border-radius: 20px;
    margin-left: 81px;

    display: flex;
    justify-content: center;
    align-items: center;


    > div{
        width: 25px;
        height: 24px;
        border: 1px solid #D8D8D8;
        margin-right: 25px;
    }

    > span:nth-child(2){
        font-family: 'Poppins-Bold';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        color: #14243B;
        margin-right: 1093px;
    }

    > span:nth-child(3){
        font-family: 'Poppins-medium';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #14243B;
        margin-right: 85px;
    }

    > span:nth-child(4){
        font-family: 'Poppins-medium';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #14243B;
    }
`;




// 모달창 구현 -------------------------------------

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