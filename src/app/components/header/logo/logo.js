import React from 'react';
import styled from 'styled-components';
import Logoimage from '../../../../assets/images/logo_susasan.svg';
import {Link} from 'react-router-dom';


const Logo = () => (
    <Logowrap>
        <Link to="/">
            <img src={Logoimage} alt="Susasan"/>
        </Link>
    </Logowrap>
);

export default Logo;


const Logowrap = styled.div`
  float: left;
    > a {
        background: url(images/logo_susasan.svg) no-repeat 0 0;
        display: block;
        height: 21px;
        width: 75px;
    }
`;