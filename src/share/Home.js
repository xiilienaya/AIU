import React,{Component} from 'react';
import {Button,Carousel} from 'antd';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../CSS/home.css';
import Title from './Title';
import Item from 'antd/lib/list/Item';

const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '',
};

const city=['全部','成都','上海','重庆','西安','北京','杭州','长沙','三亚','青岛'];

export default class App extends Component {
    constructor(){
        super();
        this.state={
            city:"全部"
        }
    }
    componentDidMount(){
        // console.log(this.props.history);
        // console.log(this.props.history.location.pathname);
    }
    selectCity=(item)=>{
        // console.log(item)
        this.setState({
            city:item
        })
    }
  render() {
      return (
        <div>
            <Router>
            <Title />
            {/* 轮播图 */}
            <div id='lunbo'>
                <div className="lun">
                    <Carousel autoplay dots={false}>
                        <div>
                            <div style={contentStyle}>
                                <div>
                                    <img className='lb-img' src={require('../img/lunbo1.png')} />
                                    <div className='worksInfo'>
                                        <span id='works-username'>嘻嘻哈哈</span>
                                        <p>旅游文章的标题</p>
                                        <img style={{width:'60px',height:'60px',borderRadius:"50%"}} src={require('../img/头像1.jpg')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <div>
                                    <img className='lb-img' src={require('../img/lunbo1.png')} />
                                    <div className='worksInfo'>
                                        <span id='works-username'>嘻嘻哈哈</span>
                                        <p>旅游文章的标题</p>
                                        
                                        <img style={{width:'60px',height:'60px',borderRadius:"50%"}} src={require('../img/头像1.jpg')}/>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </Carousel>
                </div>
            </div>
            {/* 当季推荐 */}
            <div className='h-tuijian'>
                <div className='tj-box'>
                    <p id='dangjituijian'>当季推荐</p>
                    <div className='tj-box-2'>
                        <ul className='tj-List'>
                            <li>
                                <img className='tj-list-img' src={require("../img/gonglue/tuijian1.jpg")} />
                                <span className='tj-list-title'>北京小长假周末必玩榜</span>
                            </li>
                            <li>
                                <img className='tj-list-img' src={require("../img/gonglue/tuijian2.jpg")} />
                                <span className='tj-list-title'>上海小长假周末必玩榜</span>
                            </li>
                            <li>
                                <img className='tj-list-img' src={require("../img/gonglue/tuijian3.jpg")} />
                                <span className='tj-list-title'>成都小长假周末必玩榜</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 攻略游记 */}
            <div className='youji'>
                <div className='yj-top'>
                    <h1>攻略游记</h1>
                </div>
                <div className='yj-des'>
                    <ul className='yj-des-list'>
                        <li id='yj-mudidi'>目的地</li>
                        {
                            city.map((item,index)=>{
                                if(item==this.state.city){
                                    return <li key={index} style={{color:"rgb(66, 198, 238)",fontWeight:"bold"}} onClick={()=>{this.selectCity(item)}}>
                                    {item}
                                    </li>
                                }else{
                                    return <li key={index} onClick={()=>{this.selectCity(item)}}>
                                        {item}
                                    </li>
                                }
                            })
                        }
                    </ul>
                </div>
                <div className='yj-List'>
                    <ul className='yj-List-ul'>
                        <li>
                            <img id='yj-list-tx' src={require('../img/头像1.jpg')} />
                            <p id='yj-list-title'>南方姑娘的心愿：想和你一起去东北看雪啊</p>
                            <br/>
                            <div id='yj-list-info'>
                                <span className='yj-list-username'>username</span>
                                <span id='yj-list-day'>2021-1-16 出发</span>
                                <span id='yj-list-time'>共五天</span>
                            </div>
                            <p id='yj-list-des'>目的地：东北</p>
                            <div id='yj-list-imgList'>
                                <img className='yj-imgStyle' src={require("../img/gonglue/dongbei1.jpg")} />
                                <img className='yj-imgStyle' src={require("../img/gonglue/dongbei2.jpg")} />
                                <img className='yj-imgStyle' src={require("../img/gonglue/dongbei3.jpg")} />
                            </div>
                        </li>
                        <li>
                            <img id='yj-list-tx' src={require('../img/头像1.jpg')} />
                            <p id='yj-list-title'>
                                <Link target="_blank" to='/travelbook?yjid=1'>南方姑娘的心愿：想和你一起去东北看雪啊</Link>
                            </p>
                            <br/>
                            <div id='yj-list-info'>
                                <span className='yj-list-username'>username</span>
                                <span id='yj-list-day'>2021-1-16 出发</span>
                                <span id='yj-list-time'>共五天</span>
                            </div>
                            <p id='yj-list-des'>目的地：东北</p>
                            <div id='yj-list-imgList'>
                                <img className='yj-imgStyle' src={require("../img/gonglue/dongbei1.jpg")} />
                                <img className='yj-imgStyle' src={require("../img/gonglue/dongbei2.jpg")} />
                                <img className='yj-imgStyle' src={require("../img/gonglue/dongbei3.jpg")} />
                            </div>
                        </li>
                    </ul>
                    <div className='h-bottom'>
                        
                    </div>
                </div>
            </div>
            </Router>
        </div>
      )
  }
}
