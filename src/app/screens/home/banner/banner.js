import React from 'react';
import styled from 'styled-components';
import Imagehome from '../../../../assets/images/img_hero.jpg';
import MunicipalityTitle from '../../../../app/components/municipality-title/municipality-title';

const Banner = () => (
    <Herosection>
        <Image src={Imagehome}/>
        <Herocontent>
            <MunicipalityTitle/>
            <p>याे पाेर्टल साफेँबगर नगरपालिकाको आधिकारिक तथ्यांकीय पोर्टल हाे। यसमार्फत साफेँबगर नगरपालिकासँग सम्बन्धित
                विभिन्न तथ्य, तथ्यांक एवं जानकारीहरु लिन सकिन्छ र आवश्यकताअनुसार पुनः प्रयाेग समेत गर्न सकिन्छ।</p>
        </Herocontent>
    </Herosection>
);

export default Banner;

const Herosection = styled.div`
    margin-top: -75px;
    height: 505px;
    overflow: hidden;
    position: relative;
    &:before {
        background: #2C2D2D;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
}
`;

const Image = styled.img`
    height: 100%;
    opacity: 0.2;
    width: 100%;
`;

const Herocontent = styled.div`   
    left: 50%;
    position: absolute;
    top: 164px;
    transform: translateX(-50%);
    p {
        color: #F0F8FF;
        left: 50%;    
        margin: 0 auto;
        // position: absolute;
        text-align: center;
        top: 310px;
        // transform: translateX(-50%);
        width: 494px; 
        font-size: 21px;
        line-height: 28px;
    }
}     
`;