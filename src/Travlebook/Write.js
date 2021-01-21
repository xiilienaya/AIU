import React,{Component} from 'react';
import {Link,HashRouter as Router} from 'react-router-dom';
import {Button, Input,Upload,Modal,DatePicker, Space} from 'antd';
import 'antd/dist/antd.css';
import HeadImg from './SelectImg';
import '../CSS/write.css';
import E from "wangeditor";
import { PlusOutlined } from '@ant-design/icons';

//编辑器
const editor = new E("#div1");
editor.config.excludeMenus = [
  'emoticon',
  'video',
  'image',
  'table',
  'code',
];
editor.config.showFullScreen = false;

//上传图片
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const dateFormat = 'YYYY/MM/DD';

export default class App extends Component {
    constructor(){
        super();
        this.state={
          ImgOK:false,
          showImg:"none",
          imgSrc:null,
          title:'',
          content:"",
          //上传图片
          previewVisible: false,
          previewImage: '',
          previewTitle: '',
          fileList: [
            
          ],
        }
    }
    //设置头图
    setHeadImg=(val)=>{
      this.setState({
        ImgOK:val
      })
      if(this.state.ImgOK){
        this.setState({
          showImg:"block",
          imgSrc:localStorage.getItem('headImg'),
        })
      }
    }
    //获取标题
    InputTitle=({ target: { value } })=>{
      this.setState({
        title:value
      })
    }
    componentDidMount(){
        console.log(this.props.history);
        // 创建编辑器
        editor.config.onchange = (newHtml) => {
            this.setState({content:newHtml})
        }
        /**一定要创建 */
        editor.create();
        
    }
    componentWillUnmount(){
      editor.destroy()
    }
    //获取文章内容
    getHtml=()=>{
      alert(this.state.content)
    }
    //上传图片相关函数
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });
    //选择日期
    onChangeDate=(date, dateString)=>{
      console.log(date, dateString);
    }
    //提交
    submit=()=>{
      console.log(this.state.fileList)
    }
    //
  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
      return (
        <div>
          <Router>
          <div className='w-top'>
            <span style={{lineHeight:"30px",marginLeft:"10px"}}>
              <Link to='/home' style={{color:'black'}}>返回首页</Link>
            </span>
          </div>
          {/* 上传头图 */}
          <div className='w-headImgBox'>
              <HeadImg  setHeadImg={this.setHeadImg.bind(this)}/>
              <img style={{display:this.state.showImg}} className='w-headImg' src={this.state.imgSrc} />
          </div>
          {/* 标题 */}
          <div className='w-title'>
              <img className='w-tx' src={require('../img/头像1.jpg')} />
              <Input className='w-titleInput' placeholder='为游记起一个拉轰的名字吧~'
              maxLength={20}
              value={this.state.title}
              onChange={this.InputTitle}
              />
          </div>
          {/* 编辑器 */}
          <div>
            <p className='w-ed'>说说这次旅行吧</p>
            <div id="div1" className='w-editor'>

            </div>
            {/* <button onClick={this.getHtml}>获取html</button> */}
          </div>
          {/* 上传图片 */}
          <p className='w-ed2'>快让大家看看你在旅行中的美照吧</p>
          <div className='w-uploadImg'>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              multiple={true}
              maxCount={5}
            >
            {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
          {/* 基本信息 */}
          <p className='w-ed2'>再加一点信息吧</p>
          <div className='elseinfo'>
            <br/>
              <ul>
                <li>
                  <span>时间</span>
                    <Space direction="vertical">
                      <DatePicker style={{marginLeft:"10px"}} placeholder='请选择日期' onChange={this.onChangeDate} format={dateFormat} />
                    </Space>
                </li>
                <li>
                  <span>游玩天数</span>
                  <Input className='ei-inp' type='number' />
                </li>
                <li>
                  <span>人均</span>
                  <Input className='ei-inp' prefix="￥" suffix="RMB"/>
                </li>
              </ul>
          </div>
          <Button className='w-submit' onClick={this.submit}>
            <i className='iconfont iconfabiao' style={{fontSize:'20px',marginRight:'3px'}}></i>
                发表游记
          </Button>
          <div className='w-bottom'> 

          </div>
          </Router>
        </div>
      )
  }
}
