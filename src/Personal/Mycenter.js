import React,{Component} from 'react';
import {Button,Divider,Input,Radio} from 'antd';
import 'antd/dist/antd.css';
import ChangeHead from './ChangeHead';

export default class App extends Component {
    constructor(){
        super();
        this.state={
            sex:1,
            name:'',
            txBox:'none'
        }
    }
    componentDidMount(){

    }
    changeName=({ target: { value } })=>{
        // console.log(value)
        this.setState({
            name:value
        })
    }
    onChangeSex=(e)=>{
        console.log('radio checked', e.target.value);
        this.setState({
            sex:e.target.value
        })
    }
    submit=()=>{
        
    }
    showChange=(val)=>{
        console.log(val)
        if(!val){
            this.setState({
                txBox:'none'
            })
        }
    }
    showTxBox=()=>{
        this.setState({
            txBox:'block'
        })
    }
  render() {
      return (
          <div id='top'>
              <p className='p-myinfo'>个人资料</p>
              <Divider />
              <div className='p-infoBox'>
                  <img src={require('../img/头像1.jpg')} className='p-tx' onDoubleClick={this.showTxBox} />
                  <span className='p-name'>一只小可爱</span>
                  <br/>
                  <ul className='p-ul'>
                      <li>
                        <span className='p-sp'>昵称</span>
                        <Input value={this.state.name} onChange={this.changeName} className='p-inp'/>
                      </li>
                      <li className='p-ul'>
                          <span className='p-sp'>性别</span>
                          <Radio.Group onChange={this.onChangeSex} value={this.state.sex}>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                        </Radio.Group>
                      </li>
                      <li>
                        <span className='p-sp'>手机</span>
                        <span>15232161013</span>
                      </li>
                  </ul>
                  <p className='p-p'>AIU郑重承诺：我们将尊重您的个人隐私，您的个人信息不会被公开。</p>
                  <Button className='p-submit' onClick={this.submit}>保存</Button>
              </div>
              {/* 修改头像 */}
              <div className='p-changeTx' style={{display:this.state.txBox}}>
                    <div className='my-txBox'>
                        <ChangeHead showChange={this.showChange.bind(this)} />
                    </div>
              </div>
          </div>
      )
  }
}
