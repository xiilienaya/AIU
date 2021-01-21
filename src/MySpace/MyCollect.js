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
          collectList:1,
          dis:'none',
        }
    }
    componentDidMount(){
        
    }
    //删除按钮显隐
    cancleCol=()=>{
      this.setState({
        dis:'block'
      })
    }
    cancleCol2=()=>{
      this.setState({
        dis:'none'
      })
    }
    //取消收藏
    isdetele=()=>{
      Modal.confirm({
        title: '取消收藏',
        icon: <ExclamationCircleOutlined />,
        content: '确定不再收藏此游记吗？',
        okText: '确认',
        cancelText: '取消',
        onOk:()=>{
          this.delete()
        }
      });
    }
    //执行删除操作
    delete=()=>{
      this.setState({
        collectList:0
      })
    }
    renderList=()=>{
      if(this.state.collectList == 0){
        return(
          <div className='my-none'>
              <p>TA还没有收藏呢~</p>
          </div>
        )
      }else{
        return(
          <ul className='my-noteList'>
            <li onMouseMove={this.cancleCol} onMouseLeave={this.cancleCol2}>
                <img className='my-cl-tx' src={require('../img/头像1.jpg')} />
                <span className='my-noteTitle'>南方姑娘的心愿：想和你一起去东北看雪啊</span>
                <img className='my-cl-Img' src={require('../img/lunbo1.png')} />
                <Button onClick={this.isdetele} className='my-cancle-col' style={{display:this.state.dis}}>取消收藏</Button>
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
