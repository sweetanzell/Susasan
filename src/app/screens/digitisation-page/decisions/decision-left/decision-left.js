import React, {Component} from 'react';
import Header from '../../../../../app/components/header/header';
import styled from 'styled-components';
import {csv} from 'd3-request';
import DecisionFile from '../../../../../assets/Decisions.csv';

// const DecisionLeft = () => (
//     <div>
//         <Header/>
//         <Decisionleftcontent>
//             <h2>नगरपरिषद्का निर्णयहरु</h2>
//             <div className="decision__content--left">
//                 <ul>
//                     <li>
//                         <h3>निर्णय नं. १</h3>
//                         <p>वडा नागरीक मञ्च, वडा भेला, एकीकृत योजना तर्जुमा समिति हुँदै सहभागीतामूलक रुपमा आएका योजना तथा
//                             कार्यक्रमलाई प्राथमिकता दिई विभिन्न सामाजिक भौतिक पूर्वाधार, प्रवद्र्धनात्मक, तथा महिला
//                             लक्षित, बालबालिका लक्षित र अन्य लक्षित अन्तर्गतका आयोजना तथा कार्यक्रमहरु तालिका नं क्रमशः
//                             छनौट गर्ने निर्णय गरीयो ।</p>
//                     </li>
//                     <li>
//                         <h3>निर्णय नं. २</h3>
//                         <p>आयोजना व्यवस्थापन खर्च कन्टेन्जेन्सी रकमबाट प्रस्तुत तालिका बमोजिमका कार्यक्रमहरु संचालन
//                             गर्ने निर्णय गरियाे । </p>
//                     </li>
//                     <li>
//                         <h3>निर्णय नं. ३</h3>
//                         <p>फोहरमैला व्यवस्थापनका लागि वातावरणीय दृष्टिले उपयुक्त देखिएको जग्गा खरिदकाले लागि प्रक्रिया
//                             अगाडी बढाई ल्याण्ड फिल साईट निर्माणका लागि आवश्यक आर्थिक साधन स्रोतका लागि नेपाल सरकार समक्ष
//                             अनुरोध गर्ने निर्णय गरीयो ।</p>
//                     </li>
//                 </ul>
//             </div>
//         </Decisionleftcontent>
//         <PoliciesLeft>
//             <h2>नीतिहरु</h2>
//             <div className="policies__content--left list__wrap">
//                 <h3>सामाजिक विकास नीति सामाजिक विकास नीति</h3>
//                 <ul>
//                     <li>नगरपालिकामा रहेका लक्षित वर्ग, क्षेत्र तथा समूहको आर्थिक, सामाजिक सशक्तिकरणमा जोड दिइनेछ ।</li>
//                     <li>अति विपन्न महिला, आदिवासी, दलित, मुस्लिम, अपांगलगायतलाई विकासका हरेक क्रियाकलापमा सक्रिय
//                         सहभागिताको लागी वातावरण निर्माण गरिनेछ । साथै विकासको प्रतिफलमा उनीहरुलाई समान सहभागी
//                         गराइनेछ ।
//                     </li>
//                     <li>यस नगरपालिकाले विभिन्न संघसंस्था, निकायहरुको सहयोगमा बालमैत्री स्थानीय शासन लागु गर्न
//                         कदम
//                         चालिनेछ ।
//                     </li>
//                     <li>नगरक्षेत्र भित्र जेष्ठ नागरिक हेरचाह केन्द्र, प्रतिक्षालय निर्माण गरिनेछ, बाल अनाथलय
//                         साथै
//                         सुरक्षित महिला आवास गृह निर्माणको लागी संभाव्यता अध्ययन गरिने छ ।
//                     </li>
//                     <li>बाल तथा मातृ शिशु स्वास्थ्य तथा पोषण सम्बन्धी कार्यक्रम संचालन गर्ने नीति लिइनेछ ।</li>
//                     <li>पहिलोपटक बैँकबाट सामाजिक सुरक्षा भत वितरण गर्दा देखापरेका सम्पूर्ण समस्याहरुलाई
//                         समाधान गर्न
//                         आवस्यक सबै कदम चालिनेछ ।
//                     </li>
//                     <li>बालबालिकाको क्षमता विकास, वाककलाको विकासको लागि अन्तरविद्यालय स्तरीय विभिन्न
//                         प्रतियोगिताहरु
//                         संचालन गरिनेछ ।
//                     </li>
//                     <li>लैँगिक हिंसा, जातिय भेदभाव, बालविवाह, छाउपडी जस्ता कुप्रथाहरुको न्युनिकरण गर्न विशेष
//                         कार्यक्रम
//                         संचालन गरिने छ ।
//                     </li>
//                 </ul>
//             </div>
//         </PoliciesLeft>
//         <InformationLeft>
//             <h2>उपयोगी जानकारीहरु</h2>
//             <div className="information__content--left">
//                 <table>
//                     <thead>
//                     <tr>
//                         <th>संकेत</th>
//                         <th>विवरण</th>
//                         <th colspan="3">
//                             <table>
//                                 <tr>
//                                     <th width="50%"></th>
//                                     <th width="25%">आव २०७३।७४</th>
//                                     <th width="25%">आव २०७४।७५</th>
//                                 </tr>
//                             </table>
//                         </th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>घरजग्गा कर मुल्यांकनकाे अाधारमा</td>
//                         <td colspan="3">
//                             <table>
//                                 <tr>
//                                     <td width="50%">पहिलो रु १० लाख सम्मको जग्गाको मुल्यमा</td>
//                                     <td width="25%">आव २०७३।७४</td>
//                                     <td width="25%">आव २०७४।७५</td>
//                                 </tr>
//                                 <tr>
//                                     <td width="50%">त्यस पछिको रु १० लाख सम्ममा</td>
//                                     <td width="25%">आव २०७३।७४</td>
//                                     <td width="25%">आव २०७४।७५</td>
//                                 </tr>
//                                 <tr>
//                                     <td width="50%">त्यस पछिको रु ३० लाख सम्ममा</td>
//                                     <td width="25%">आव २०७३।७४</td>
//                                     <td width="25%">आव २०७४।७५</td>
//                                 </tr>
//                                 <tr>
//                                     <td width="50%">त्यस पछिको रु ५० लाख सम्ममा</td>
//                                     <td width="25%">आव २०७३।७४</td>
//                                     <td width="25%">आव २०७४।७५</td>
//                                 </tr>
//                             </table>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>२</td>
//                         <td>घरकाे बनाेट र वर्गीकरण</td>
//                         <td colspan="4">
//                             <table>
//                                 <tr>
//                                     <td width="25%%"><strong>घर बनोटकोे वर्गीकरण</strong></td>
//                                     <td width="25%"><strong>औषत लागत दर रु</strong></td>
//                                     <td width="25%"><strong>कट्टी गर्ने जम्मा वर्ष</strong></td>
//                                     <td width="25%"></td>
//                                 </tr>
//                                 <tr>
//                                     <td width="25%">ईट्टा वा ढुंगा माटोको जोडाई भएका सबै किसिमका घर</td>
//                                     <td width="25%">४५०</td>
//                                     <td width="25%">२५</td>
//                                     <td width="25%"></td>
//                                 </tr>
//                                 <tr>
//                                     <td width="25%">ईट्टा वा ढुंगा माटोको जोडाईमा प्लाष्टर सहित लिन्टल भएका सबै किसिमका
//                                         घर
//                                     </td>
//                                     <td width="25%">५२५</td>
//                                     <td width="25%">३०</td>
//                                     <td width="25%"></td>
//                                 </tr>
//                                 <tr>
//                                     <td width="25%">ईट्टा वा ढुंगा सिमेन्टको जोडाई भएका सबै किसिमका घर</td>
//                                     <td width="25%">५७५</td>
//                                     <td width="25%">७०</td>
//                                     <td width="25%"></td>
//                                 </tr>
//                                 <tr>
//                                     <td width="25%">आरसिसि फ्रेम स्ट्रचर बाट बनेका सबैकिसिमका घर</td>
//                                     <td width="25%">६३५</td>
//                                     <td width="25%">१००</td>
//                                     <td width="25%"></td>
//                                 </tr>
//                             </table>
//                         </td>
//                     </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </InformationLeft>
//     </div>
// );

class DecisionLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            decisionData: []
        }

        this._renderDecisionLeft = this._renderDecisionLeft.bind(this);
        this._renderPoliciesLeft = this._renderPoliciesLeft.bind(this);
        this._renderInformationLeft = this._renderInformationLeft.bind(this);
    }


    componentWillMount() {
        let self = this;
        csv(DecisionFile, function (err, data) {
            self.setState({decisionData: data});
        })
    }

    _renderDecisionLeft() {

        let decisionData = this.state.decisionData;

        return (
            <Decisionleftcontent>
                <h2>नगरपरिषद्का निर्णयहरु</h2>
                <div className="decision__content--left">
                    <ul>
                        {decisionData.map((data,i) => {
                            // console.log(data);

                            return (
                                (data['description'] !== '')?(
                                <li key={i}>
                                    <h3>{data['साफेँबगर नगरपालिकाकाे चाैथाे नगरपरिषद्का निर्णयहरु']}</h3>
                                    <p>{data['description']}</p>
                                </li>):('')
                            );
                        })}

                    </ul>
                </div>
            </Decisionleftcontent>
        );
    }

    _renderPoliciesLeft() {
        return (
            <PoliciesLeft>
                <h2>नीतिहरु</h2>
                <div className="policies__content--left list__wrap">
                    <h3>सामाजिक विकास नीति सामाजिक विकास नीति</h3>
                    <ul>
                        <li>नगरपालिकामा रहेका लक्षित वर्ग, क्षेत्र तथा समूहको आर्थिक, सामाजिक सशक्तिकरणमा जोड दिइनेछ ।
                        </li>
                        <li>अति विपन्न महिला, आदिवासी, दलित, मुस्लिम, अपांगलगायतलाई विकासका हरेक क्रियाकलापमा सक्रिय
                            सहभागिताको लागी वातावरण निर्माण गरिनेछ । साथै विकासको प्रतिफलमा उनीहरुलाई समान सहभागी
                            गराइनेछ ।
                        </li>
                        <li>यस नगरपालिकाले विभिन्न संघसंस्था, निकायहरुको सहयोगमा बालमैत्री स्थानीय शासन लागु गर्न
                            कदम
                            चालिनेछ ।
                        </li>
                        <li>नगरक्षेत्र भित्र जेष्ठ नागरिक हेरचाह केन्द्र, प्रतिक्षालय निर्माण गरिनेछ, बाल अनाथलय
                            साथै
                            सुरक्षित महिला आवास गृह निर्माणको लागी संभाव्यता अध्ययन गरिने छ ।
                        </li>
                        <li>बाल तथा मातृ शिशु स्वास्थ्य तथा पोषण सम्बन्धी कार्यक्रम संचालन गर्ने नीति लिइनेछ ।</li>
                        <li>पहिलोपटक बैँकबाट सामाजिक सुरक्षा भत वितरण गर्दा देखापरेका सम्पूर्ण समस्याहरुलाई
                            समाधान गर्न
                            आवस्यक सबै कदम चालिनेछ ।
                        </li>
                        <li>बालबालिकाको क्षमता विकास, वाककलाको विकासको लागि अन्तरविद्यालय स्तरीय विभिन्न
                            प्रतियोगिताहरु
                            संचालन गरिनेछ ।
                        </li>
                        <li>लैँगिक हिंसा, जातिय भेदभाव, बालविवाह, छाउपडी जस्ता कुप्रथाहरुको न्युनिकरण गर्न विशेष
                            कार्यक्रम
                            संचालन गरिने छ ।
                        </li>
                    </ul>
                </div>
            </PoliciesLeft>
        );
    }

    _renderInformationLeft() {
        return (
            <InformationLeft>
                <h2>उपयोगी जानकारीहरु</h2>
                <div className="information__content--left">
                    <table>
                        <thead>
                        <tr>
                            <th>संकेत</th>
                            <th>विवरण</th>
                            <th colspan="3">
                                <table>
                                    <tr>
                                        <th width="50%"></th>
                                        <th width="25%">आव २०७३।७४</th>
                                        <th width="25%">आव २०७४।७५</th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>घरजग्गा कर मुल्यांकनकाे अाधारमा</td>
                            <td colspan="3">
                                <table>
                                    <tr>
                                        <td width="50%">पहिलो रु १० लाख सम्मको जग्गाको मुल्यमा</td>
                                        <td width="25%">आव २०७३।७४</td>
                                        <td width="25%">आव २०७४।७५</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">त्यस पछिको रु १० लाख सम्ममा</td>
                                        <td width="25%">आव २०७३।७४</td>
                                        <td width="25%">आव २०७४।७५</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">त्यस पछिको रु ३० लाख सम्ममा</td>
                                        <td width="25%">आव २०७३।७४</td>
                                        <td width="25%">आव २०७४।७५</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">त्यस पछिको रु ५० लाख सम्ममा</td>
                                        <td width="25%">आव २०७३।७४</td>
                                        <td width="25%">आव २०७४।७५</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>२</td>
                            <td>घरकाे बनाेट र वर्गीकरण</td>
                            <td colspan="4">
                                <table>
                                    <tr>
                                        <td width="25%%"><strong>घर बनोटकोे वर्गीकरण</strong></td>
                                        <td width="25%"><strong>औषत लागत दर रु</strong></td>
                                        <td width="25%"><strong>कट्टी गर्ने जम्मा वर्ष</strong></td>
                                        <td width="25%"></td>
                                    </tr>
                                    <tr>
                                        <td width="25%">ईट्टा वा ढुंगा माटोको जोडाई भएका सबै किसिमका घर</td>
                                        <td width="25%">४५०</td>
                                        <td width="25%">२५</td>
                                        <td width="25%"></td>
                                    </tr>
                                    <tr>
                                        <td width="25%">ईट्टा वा ढुंगा माटोको जोडाईमा प्लाष्टर सहित लिन्टल भएका सबै
                                            किसिमका
                                            घर
                                        </td>
                                        <td width="25%">५२५</td>
                                        <td width="25%">३०</td>
                                        <td width="25%"></td>
                                    </tr>
                                    <tr>
                                        <td width="25%">ईट्टा वा ढुंगा सिमेन्टको जोडाई भएका सबै किसिमका घर</td>
                                        <td width="25%">५७५</td>
                                        <td width="25%">७०</td>
                                        <td width="25%"></td>
                                    </tr>
                                    <tr>
                                        <td width="25%">आरसिसि फ्रेम स्ट्रचर बाट बनेका सबैकिसिमका घर</td>
                                        <td width="25%">६३५</td>
                                        <td width="25%">१००</td>
                                        <td width="25%"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </InformationLeft>
        );
    }

    render() {
        return (
            <div>
                <Header/>
                {this._renderDecisionLeft()}
                {this._renderPoliciesLeft()}
                {this._renderInformationLeft()}
            </div>
        )
    }

}

export default DecisionLeft;

const Decisionleftcontent = styled.div`
    padding: 85px 80px;
    position: relative;
    .decision__content--left {
        box-shadow: 0 2px 40px 0 rgba(1,73,131,0.9);
        background: rgba(240,248,255,0.9);
        border-radius: 8px;
        padding: 42px;
        ul {
            li {
            border-bottom: 1px solid rgba(1,73,131,0.3);
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            padding-bottom: 6px;
            h3 {
                width: 114px;
            }   
            p {
            width: calc(100% - 150px);
            }
        }
    }
}
`;

const PoliciesLeft = styled.div`
    padding: 85px 80px;
    position: relative;
    .policies__content--left {
        box-shadow: 0 2px 40px 0 rgba(1,73,131,0.9);
        background: rgba(240,248,255,0.9);
        border-radius: 8px;
        padding: 42px;
    }
`;

const InformationLeft = styled.div`
    padding: 85px 80px;
    position: relative;
    .information__content--left {
        box-shadow: 0 2px 40px 0 rgba(1,73,131,0.9);
        background: rgba(240,248,255,0.9);
        border-radius: 8px;
        padding: 42px;
    }
`;