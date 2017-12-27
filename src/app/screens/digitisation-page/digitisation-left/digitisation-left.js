import React from 'react';
import styled from 'styled-components';
import Header from '../../../../app/components/header/header';
import MunicipalityTitle from '../../../../app/components/municipality-title/municipality-title';
import Download from '../../../../app/components/ui/download/download';

const DigitisationLeft = () => (
    <Digitisationleftsection>
        <Header/>
        <div className="digitisation__content--inner">
            <div className="digitisation__header">
                <span>सम्बन्धित जानकारीहरु</span>
                <MunicipalityTitle/>
            </div>
            <Download/>
        </div>
    </Digitisationleftsection>
);

export default DigitisationLeft;

const Digitisationleftsection = styled.div`
    height: 100vh;
    position: relative;
    .digitisation__content--inner {
        .download {
            bottom: 44px;
            left: 100px;
            position: absolute;
        }
    }
    .digitisation__header {
        margin: 40vh 80px 0;
        position: relative;
        width: 354px;
        > span {
            color: #F0F8FF;
            position: absolute;
            right: 8px;
            top: 2px;
        }
    }
`;