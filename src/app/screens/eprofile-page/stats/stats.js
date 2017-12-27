import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Stats = () => (
    <Statsection>
        <Flex>
            <Box width={1/2}>
                <span>जनसंख्या</span>
                <strong>३३,७८८</strong>
            </Box>
            <Box width={1/2}>
                <span>वडाहरु</span>
                <strong>१४</strong>
            </Box>
            <Box width={1/2}>
                <span>परिवारहरु</span>
                <strong>५००</strong>
            </Box>
            <Box width={1/2}>
                <span>क्षेत्रफल (वर्ग किमी)</span>
                <strong>१६६.७१</strong>
            </Box>
        </Flex>
    </Statsection>
);

export default Stats;


const Statsection = styled.div`
    color: #F0F8FF;
    margin: 380px auto 0;
    position: relative;
    text-align: center;
    width: 628px;
    span {
        display: block;
    }
    strong {
        font-size: 37px;
        font-weight: 700;
        line-height: 42px;
    }
`;