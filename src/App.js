import React, {Component} from 'react';
import NavLink from './components/NavLink/NavLink';
import TopHead from './components/TopHead';
import SideBar from './components/SideBar/SideBar';
import TabAboutMe from './components/TabAboutMe/TabAboutMe';
import Footer from './components/Footer';

import DataPersonalInfo from './dataLocal/DataPersonalInfo';
import DataServices from './dataLocal/DataServices';
import DataSkills from './dataLocal/DataSkills';
import DataSocials from './dataLocal/DataSocials';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: DataPersonalInfo,
            dataServices: DataServices,
            dataSkills: DataSkills,
            dataSocials: DataSocials,
        };
    }

    render() {
        const {
            personalInfo,
            dataServices,
            dataSkills,
            dataSocials,
        } = this.state;

        return (
            <div className="App">
                <div className="resume">
                    <div className="container">
                        <NavLink />
                        <TopHead />
                        <div className="row">
                            <div className="col-md-4">
                                <SideBar
                                    personalInfo={personalInfo}
                                    dataSocials={dataSocials}
                                />
                            </div>
                            <div className="col-md-8">
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
