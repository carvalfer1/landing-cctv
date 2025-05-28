import * as React from 'react';
import { Link } from "react-router-dom";
import {Icon, Menu} from 'antd';
import './index.scss';
const { SubMenu } = Menu;

interface HeaderStates {
    current:string
}

class Header extends React.Component<{},HeaderStates>
{
    state = {
        current:""
    }    

    handleClick = (e:any) => {
        console.log(e.key);
        this.setState({current:e.key});
    }

    render : any = () => {
        return  <Menu className="header" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Jest
            </span>
          }
        >
            <Menu.Item key="setting:1">
              <Link to="/jest" className="nav-text">Introduction</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">Components mount</Menu.Item>
            <Menu.Item key="setting:3">Components functionality</Menu.Item>
         </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
        <Menu.Item key="history">
          <Link to="/history"><Icon type="align-center" />Vote history</Link>
        </Menu.Item>
        <Menu.Item key="configuration">
          <Link to="/"><Icon type="align-center" />Configuration</Link>
        </Menu.Item>
      </Menu>;
    }
}

export default Header;