import ReactDOM from "react-dom";
import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {Button} from 'antd';
import "../CSS/write.css";

var obj=null;

export default class CustomBack extends Component {
  constructor(){
    super();
    this.state = {
        showImg:'none',
        display:'none',
        dis:'block',
        src: null,
        crop: {
            aspect: 12/5,
            // width: 1200,
            // height:500
      },
    };
  }
  componentDidMount(){
      
  }
  //选择图片
  onSelectFile = e => {
      this.setState({
          display:"block"
      })
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
    }
  };

  onImageLoaded = (image, pixelCrop) => {
      this.imageRef = image;
  };

  onCropComplete = (crop, pixelCrop) => {
    this.makeClientCrop(crop, pixelCrop);
    //console.log(pixelCrop);
  };

  onCropChange = (crop,precentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop, pixelCrop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        pixelCrop,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, pixelCrop, crop,fileName) {
    let h = image.naturalHeight;
    let w = image.naturalWidth;
    let pixelh = pixelCrop.height.toFixed() * 0.01;
    let pixelw = pixelCrop.width.toFixed() * 0.01;
    let pixelx = pixelCrop.x.toFixed() * 0.01;
    let pixely = pixelCrop.y.toFixed() * 0.01;
    //console.log(pixelh);
    //绘画
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height =crop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      pixelx * w,
      pixely * h,
      pixelw * w,
      pixelh * h,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        obj = blob;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
        //console.log(this.fileUrl);
      }, "image/jpeg");
    });
  }
  //确定
  upBack=()=>{
      this.setState({
          display:"none",
          dis:"none",
      })
    // console.log(obj);
    var reader = new FileReader();
    reader.readAsDataURL(obj);
    //上传
    reader.addEventListener("load", () =>
        {
            // console.log(reader.result)base64编码
            localStorage.setItem('headImg',reader.result);
            this.props.setHeadImg(true);
            this.setState({
              showImg:'block'
            })
        }
          
    );
  }
  cancel=()=>{
    this.setState({
        display:"none"
    })
  }
  
  render() {
    const { crop, croppedImageUrl, src } = this.state;
    //console.log(this.state);
    return (
      <div className="App">
        <div style={{display:this.state.dis}}>
            <label htmlFor='head_img'>
                <div className='w_upimg'>
                    <i className='iconfont icontupian w_upup'></i>
                    <p className='w_upupup'>上传头图</p>
                </div>
                <p className='w_upTips'>图片建议选择尺寸大于1680px的大图，例如相机原图</p>
            </label>
            <input style={{display:"none"}} type="file" id='head_img' onChange={this.onSelectFile} />
        </div>
        <div className='w-cropBox' style={{display:this.state.display}}>
            <div className='w-crop'>
            {src && (
            <ReactCrop
                src={src}
                crop={crop}
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
            />
            )}
            {croppedImageUrl && (
            <img alt="Crop" style={{ maxWidth:'100%',display:'none',maxHeight:'400'}} src={croppedImageUrl} />
            )}
            <Button onClick={this.upBack}>确定</Button>
            <Button onClick={this.cancel}>取消</Button>
            </div>
        </div>
        <div className='cb-bottom'>
          
        </div>
      </div>
    );
  }
}


