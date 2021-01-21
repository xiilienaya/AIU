import React,{Component} from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import '../CSS/MySpace.css';

export default class App extends Component {
    constructor(){
        super();
        this.state={
            fsnum:0
        }
    }
    renderList=()=>{
        if(this.state.fsnum==0){
            return(
                <div className='my-none'>
                  <p>咦~您还没有关注任何人哦</p>
                </div>
            )
        }else{
            return(
                <ul className='gz-list'>
                    <li>
                        <img className='gz-tx' src={require('../img/头像1.jpg')} />
                        <span className='gz-name'>一只小可爱</span>
                        <span className='gz-gz'>关注 2</span>
                        <span className='gz-fs'>粉丝 3</span>
                    </li>
                </ul>
            )
        }
    }
  render() {
      return (
          <div>
              {
                  this.renderList()
              }
          </div>
      )
  }
}
