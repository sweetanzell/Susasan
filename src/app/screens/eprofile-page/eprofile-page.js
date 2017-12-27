import React, {Component} from 'react';
import styled from 'styled-components';
import Imagemap from '../../../assets/images/img_map.jpg';
import Eprofiletopsection from './eprofile-top/eprofile-top';
import { Link } from 'react-router-dom';
import TestComponent from "./test/test";
import Tabsection from "./tabs/tabs";
import {DataService} from '../../../app/services/spreadsheet-data';

const _dataService = new DataService();

class Eprofilepage extends Component {


    constructor(props) {

        super(props);

        this.state = {
            team: {
                elements: []
            },
            decisions: {
                elements: []
            }
        };


    }

    componentWillMount() {

        let self = this;
        _dataService.getTests(function (err, data) {

            console.log(data);


            self.setState({
                team: data.team,
                decisions: data.decisions
            });


        });

    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <Eprofilewrap className="eprofile__wrapper">
                <Eprofiletopsection />
                <Mapwrap>
                    <img src={Imagemap} alt="Map"/>
                    <button className="view-map">पुरा नक्शा हेर्नुहोस्</button>
                </Mapwrap>
                <Description>
                    <p>
                        साँफेबगर नगरपालिका अछाम जिल्लामा पर्छ। यो नगरपालिका २०६८ साउन १ देखि लागू हुने गरी बनाइएको हो।
                        यसलाई नगरपालिका घोषणा गर्दा रिडिकोट, मष्टामाण्डु, शिद्धेश्वर,...
                    </p>
                    <Link to="/" className="view--more--info">थप जानकारी</Link>
                </Description>
                {/*<TestComponent team={this.state.team.elements} decisions={this.state.decisions.elements}/>*/}
                <Tabsection/>
            </Eprofilewrap>
        )
    }
}

Eprofilepage.defaultProps = {
    team: {
        elements: [],
        name: ""
    }
}

export default Eprofilepage;

const Eprofilewrap = styled.div`
    background: #F0F8FF;
    overflow: hidden;
`;

const Mapwrap = styled.div`
    margin: -120px auto 112px;
    position: relative;
    width: 796px;
    &:after {    
        box-shadow: 0 2px 60px 0 #014983;
        bottom: 0;
        content: "";
        height: 375px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 702px;
        z-index: -1;
    }
    img {
        border-radius: 8px;
        vertical-align: middle;
    }
    .view-map {
        background: #014983;
        border-radius: 30px;
        bottom: 55px;
        color: #F0F8FF;
        font-size: 16px;
        font-weight: 700;
        left: 50%;
        line-height: 48px;
        position: absolute;
        transform: translateX(-50%);
        width: 265px;
    }
`;

const Description = styled.div`
    margin: 0 auto 78px;
    text-align: center;
    width: 478px;
    p {
        font-size: 21px;
    }
`;

