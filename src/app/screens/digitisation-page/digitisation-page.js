import React, {Component} from 'react';
import ImageDigitisationbg from '../../../assets/images/img_digitisation-bg.jpg';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import DigitisationLeft from './digitisation-left/digitisation-left';
import DigitisationRight from './digitisation-right/digitisation-right';


class Digitisationpage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Digitisationwrap>
                <div className="digitisation__content">
                    <Flex>
                        <Box width={1/2} className="digitisation__content__left">
                            <DigitisationLeft/>
                        </Box>
                        <Box width={1/2} className="digitisation__content__right">
                            <DigitisationRight/>
                        </Box>
                    </Flex>
                </div>
            </Digitisationwrap>
        )
    }

}

export default Digitisationpage;


const Digitisationwrap = styled.div`
    background: url(${ImageDigitisationbg}) no-repeat 0 0/cover;
    height: 100vh;
    overflow: hidden;
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
`;