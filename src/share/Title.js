import React,{Component} from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import '../CSS/home.css';

export default class App extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        console.log(this.props.history);
    }
  render() {
      return (
        <div>
          <div id='home-top'>
              <div id='h-top'>

              </div>
          </div>
          <div id='h-tab'>
            <div id='h-tab-c'>
                {/* 导航栏 */}
                <ul className='h-tab-ul'>
                    <li id='home' style={{backgroundColor:"rgb(48, 141, 145)"}}>攻略首页</li>
                    <li id='destination'>目的地</li>
                    <li id='travels'>发表游记</li>
                </ul>
            </div>
          </div>
        </div>
      )
  }
}
