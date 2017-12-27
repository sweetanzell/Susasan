import React, {Component} from 'react';
import Header from '../../../app/components/header/header';
import Banner from './banner/banner';
import Eprofile from './eprofile/eprofile';
import Digitisation from './digitisation/digisation';
import { Flex, Box } from 'grid-styled';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                    <Header/>
                    <Banner/>
                <Flex>
                    <Box width={1/2}>
                        <Eprofile/>
                    </Box>
                    <Box width={1/2}>
                        <Digitisation/>
                    </Box>
                </Flex>
            </div>
        )
    }
}

export default Home;
