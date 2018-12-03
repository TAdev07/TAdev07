import React from 'react';
import styles from './Menu.module.css';

export default class MenuItem extends React.Component {
  state = {
    active: false,
  };
  render() {
    const {menuItem} = this.props;
    return (
      <li className={styles.navItem}>
        <a href={menuItem.link}>
          <i className={menuItem.icon} style={{paddingRight: '15px'}} />
          {menuItem.title}
        </a>
      </li>
    );
  }
}
