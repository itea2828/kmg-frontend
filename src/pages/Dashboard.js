import React, { Component } from 'react';
import { Row, Col } from 'antd';
import mapp from "../images/23.png";
import Pieblock from '../charts/Pieblock';
import Areablock from '../charts/Areablock';
import { Menu } from 'antd';
import PieCondensate from '../charts/PieCondensate';
import PieGas from '../charts/PieGas';
import AreaBar from '../charts/Areablock';
import Barrio from '../charts/Barblock';
// import CirclePie from "../charts/CirclePie";

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
        <div>
            
            <Row>
                    <Col xs={24} sm={24} md={24} lg={13}>
                        <div className="top-header1">
                            <div className="zero">
                                <span className="bar-title active"><div className="indicator"></div>Общие данные</span>
                                <span className="bar-title"><div className="indicatorz"></div>Аналитика</span>
                            </div>
                        </div>
                        
                        <div className="mainbox">
                            <img className="map" src={mapp} alt="map" />
                            <Row>
                                <div className="four">
                                    <Col xs={24} sm={24} md={24} lg={12}>
                                    <span className="bar-title"><div className="indicator"></div>Добыча нефти и конденсата (тыс.тонн)</span>
                                        <Barrio />
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={12}>
                                    <span className="bar-title"><div className="indicator"></div>Добыча природного и попутного газа (млн.м3)</span>
                                        <Barrio />
                                    </Col>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={11}>
                        <div className="mainbox-2">
                            <div className="top-header">
                
                            </div>
                            <div className="top-dates">
                                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                                    <Menu.Item key="1">
                                        <span className="menu-span">День</span>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <span className="menu-span">Месяц</span>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <span className="menu-span">Квартал</span>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <span className="menu-span">Год</span>
                                    </Menu.Item>
                                </Menu>
                            </div>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <div className="one">
                                        <span className="bar-title"><div className="indicator"></div>Операционные активы КМГ</span>
                                        
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <div className="two">
                                        <span className="bar-title"><div className="indicator"></div>Нефтяной фонд скважин</span>
                                        <Pieblock />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <div className="two">
                                        <span className="bar-title"><div className="indicator"></div>Добыча нефти и конденсата</span>
                                        <PieCondensate />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <div className="one">
                                        <span className="bar-title"><div className="indicator"></div>Добыча газа</span>
                                        <PieGas />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <div className="three">
                                        <span className="bar-title"><div className="indicator"></div>Динамика добычи за 15 декабря</span>
                                        <AreaBar />
                                    </div>
                                </Col>
                            </Row>
                            
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;
