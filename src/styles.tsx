import exp from 'constants';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    min-width: 1300px;
    height: 1080px;
    
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
    justify-content: center;
    align-items: center;
`;

export const MainTitle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 75px;
    line-height: 112px;
    color: rgba(173, 178, 186, 1);
`;

export const SubTitle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: rgba(173, 178, 186, 1);
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 157px;
`;

export const SigninBtn = styled.button`
    width: 252px;
    height: 60px;
    left: 690px;
    top: 688px;

    background: rgba(16, 33, 65, 0.247934);
    backdrop-filter: blur(11.5318px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: 0;
    cursor: pointer;

    > span{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        color: #FFFFFF;
    }
`;

export const SignupBtn = styled.button`
    width: 252px;
    height: 60px;
    left: 977px;
    top: 688px;

    background: rgba(16, 33, 65, 0.65);
    backdrop-filter: blur(11.5318px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 100px;
    margin-left: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: 0;
    cursor: pointer;

    > span{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        color: #FFFFFF;
    }
`;