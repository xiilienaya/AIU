import React,{Component} from 'react';
import {Button,Input,Alert,Modal,Space} from 'antd';
import 'antd/dist/antd.css';
import '../CSS/sign.css';
import {Route,Router,Link} from 'react-router-dom';

//手机,密码正则表达式
const regTel = /^1\d{10}$/;
const regPwd = /^\w{6,20}$/;//包含英文，数字，下划线，6-20位


export default class App extends Component {
    constructor(){
        super();
        this.state={
            code : "获取验证码",
            btn : false,
            showZCBox:'none',
            showSignBox:'block'
        }
    }
    componentDidMount(){

    }
    // 登录验证
    checkSignIn=()=>{
        let username=this.username.state.value;
        let pwd = this.pwd.state.value;
        console.log(username,pwd);
        if( username ==undefined || pwd == undefined){
            alert("用户名和密码不能为空")
        }else if(regTel.test(username) && regPwd.test(pwd)){
            alert("登录成功");
        }else if(!regPwd.test(pwd)){
            alert("请输入6-20位的密码(可包含英文,数字,下划线)")
        }else{
            alert("手机号错误");
        }
    }
    // 获取验证码
    getCode=()=>{
        let tel=this.zcTel.state.value;
        let pwd = this.zcPwd.state.value;
        console.log(tel,pwd);
        if(tel==undefined || pwd ==undefined){
            alert("手机号和密码不能为空")
        }else if(regTel.test(tel) && regPwd.test(pwd)){
        //发送验证码   

        //重新获取验证码
        var time = 30;
        this.timer = setInterval(() => {
            time = time -1;
            if(time <0){
                this.setState({
                    code:"获取验证码",
                    btn : false
                })
                clearInterval(this.timer);
            }else{
                var str = "重新获取"+"("+time+")";
                this.setState({
                    code : str,
                    btn :true
                })
            }
        },1000);
        }
        
    }
    zhuce=()=>{
        //验证用户名是否为空
        let tel=this.zcTel.state.value;
        let pwd = this.zcPwd.state.value;
        let name = this.zcName.state.value;
        console.log(name);
        if(name ==undefined || name ==undefined || pwd == undefined){
            alert("请您填写完整注册信息哦~")
        }else{
            //核验验证码是否正确
        }
        //注册成功跳转登录页面
    }
    gotoZC=()=>{
        this.setState({
            showSignBox:'none',
            showZCBox:"block"
        })
    }
    backSign=()=>{
        this.setState({
            showSignBox:'block',
            showZCBox:"none"
        })
    }
  render() {
      return (
          //登录框
          <div id='sign-back'>
             <div id='sign-box' style={{display:this.state.showSignBox}}>             
                <div className='signbox' id='sign-username'>
                    <i className='iconfont iconrenyuanbaozhang' style={{fontSize:'17px'}}></i>
                    <Input className='sign-inp' ref={(inp)=>{this.username=inp}} style={{width:'200px',marginLeft:'10px'}} bordered={false} placeholder='手机号' />
                </div>
                <div className='signbox' id='sign-pwd'>
                    <i className='iconfont iconmima' style={{fontSize:'20px'}}></i>
                    <Input type='password' className='sign-inp' ref={(inp)=>{this.pwd=inp}}   style={{width:'200px',marginLeft:'10px'}} bordered={false} placeholder='请输入密码' />
                </div>
                <Button id='sign-btn' onClick={this.checkSignIn}>登录</Button>
                <p id='zhuce' onClick={this.gotoZC}>立即注册</p>
             </div> 
             {/* //注册框 */}
             <div id='zhuce-box' style={{display:this.state.showZCBox}}>
                用户名<Input className='sign-inp' id='zhuce-name' ref={(inp)=>{this.zcName=inp}} style={{width:'200px',marginLeft:'22px',marginTop:'40px'}}/>
                <br/>
                手机号码<Input className='sign-inp' id='zhuce-tel' ref={(inp)=>{this.zcTel=inp}} style={{width:'200px',marginLeft:'10px',marginTop:'40px'}}/>
                <br/>
                登录密码<Input type='password' className='sign-inp' id='zhuce-pwd' ref={(inp)=>{this.zcPwd=inp}} style={{width:'200px',marginLeft:'10px',marginTop:'40px'}}/>
                <br/>
                验证码<Input className='sign-inp' id='zhuce-code' ref={(inp)=>{this.Vcode=inp}}  style={{width:'200px',marginLeft:'23px',marginTop:'40px'}}/>
                <br/>
                <Button id='zhuce-getCode' style={{width:'270px',marginTop:'50px'}} 
                onClick={this.getCode}
                activeStyle={{background:"lightgrey"}}
                disabled={this.state.btn}
                >{this.state.code}</Button>
                <br/>
                <Button onClick={this.zhuce} style={{width:'270px',marginTop:'30px'}}>注册</Button>
                <p id='backSign' onClick={this.backSign}>返回登录</p>
             </div>
             
          </div>
      )
  }
}
