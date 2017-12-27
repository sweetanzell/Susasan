import React from 'react';
import styled from 'styled-components';
import Header from '../../../../app/components/header/header';
import MunicipalityTitle from '../../../../app/components/municipality-title/municipality-title';
import Stats from '../stats/stats';
import Social from '../../../../app/components/social/social';
import Download from '../../../../app/components/ui/download/download';

const Eprofiletopsection = () => (
    <Eprofiletopwrap>
        <Header/>
        <Actionwrap>
            <Download/>
            <a href="" className="print">Print</a>
        </Actionwrap>
        <div className="eprofile-wrap">
            <a href="" className="external-link">external link</a>
            <MunicipalityTitle/>
            <span className="district">अछाम, प्रदेश नं ७</span>
        </div>
        <Stats/>
        <Social/>
    </Eprofiletopwrap>
);

export default Eprofiletopsection;

const Eprofiletopwrap = styled.div`
    background: #014983;
    height: 700px;
    position: relative;
    &:before {
        background: #2C2D2D;
        content: "";
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        width: 50%;
    }
    .eprofile-wrap {
        border: 1px solid rgba(240,248,255,0.1);
        border-radius: 50%;  
        display: flex;                  
        flex-direction: column;
        justify-content: center;
        height: 413px;
        left: 50%;
        position: absolute;
        text-align: center;
        transform: translateX(-50%);
        top: 131px;
        width: 413px;
        z-index: 1;
        .district {
            background: rgba(240,248,255,0.1);
            border-radius: 13px;
            color: #F0F8FF;
            margin: 0 auto;
            padding: 1px 11px;
            width: 122px;
        }
    }
    .social-links {
        margin-top: -200px;
        > div {
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
            height: 136px;
            margin-right: 40px;
        } 
    }
`;

const Actionwrap = styled.div`
    float: right;
    margin-top: -22px;
    padding-right: 50px;
    position: relative;
    z-index: 1;
    > a {
        color: #F0F8FF;
        margin-left: 60px;
        text-decoration: none;
    }
`;