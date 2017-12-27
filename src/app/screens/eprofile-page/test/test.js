import React, {Component} from 'react';

class TestComponent extends Component {

    render() {

        const {team, decisions} = this.props;


        let teamName;

        if(team[0]){
            teamName = team[0].Name;
        }



        return (
                <div className="test-list-section">
                    <h2 className="title">{teamName}</h2>
                    {
                        team.map((value, index) =>
                            <div key={index} className="test-card">
                               {/*<h2 className="title">{value.Name}</h2>*/}
                                <span className="category">{value.Responsibilities}</span>
                            </div>
                        )
                    }
                </div>
        )
    }

}

TestComponent.defaultProps = {
    team: []
};

export default TestComponent;