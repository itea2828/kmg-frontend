import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import logo from "../images/logo.jpg";
import Dashboard from "../pages/Dashboard";

const { Header, Sider, Content } = Layout;


class PageLayout extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        <img src={logo} alt="logo" className="logo"/>
                        <span className="panel-title">Панель управления</span>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <img src={require('../images/logo-ozen.png')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">АО "ОзенМунайГаз"</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <img src={require('../images/logo_kbm.png')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">АО "Каражанбасмунай"</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <img src={require('../images/logo-ger.png')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">ТОО "КазГерМунай"</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <img src={require('../images/logo-emba.png')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">АО "ЭмбаМунайГаз"</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <img src={require('../images/logo-mangis.png')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">АО "Мангистаумунайгаз"</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <img src={require('../images/kazturkmunaj.png')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">ТОО "Казтуркмунайгаз"</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <img src={require('../images/logo-koa.gif')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">ТОО "Казахойл Актобе"</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <img src={require('../images/logo-petro.png')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">ПетроКазахстан Инк</span>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <img src={require('../images/logo_aman.png')} className="logo-panel" alt="ozen" />
                            <span className="menu-span">Амангельды Газ</span>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#20274f', padding: 0 }}>
                            <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            />
                        </Header>
                        <Content className="content">
                            <Dashboard />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default PageLayout;
