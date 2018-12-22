import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import TopHead from './components/TopHead';
import SideBar from './components/SideBar/SideBar';
import TabAboutMe from './components/TabAboutMe/TabAboutMe';
import TabResume from './components/TabResume/TabResume';
import TabAmazing from './components/TabAmazing/TabAmazing';
import TabBlog from './components/TabBlog/TabBlog';
import TabContactMe from './components/TabContactMe/TabContactMe';
import Footer from './components/Footer';
import menuData from './localData/menuData';
import personalInfoData from './localData/personalInfoData';
import servicesData from './localData/servicesData';
import skillsData from './localData/skillsData';
import socialsData from './localData/socialsData';
import './App.css';
import Layout from './styles/layout.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: personalInfoData,
      servicesData: servicesData,
      skillsData: skillsData,
      socialsData: socialsData,
      menuData: menuData,
    };
  }

  render() {
    const {
      personalInfo,
      servicesData,
      skillsData,
      socialsData,
      menuData,
    } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="resume">
            <div className={Layout.container}>
              <Menu menuData={menuData} />
              <TopHead />
              <div className={Layout.row}>
                <div className={Layout.md_4}>
                  <SideBar
                    personalInfo={personalInfo}
                    socialsData={socialsData}
                  />
                </div>
                <div className={Layout.md_8}>
                  <div className="tab-content">
                    <Switch>
                      <Route
                        exact
                        path="/"
                        render={() => (
                          <TabAboutMe
                            personalInfo={personalInfo}
                            servicesData={servicesData}
                            skillsData={skillsData}
                          />
                        )}
                      />
                      <Route path="/resume" render={() => <TabResume />} />
                      <Route path="/amazing" component={TabAmazing} />
                      <Route path="/blog" component={TabBlog} />
                      <Route path="/contact" component={TabContactMe} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
