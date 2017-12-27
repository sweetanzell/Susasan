import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Social from '../../../../../app/components/social/social';
import ImageInfoSprite from '../../../../../assets/images/ic_sprite-info.svg';
import {Link} from 'react-router-dom';

const DecisionRight = () => (
    <Decisionrightsection>
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
    </Decisionrightsection>
);

export default DecisionRight;

const Decisionrightsection = styled.div`
    border-left: 1px solid rgba(240,248,255,0.2);
    position: relative;
    height: 100vh;
    width: 256px;
    > div:first-of-type {
        flex-wrap: wrap;
        > div {
            border-bottom: 1px solid rgba(240,248,255,0.2);
            font-size: 16px;
            height: 114px;
            width: 100%;
        }
       }
    [class*="box--"] {
        box-sizing: border-box;
        color: #F0F8FF;
        display: block;
        height: 114px;
        line-height: 21px;
        padding: 36px 124px 10px 24px;!important;
        position: relative;
        text-decoration: none;
        &:before {
            background: url(${ImageInfoSprite}) no-repeat 0 0;
            content: "";
            height: 74px;
            position: absolute;
            right: 24px;
            top: 20px;
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