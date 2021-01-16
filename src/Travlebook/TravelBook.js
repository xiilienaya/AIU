import React,{Component} from 'react';
import {Button,Input} from 'antd';
import 'antd/dist/antd.css';
import "../CSS/TravelBook.css";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";

const { TextArea } = Input;

export default class App extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
    }
  render() {
    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
            <div className='tb-top'>
                {/* 头像，标题 */}
                <img id='tb-touxiang' src={require('../img/头像1.jpg')} />
                <p id='tb-title'>南方姑娘的心愿：想和你一起去东北看雪啊</p>
                {/* 点赞，收藏，评论 */}
                <div className='tb-aha'>
                    <ul>
                        <li>
                            <i className='iconfont icondianzan1' style={{fontSize:"40px",color:"white",marginLeft:"12px"}}></i>
                            <p className='tb-ic'>520</p>
                        </li>
                        <li style={{paddingTop:'4px'}}>
                            <i className='iconfont iconshoucang' style={{fontSize:"35px",color:"white",marginLeft:"13px"}}></i>
                            <p style={{marginTop:"3px"}} className='tb-ic'>520</p>
                        </li>
                        <li style={{paddingTop:'4px'}}>
                            <i className='iconfont iconpinglun' style={{fontSize:"38px",color:"white",marginLeft:"12px"}}></i>
                            <p className='tb-ic'>520</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='tb-body'>
                {/* 作者信息 */}
                <p className='tb-writer'>
                    <span id='tb-username'>一只小可爱</span>
                    <span style={{marginLeft:"15px"}}>创建于2021/1/16</span>
                </p>
                {/* 作品的标签 */}
                <div className='tb-tag'>
                    <ul>
                        <li>
                            <i className='iconfont iconshijian tb-icon' ></i>
                            <p>出发日期</p>
                            <p className='tb-ic-aha'>2021/1/16</p>
                        </li>
                        <li>
                            <i className='iconfont iconshijian tb-icon' ></i>
                            <p>出游天数</p>
                            <p className='tb-ic-aha'>5天</p>
                        </li>
                        <li>
                            <i className='iconfont iconshijian tb-icon' ></i>
                            <p>人均费用</p>
                            <p className='tb-ic-aha'>5000元</p>
                        </li>
                    </ul>
                </div>
                {/* 图片 */}
                <div className='tb-imgList'>                 
                <div>
                    <Slider {...settings} style={{color:"black"}}>
                    <div>
                        <img className='tb-imglist-style' src={require('../img/gonglue/dongbei1.jpg')} />
                    </div>
                    <div>
                        <img className='tb-imglist-style' src={require('../img/gonglue/dongbei2.jpg')} />
                    </div>
                    <div>
                        <img className='tb-imglist-style' src={require('../img/gonglue/dongbei3.jpg')} />
                    </div>
                    </Slider>
                    </div>
                </div>
                {/* 文本 */}
                <div>
                    
                </div>
            </div>
        </div>
      )
  }
}
 
