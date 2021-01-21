import React,{Component} from 'react';
import {HashRouter as Router,Route,Link, Switch} from 'react-router-dom';
import {Button,Tabs} from 'antd';
import 'antd/dist/antd.css';
import TravelNotes from './TravelNotes';
import Mycollect from './MyCollect';
import Fens from './Fens';
import Guanzhu from './Guanzhu';
import '../CSS/MySpace.css';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

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
            <Router>
            {/* 顶栏 */}
            <div className='w-top'>
                <span style={{lineHeight:"30px",marginLeft:"10px"}}>
                <Link to='/home' style={{color:'black'}}>返回首页</Link>
                </span>
            </div>
            {/* 顶栏 */}
            <div className='my-top'>
                <img className='my-tx' src={require('../img/头像1.jpg')} />
                <span className='my-name'>一只小可爱</span>
                {/* 个签 */}
                <span className='my-signature'>
                    <i className='iconfont iconpan_icon' style={{marginRight:'3px'}}></i>
                    今天很开心。
                </span>
                <button className='guanzhuBtn'>+关注</button>
                <div className='my-fs'>
                    <div style={{borderRight:'2px solid grey'}}>
                        <span className='fs'>230</span>
                        <p>粉丝</p>
                    </div>
                    <div>
                        <span className='fs'>230</span>
                        <p>关注</p>
                    </div>
                </div>
            </div>
            <Tabs defaultActiveKey="1" onChange={callback} className="my-tab" style={{paddingLeft:'300px'}} size='large'>
                <TabPane tab="游记" key="1">
                    <div className='mytabBox'>
                        <TravelNotes />
                    </div>
                </TabPane>
                <TabPane tab="收藏" key="2" >
                    <div className='mytabBox'>
                        <Mycollect />
                    </div>
                </TabPane>
                <TabPane tab="我的关注" key="3" >
                    <div className='mytabBox'>
                        <Guanzhu />
                    </div>
                </TabPane>
                <TabPane tab="我的粉丝" key="4" >
                    <div className='mytabBox'>
                        <Fens />
                    </div>
                </TabPane>
            </Tabs>
            {/* 底部 */}
            <div className='my-bottom'>

            </div>
            </Router>
        </div>
      )
  }
}
