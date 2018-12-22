import React from 'react';
import styles from './TabAmazing.module.css';
import HoverEffects from './HoverEffects/HoverEffects';
import AnimationEffects from './AnimationEffects/AnimationEffects';

class Tabs extends React.Component {
  state = {
    id: 0,
  };

  render() {
    const {children} = this.props;
    const {id} = this.state;
    return (
      <div>
        <ul className={styles.menu}>
          {children.map((item, index) => {
            return (
              <li
                key={index}
                className={`${styles.glowing} ${
                  id === index ? styles.active : ''
                }`}
                onClick={() => {
                  this.setState({id: index});
                }}
              >
                {item.props.title}
              </li>
            );
          })}
        </ul>
        <div className={styles.container}>{children[id].props.children}</div>
      </div>
    );
  }
}

class Tab extends React.Component {
  render() {
    return <div />;
  }
}

export default class TabAmazing extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h5 className={styles.title}>Amazing</h5>
        <div className="padding-20">
          <Tabs>
            <Tab title="hover effect">
              <HoverEffects />
            </Tab>
            <Tab title="animation effects">
              <AnimationEffects />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
