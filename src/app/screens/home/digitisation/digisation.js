import React from 'react';
import styled from 'styled-components';
import Imagedigitisation from '../../../../assets/images/img_digitisation.jpg';
import {Link} from 'react-router-dom';

const Digitisation = () => (
    <Digitisationwrap>
        <div className="component__type digitisation__wrap">
            <h2>नगरपालिकाका जानकारी <br/>तथा दस्तावेजहरु</h2>
            <p>यस खण्डमा तपाईले नगरपालिकासँग सम्बन्धित विभिन्न जानकारीहरु हेर्न सक्नुहुनेछ । मूख्यतः नगरपालिकाका नीति,
                विषयगत एवं वडागत कार्यक्रमहरु, बजेट सम्बन्धी तथ्यांक, निर्णयहरुका साथसाथै अन्य उपयाेगी जानकारीहरु यसअन्तर्गत
                समेटिएका छन् ।</p>
            <Link to="/digitisation-page" className="view--more">View</Link>
        </div>
    </Digitisationwrap>
);

export default Digitisation;

const Digitisationwrap = styled.div`
    background: url(${Imagedigitisation}) no-repeat 0 0/cover;
    height: 80%;
    padding: 74px 0 34px;
    position: relative;
    &:before {
        background: rgba(1,73,131,0.9);
        content: "";
        left: 0;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;
