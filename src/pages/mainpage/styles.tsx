import styled from "styled-components";
import searchicon from "../../imgs/searchicon.png";
import settingicon from "../../imgs/settingicon.png";

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
    align-items: center;
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
`;

export const PageTitle = styled.div`
    font-family: Poppins;
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: 0px;
    text-align: left;

`;