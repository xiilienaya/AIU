import React,{Component} from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import '../CSS/home.css';

export default class App extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        console.log(this.props.history)
    }
  render() {
      return (
        <div>
          <div id='home-top'>
              <div id='h-top'>
                  <span id="home-my"><Link to='/space' style={{color:'black'}}>我的空间</Link></span>
                  <span id="home-my"><Link to='/personal' style={{color:'black',marginRight:'10px'}}>个人中心</Link></span>
              </div>
          </div>
          <div id='h-tab'>
            <div id='h-tab-c'>
                {/* 导航栏 */}
                <ul className='h-tab-ul'>
                    <li id='home' style={{backgroundColor:"rgb(48, 141, 145)"}}>攻略首页</li>
                    <li id='destination'>目的地</li>
                    <li id='travels'><Link target='_blank' to='/write' style={{color:"black"}}>发表游记</Link></li>
                </ul>
            </div>
          </div>
        </div>
      )
  }
}
