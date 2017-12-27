import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Social from '../../../../app/components/social/social';
import ImageInfoSprite from '../../../../assets/images/ic_sprite-info.svg';
import {Link} from 'react-router-dom';

const DigitisationRight = () => (
    <Digitisationrightsection>
        <Flex>
            <Box>
                <Link className="box--decision" to="/decisions">नगरपरिषद्का निर्णयहरु</Link>
            </Box>
            <Box>
                <Link className="box--policies" to="/">नितीहरु</Link>
            </Box>
            <Box>
                <Link  className="box--programme" to="/">चालु आर्थिक वर्षका योजना तथा कार्यक्रमहरु</Link>
            </Box>
            <Box>
                <Link  className="box--info" to="/">उपयोगी जानकारिहरु</Link>
            </Box>
        </Flex>
        <Social/>
    </Digitisationrightsection>
);

export default DigitisationRight;

const Digitisationrightsection = styled.div`
    border-left: 1px solid rgba(240,248,255,0.2);
    position: relative;
    height: 100vh;
    > div:first-of-type {
        flex-wrap: wrap;
        > div {
            border-bottom: 1px solid rgba(240,248,255,0.2);
            font-size: 21px;
            height: 264px;
            width: 50%;
            &:nth-child(odd) { 
                border-right: 1px solid rgba(240,248,255,0.2);                    
            }
        }
       }
    [class*="box--"] {
        color: #F0F8FF;
        display: block;
        padding: 164px 20px 48px 48px;!important;
        position: relative;
        text-decoration: none;
        &:before {
            background: url(${ImageInfoSprite}) no-repeat 0 0;
            left: 43px;
            content: "";
            height: 74px;
            position: absolute;
            top: 80px;
            width: 74px;
        }
    }
    .box--policies:before {
        background-position: -94px 0;
    }
    .box--programme:before {
        background-position: 0 -94px;
    }
    .box--info:before {
        background-position: -94px -94px;
    }
    .social-links {
        bottom: 44px;
        margin: 0;
        right: 50px;
        position: absolute;
        > div {
            justify-content: space-between;
            width: 136px;
        }
    }
`;