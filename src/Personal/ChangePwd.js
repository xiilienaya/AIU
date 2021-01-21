import React,{Component} from 'react';
import {Button,Input,Divider,Modal} from 'antd';
import 'antd/dist/antd.css';
import '../CSS/Personal/changePwd.css';
import { EyeInvisibleOutlined, EyeTwoTone,ExclamationCircleOutlined  } from '@ant-design/icons';

export default class App extends Component {
    constructor(){
        super();
        this.state={
            oldPwd:'',
            newPwd:'',
            surePwd:'',
        }
    }
    componentDidMount(){

    }
    oldPwd=({ target: { value } })=>{
        this.setState({
            oldPwd:value
        })
    }
    newPwd=({ target: { value } })=>{
        this.setState({
            newPwd:value
        })
    }
    surePwd=({ target: { value } })=>{
        this.setState({
            surePwd:value
        })
    }
    submit=()=>{
        //获取旧密码对比
        let old = this.state.oldPwd;
        //验证新密码
        let newPwd = this.state.newPwd;
        let sure = this.state.surePwd;
        if(newPwd != sure){
            Modal.confirm({
                title: '修改密码',
                icon: <ExclamationCircleOutlined />,
                content: '两次输入的密码不一致！',
                okText: '确认',
                cancelText: '取消',
              });
        }

    }
  render() {
      return (
          <div >
              <p className='p-myinfo'>修改密码</p>
              <Divider />
              <div className='p-infoBox'>
              <ul className='pwd-ul'>
                      <li>
                        <span className='pwd-sp'>旧密码</span>
                        <Input.Password name='oldPwd' value={this.state.oldPwd} onChange={this.oldPwd}  className='p-inp'  />
                        <span className='pwd-sp2'>请输入您当前使用的密码</span>
                      </li>
                      <li>
                        <span className='pwd-sp'>新密码</span>
                        <Input.Password name='newPwd' value={this.state.newPwd} onChange={this.newPwd} className='p-inp' />
                        <span className='pwd-sp2'>6-20位的密码(可包含英文,数字,下划线)</span>
                      </li>
                      <li>
                        <span className='pwd-sp'>确认密码</span>
                        <Input.Password name='surePwd' value={this.state.surePwd} onChange={this.surePwd} className='p-inp'  />
                        <span className='pwd-sp2'>再次确认您的新密码</span>
                      </li>
                </ul>
                <Button className='pwd-btn' onClick={this.submit} >确认修改</Button>
              </div>
          </div>
      )
  }
}
