import React from 'react';
import styled from 'styled-components';
import ImageEprofile from '../../../../assets/images/img_eprofile.jpg';
import { Link } from 'react-router-dom';

const Eprofile = () => (
    <Eprofilewrap>
        <div className="component__type eprofile__wrap">
            <h2>बस्तुगत विवरण<br/>
                (ई-प्रोफाईल)</h2>
            <p>साफेँबगर नगरपालिकाको बस्तुगत विवरणलाई यसअन्तर्गत समेटिएको छ। यसका साथै नगरपालिकासँग सम्बन्धित विभिन्न जानकारीहरु नक्सामार्फत समेत हेर्न सकिन्छ ।</p>
            <Link to="/eprofile-page" className="view--more">View</Link>
        </div>
    </Eprofilewrap>
);

export default Eprofile;

const Eprofilewrap = styled.div`
    background: url(${ImageEprofile}) no-repeat 0 0/cover;
    height: 80%;
    padding: 74px 0 34px;
    position: relative;
    &:before {
        background: rgba(49,149,231,0.9);
        content: "";
        left: 0;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;
