import React,{Component} from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import {Button,Modal} from 'antd';
import 'antd/dist/antd.css';
import '../CSS/MySpace.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default class App extends Component {
    constructor(){
        super();
        this.state={
          noteList:0,
        }
    }
    componentDidMount(){
        
    }
    // 删除游记
    isdelete=()=>{
      Modal.confirm({
        title: '删除',
        icon: <ExclamationCircleOutlined />,
        content: '确定删除这篇游记吗？',
        okText: '确认',
        cancelText: '取消',
        onOk:()=>{
          console.log('jajaj')
        }
      });
    }
    // 渲染列表
    renderList=()=>{
      if(this.state.noteList == 0){
        return(
          <div className='my-none'>
              <p>TA还没发表游记哦~</p>
          </div>
        )
      }else{
        return(
          <ul className='my-noteList'>
            <li>
                <p>2020/1/20  我发表了游记</p>
                <i className='iconfont iconshanchu delete' onClick={this.isdelete}></i>
                <p className='my-noteTitle'>南方姑娘的心愿：想和你一起去东北看雪啊</p>
                <img className='my-noteImg' src={require('../img/lunbo1.png')} />
                <span className='my-noteInfo'>2021/1/20 出发 &nbsp; 共5天</span>
                <span className='my-notecollect'>
                  <i className='iconfont iconxingxing'></i>&nbsp;5
                </span>
                <span className='my-notelike'>
                  <i className='iconfont iconaixin'></i>&nbsp;5
                </span>
            </li>
            <li>
                <p>2020/1/20  我发表了游记</p>
                <p className='my-noteTitle'>南方姑娘的心愿：想和你一起去东北看雪啊</p>
                <img className='my-noteImg' src={require('../img/lunbo1.png')} />
                <span className='my-noteInfo'>2021/1/20 出发 &nbsp; 共5天</span>
                <span className='my-notecollect'>
                  <i className='iconfont iconxingxing'></i>&nbsp;5
                </span>
                <span className='my-notelike'>
                  <i className='iconfont iconaixin'></i>&nbsp;5
                </span>
            </li>
          </ul>
        )
      }
    }
  render() {
      return (
        <div className='TravelNotes'>
            {this.renderList()}
        </div>
      )
  }
}
