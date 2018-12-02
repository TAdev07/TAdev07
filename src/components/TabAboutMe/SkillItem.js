import React from 'react';
import Layout from '../../styles/layout.module.css';
import Panel from '../../styles/panel.module.css';

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
      <div className={Panel.default}>
        <div className={Layout.row}>
          <div className={Layout.sm_4}>
            {/* PANEL HEADING */}
            <div className={Panel.heading}>
              <h4
                className={`${Panel.title} ${
                  showSkillText ? Panel.active : ''
                }`}
              >
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
          <div className={Layout.sm_8}>
            <div className={Panel.progress}>
              <div
                className={Panel.progressBar}
                style={{
                  width: `${progress}`,
                }}
              >
                <span className="sr-only">{progress} Complete</span>
              </div>
            </div>
            {/* Skillls Text */}
            <div
              className={`panel-collapse collapse ${showSkillText ? 'in' : ''}`}
            >
              <div className={Panel.body}>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
