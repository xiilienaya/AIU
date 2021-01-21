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
        this.state={
            commentValue:"",
            headImg:'',//文章头图
            title:"",//文章标题
            authorName:"",//用户名
            authorHead:"",//作者头像
            publishTime:"",//文章发表时间
            goDate:"",//出发日期
            days:'',//游玩天数
            money:"",//人均花费
            collect:'',//收藏数
            likes:'',//点赞数
            cmNum:"",//评论数
            
        }
    }
    componentDidMount(){
        // 根据文章id渲染文章
        let articleID = this.props.history.location.search.split("=")[1];
        console.log(articleID);
    }
    //编辑评论
    editComment=({ target: { value } })=>{
        this.setState({ 
            commentValue:value
         });
    }
    // 添加评论
    addComment=()=>{
        console.log(this.state.commentValue)
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
                <div className='tb-content'>
                    <p>东北三省，是我走南闯北这么多年来，唯一一片从未去过的地域了。作为南方姑娘，忍得住西藏零下十几度的冬天，过得了没有暖气屋内比屋外冷的闽南，可每每说起东北，负二十几度的气温让我一次又一次地敬而远之。</p>
                    <p>秋末初冬的一天，浩文在与我聊天的同时问了一句要不要去东北啊？听说东北下雪不用撑伞，屋内有超级温暖还能穿短袖，室外就是个大冰箱还有不会化掉的雪糕啊。就这么刚好，我们三五好友约好了一块儿去，那也是很美好的呀。</p>
                    <p>想去哈尔滨中央大街吃马迭尔冰棍，想去东北雪乡看远近闻名的那屋檐上的雪都挂到地上来了，想去长白山遇上难得一见的天池和冰天雪地里热气腾腾的温泉，这一切，都让我憧憬着即将到来的东北之旅。</p>
        
                </div>

                {/* 评论区 */}
                <div className='yitiao'></div>
                <div className='tb-comment'>
                    <p style={{color:'grey'}}>作者给力~给个好评哦~</p>
                    <img id='tb-cm-head' src={require("../img/头像1.jpg")} />
                    <span id='tb-cm-name'>一只小可爱</span>
                    <TextArea className="tb-cm-text" 
                        maxLength={300}
                        showCount
                        rows={5}
                        placeholder='评论一下吧~'
                        value={this.state.commentValue}
                        onChange={this.editComment}
                    />
                    <Button id="tb-pubcm" onClick={this.addComment}>评论</Button>
                </div>
                <div className='tb-cm-List'>
                    <ul>
                        <li>
                            <img className='cmlist-head' src={require('../img/头像2.jpg')} />
                            <span className='cmlist-name'>哈哈哈：</span>
                            <span className='cmlist-text'>照片已美哭！暖暖哒很温馨</span>
                            <p className='cmlist-time'>2021年01月18日 13:48</p>
                        </li>
                    </ul>
                </div>

                {/* 底部 */}
                <div className='tb-bottom'>

                </div>
            </div>
        </div>
      )
  }
}
 
