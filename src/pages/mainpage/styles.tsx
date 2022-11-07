import styled from "styled-components";
import searchicon from "../../imgs/searchicon.png";
import settingicon from "../../imgs/settingicon.png";
import addbutton from "../../imgs/addbtn.png";
import closebutton from "../../imgs/closebutton.png";

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

export const PageTitle = styled.div`
    font-family: Poppins;
    font-size: 48px;
    font-weight: 400;
    text-align: left;
    color: #14243B;
    margin-top: 40px;
    margin-left: 81px;
`;


export const DocumentList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 80px;
    padding: 0 74px 0 74px;
    justify-content: space-around;
    margin-top: 60px;
    row-gap: 36px;
`;

export const AddDocument = styled.div`
    height: 276px;
    width: 489px;
    border-radius: 20px;
    border: 1px solid #D8D8D8
    // display: flex;
    // justify-content: center;
    // align-items: center;
`;

export const AddButton = styled.img.attrs({
    src: addbutton,
})`
    width: 64px;
    height: 64px;
    margin-top: 103px;
    margin-left: 212.6px;
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
    background: rgba(112, 112, 112, 0.5);
`;

export const ModalContainer = styled.div`
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
    align-items: center;
    // justify-content: center;
`;

export const CloseButton = styled.img.attrs({
    src: closebutton,
})`
    width; 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 260px;
    cursor: pointer;
`;