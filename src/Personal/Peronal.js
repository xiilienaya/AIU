import React,{Component} from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import {Button,Tabs} from 'antd';
import 'antd/dist/antd.css';
import Mycenter from './Mycenter';
import ChangePwd from './ChangePwd';
import '../CSS/Personal/personal.css';

const { TabPane } = Tabs;

export default class App extends Component {
    constructor(){
        super();
        this.state={
            tabPosition: 'left',
        }
    }
    componentDidMount(){

    }
  render() {
      return (
          <div >
            <div id='home-top'>
                <div id='h-top'>
                    <span id="home-my"><Link to='/space' style={{color:'black'}}>我的空间</Link></span>
                    <span id="home-my"><Link to='/personal' style={{color:'rgb(65, 185, 189)',marginRight:'10px'}}>个人中心</Link></span>
                </div>
            </div>
            <div id='h-tab'>
                <div id='h-tab-c'>
                    {/* 导航栏 */}
                    <ul className='h-tab-ul'>
                        <li id='home'><Link to='/home' style={{color:'black'}}>攻略首页</Link></li>
                        <li id='destination'>目的地</li>
                        <li id='travels'><Link target='_blank' to='/write' style={{color:"black"}}>发表游记</Link></li>
                    </ul>
                </div>
            </div>
            {/* 个人中心 */}
            <div className='p-myset'>
            <Tabs tabPosition={this.state.tabPosition}>
                <TabPane tab="个人中心" key="1">
                    <Mycenter />
                </TabPane>
                <TabPane tab="修改密码" key="2">
                    <ChangePwd />
                </TabPane>
                <TabPane tab="我的订单" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
            </div>
            {/* 底部 */}
            {/* <div className='p-bottom'>

            </div> */}
          </div>
      )
  }
}
