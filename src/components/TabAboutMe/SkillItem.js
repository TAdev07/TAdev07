import React from 'react';

export default class Skills extends React.Component {
    state = {
        showSkillText: false,
    };

    showText = () => {
        this.setState({showSkillText: !this.state.showSkillText});
    };
    render() {
        const {skill, text, progress} = this.props;
        const {showSkillText} = this.state;
        return (
            <div className="panel panel-default">
                <div className="row">
                    <div className="col-sm-4">
                        {/* PANEL HEADING */}
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <span
                                    onClick={this.showText}
                                    className={`${showSkillText ? 'in' : ''}`}
                                >
                                    {skill}
                                </span>
                            </h4>
                        </div>
                    </div>
                    {/* Skillls Bars */}
                    <div className="col-sm-8">
                        <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                    width: `${progress}`,
                                }}
                            >
                                <span className="sr-only">
                                    {progress} Complete
                                </span>
                            </div>
                        </div>
                        {/* Skillls Text */}
                        <div
                            id="collapsetwo"
                            className={`panel-collapse collapse ${
                                showSkillText ? 'in' : ''
                            }`}
                        >
                            <div className="panel-body">
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
