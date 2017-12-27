import React, {Component} from 'react';
import ImageDigitisationbg from '../../../../assets/images/img_digitisation-bg.jpg';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import DecisionLeft from './decision-left/decision-left';
import DecisionRight from './decision-right/decision-right';


class Decisions extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Digitisationwrap>
                <div className="digitisation__content">
                    <Flex>
                        <Box width={0.75} className="digitisation__content__left">
                            <DecisionLeft/>
                        </Box>
                        <Box className="digitisation__content__right">
                            <DecisionRight/>
                        </Box>
                    </Flex>
                </div>
            </Digitisationwrap>
        )
    }

}

export default Decisions;


const Digitisationwrap = styled.div`
    background: url(${ImageDigitisationbg}) no-repeat 0 0/cover;
    position: relative;
    &:before {
        background: rgba(1,73,131,0.9);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
    > img {
        height: 100%;
        margin-top: -75px;
        object-fit: cover;
        opacity: 0.1;
        width: 100%;
    }
    > div > div {
        justify-content: space-between;
    }
`;