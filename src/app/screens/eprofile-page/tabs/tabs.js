import React, {Component} from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Accordion, AccordionItem } from 'react-sanfona';


class Tabsection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tabwrap>
                <Tabs>
                    <TabList>
                        <Tab>परिचय</Tab>
                        <Tab>जनसांख्यिकीय</Tab>
                        <Tab>भौगोलिक</Tab>
                        <Tab>कृषि/वन</Tab>
                        <Tab>ऐतिहासिक</Tab>
                        <Tab>प्रशासनिक</Tab>
                        <Tab>सेवा केन्द्र</Tab>
                        <Tab>सांस्कृतिक</Tab>
                        <Tab>सामाजिक</Tab>
                        <Tab>आर्थिक</Tab>
                        <Tab>स्वास्थ्य</Tab>
                        <Tab>शैक्षिक</Tab>
                    </TabList>
                        <TabPanel>
                            <Accordion>
                                <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>उमेर</th>
                                            <th>पुरुष</th>
                                            <th>महिला</th>
                                            <th>अन्य</th>
                                            <th>जम्मा</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </AccordionItem>
                                <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>उमेर</th>
                                            <th>पुरुष</th>
                                            <th>महिला</th>
                                            <th>अन्य</th>
                                            <th>जम्मा</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </AccordionItem>
                                <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>उमेर</th>
                                            <th>पुरुष</th>
                                            <th>महिला</th>
                                            <th>अन्य</th>
                                            <th>जम्मा</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </AccordionItem>
                                <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>उमेर</th>
                                            <th>पुरुष</th>
                                            <th>महिला</th>
                                            <th>अन्य</th>
                                            <th>जम्मा</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        <tr>
                                            <td>५ मुनी</td>
                                            <td>३०</td>
                                            <td>२५</td>
                                            <td>०</td>
                                            <td><strong>५५</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </AccordionItem>
                            </Accordion>
                        </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion>
                            <AccordionItem title="जनसंख्या वितरण उमेर र लिंग द्वारा" expanded={true}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मातृ भाषा द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="धर्म अनुसार जनसंख्या वितरण">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                            <AccordionItem title="जनसंख्या वितरण मामला द्वारा">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>उमेर</th>
                                        <th>पुरुष</th>
                                        <th>महिला</th>
                                        <th>अन्य</th>
                                        <th>जम्मा</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    <tr>
                                        <td>५ मुनी</td>
                                        <td>३०</td>
                                        <td>२५</td>
                                        <td>०</td>
                                        <td><strong>५५</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>

                </Tabs>
            </Tabwrap>
        );
    }

}

export default Tabsection;

const Tabwrap = styled.div`
    margin: 0 auto;
    width: 930px;
    > .react-tabs {
        margin-bottom: 40px;
        padding-bottom: 30px;
        overflow: hidden;
        ul {
            float: left;
            width: 150px;
            li {
                border-bottom: 1px solid #E4EEF6;
                color: #014983;
                font-size: 16px;
                padding: 12px;
            }
        }
        .react-tabs__tab-panel {
            float: right;
            width: calc(100% - 180px);
        }
    }
    .react-sanfona-item {
        border-radius: 8px;        
        font-size: 14px;
        margin-bottom: 20px;
        position: relative;
        h3 {
            background: #F7FBFF;
            border-radius: 8px;
            color: rgba(44,45,45,0.5);
            display: block;
            font-size: 14px;
            font-weight: bold;
            padding: 14px 20px;
            position: relative;
            z-index: 1;
            &.is-open {
                background: #3195E7;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                color: #F0F8FF;
            }
        }
        &:after {
            box-shadow: 0 2px 40px 0 rgba(1,73,131,0.5);
            bottom: 0;
            content: "";
            height: 29px;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            width: 687px;
        }
    }
    .react-sanfona-item-body {
        background: #F7FBFF;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        position: relative;
        z-index: 1;
    }       
    .react-sanfona-item-body-wrapper {
        padding: 16px 45px 26px 57px;
    } 
       
    .react-sanfona-item-expanded {
        h3 {
            background: #3195E7;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            color: #F0F8FF;
        }
    }
`;
