import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import TopHead from './components/TopHead';
import SideBar from './components/SideBar/SideBar';
import TabAboutMe from './components/TabAboutMe/TabAboutMe';
import TabResume from './components/TabResume/TabResume';
import TabPortfolio from './components/TabPortfolio/TabPortfolio';
import TabBlog from './components/TabBlog/TabBlog';
import TabContactMe from './components/TabContactMe/TabContactMe';
import Footer from './components/Footer';

import DataMenu from './dataLocal/DataMenu';
import DataPersonalInfo from './dataLocal/DataPersonalInfo';
import DataServices from './dataLocal/DataServices';
import DataSkills from './dataLocal/DataSkills';
import DataSocials from './dataLocal/DataSocials';
import './App.css';
import Layout from './styles/layout.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: DataPersonalInfo,
      dataServices: DataServices,
      dataSkills: DataSkills,
      dataSocials: DataSocials,
      dataMenu: DataMenu,
    };
  }

  render() {
    const {
      personalInfo,
      dataServices,
      dataSkills,
      dataSocials,
      dataMenu,
    } = this.state;

    return (
      <div className="App">
        <div className="resume">
          <div className={Layout.container}>
            <Menu dataMenu={dataMenu} />
            <TopHead />
            <div className={Layout.row}>
              <div className={Layout.md_4}>
                <SideBar
                  personalInfo={personalInfo}
                  dataSocials={dataSocials}
                />
              </div>
              <div className={Layout.md_8}>
                <div className="tab-content">
                  <TabAboutMe
                    personalInfo={personalInfo}
                    dataServices={dataServices}
                    dataSkills={dataSkills}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
