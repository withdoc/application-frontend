import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Document, Page } from 'react-pdf';
import axios from 'axios';
import * as S from "./style"
import example from "../../imgs/documentExample.png";
import plus from "../../imgs/plus.svg";
import minus from "../../imgs/minus.svg";


function ViewDocumentPage() {
    const [documentTitle, setDocumentTitle] = useState<string>("휴학증명서.pdf");
    const [numPages, setNumPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

    const [data, setData] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    console.log(id)

    // useEffect(() => {
    //     const id = params.docKey;
    //     axios
    //         .get(`http://localhost:3000/viewdocumentpage?${id}`)
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    //         .catch((error) => console.log('Network Error : ', error));
    // });

    function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        let token = localStorage.getItem('login-token');
        const response = axios.get(`http://15.164.231.10:9000/pdf/${id}.pdf`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                function ListItem(props: any) {
                    const value = props.value;
                    return (
                        <li key={value.toString()}>
                            {value}
                        </li>
                    );
                }
                setData(response.data)
            })


            .catch(function (error) {
                console.log(error);
            });
    }, [])

    // const GetPdf: React.FC<{ docKey: string }> = ({docKey}) => {
    //     const [numPages, setNumPages] = useState(null);

    //     const pdfresponse = axios.get(`http://15.164.231.10:9000/pdf/${docKey}.pdf`, {

    //     })
    //         .then(function (pdfresponse) {
    //             console.log(JSON.stringify(pdfresponse.data));
    //             function ListItem(props: any) {
    //                 const value = props.value;
    //                 return (
    //                     <li key={value.toString()}>
    //                         {value}
    //                     </li>
    //                 );
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    return (
        <S.mainContainer>
            <S.header>
                <S.btnBack onClick={() => navigate(-1)}></S.btnBack>
                <S.documentTitle>{documentTitle}</S.documentTitle>
                <S.btnBox>
                    <S.btnPrint>프린트</S.btnPrint>
                    <S.btnDownload>다운로드</S.btnDownload>
                </S.btnBox>
            </S.header>
            <S.viewContainer>
                <Document
                    file={`http://15.164.231.10:9000/pdf/${id}.pdf`}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={1} renderTextLayer={false} />
                </Document>
                <S.viewBtnBox>
                    <S.btnMinus src={minus} onClick={() => pageNumber > 1 ? setPageNumber(pageNumber - 1) : null} />
                    <S.btnPlus src={plus} onClick={() => pageNumber < numPages ? setPageNumber(pageNumber + 1) : null} />
                </S.viewBtnBox>
            </S.viewContainer>
        </S.mainContainer>
    )
}

export default ViewDocumentPage;