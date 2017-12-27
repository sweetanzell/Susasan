import React from 'react';
import styled from 'styled-components';
import Logo from './logo/logo';

const Tagline = () => (
    <Header>
        <Logo/>
    </Header>
);

export default Tagline;

const Header = styled.header`
  overflow: hidden;
  padding: 54px 80px 0;
  position: relative;
  z-index: 1;
`;





