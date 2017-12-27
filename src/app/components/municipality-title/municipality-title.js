import React from 'react';
import styled from 'styled-components';

const MunicipalityTitlesection = () => (
    <MunicipalityTitle>
        साँफेबगर
        <span>नगरपालिका</span>
    </MunicipalityTitle>
);

export default MunicipalityTitlesection;

const MunicipalityTitle = styled.h1`
    font-size: 100px;
    font-weight: 700;
    line-height: 120px;
    margin: 0 0 26px;
    color: #F0F8FF;   
    margin: 0 auto 24px;
    text-align: center;
    width: 354px; 
    span {
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 12px;
        margin: 0 auto;
        position: relative;
        width: 354px;                    
        &:before, &:after {
            background: rgba(240, 248, 255, 0.5);
            border-radius: 3px;
            content: "";
            height: 6px;
            left: 0;
            position: absolute;
            top: 4px;
            width: 135px;
        }
         &:after {
            left: auto;
            right: 0;
        }
    }  
`;

