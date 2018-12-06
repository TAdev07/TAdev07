import React from 'react';

import MenuItem from './MenuItem';
import styles from './Menu.module.css';

export default class NavLink extends React.Component {
  state = {
    showMenu: false,
  };

  onShowMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  };

  onHiddenMenu = () => {
    this.setState({showMenu: false});
  };

  render() {
    const {dataMenu} = this.props;
    return (
      <nav className={styles.wrapper}>
        <div
          className={`${styles.navBar} ${
            this.state.showMenu ? styles.show : ''
          }`}
        >
          <div className={styles.close} onClick={this.onShowMenu} />
          <ul className={styles.nav}>
            {dataMenu.map((item, index) => (
              <MenuItem
                key={index}
                menuItem={item}
                onHiddenMenu={this.onHiddenMenu}
              />
            ))}
          </ul>
        </div>

        <div className={styles.toggle}>
          <span className={styles.title}>MENU</span>
          <span
            className={`fa ${this.state.showMenu ? 'fa-times' : 'fa-navicon'} ${
              styles.button
            }`}
            onClick={this.onShowMenu}
          />
        </div>
      </nav>
    );
  }
}
