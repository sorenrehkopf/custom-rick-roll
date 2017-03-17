import React, {Component} from 'react';

import PageService from '../services/pageService.jsx';
import FormService from '../services/formService.jsx';

import BotCheck from './botCheck.component.jsx';

var imgInput;

class SendForm extends Component {

	constructor(props){
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.imgTimeout;
		this.state = {
			selectedImg:0,
			imgs:[
				'',
				'https://static.wixstatic.com/media/20cbca_574ab57d10944522ab504abe1a9ce8d4~mv2.jpg',
				'http://www.pickmyturntable.com/wp-content/uploads/2015/03/dj-turntables-new-archives-music-and-radio-industry-news-and-infomation.jpg',
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Lander_College_Old_Main_Building.jpg/640px-Lander_College_Old_Main_Building.jpg',
				'https://southlincoln.dsbn.org/images/website-images/soccer.jpg',
				'https://ae01.alicdn.com/kf/HTB12Ng9PXXXXXaaXFXXq6xXFXXXj/-font-b-400ml-b-font-Low-Form-font-b-Beaker-b-font-Chemistry-Laboratory-Borosilicate.jpg'
			]
		}
	}

	submitForm(e){
		e.preventDefault();
		var data = FormService.getJSON(e.target);
		if(FormService.botCheck(e.target)){
			console.log(data);
			PageService.createPage(data)
			.then(this.props.responseHandler);
		}else{
			this.props.responseHandler("http://localhost:3000/index.html")
		}
	}

	componentDidMount(){
		imgInput = document.getElementById('img-input');
	}

	updateImgPreview(e){
		clearTimeout(this.imgTimeout);
		var thiz = this;
		this.imgTimeout = setTimeout(function(){
			var imgs = thiz.state.imgs;
			imgs[0] = imgInput.value;
			thiz.setState({
				imgs:imgs
			});
		},1000);
	}

	chooseImg(i){
		console.log(i);
		imgInput.value = this.state.imgs[i];
		this.setState({
			selectedImg:i
		});
	}

	render(){
		var el = null;
		if(this.props.showMe){
			var imgs = this.state.imgs.map((img,i)=>{
				var message = img?'':<span>Paste the url to your image to see the preview here!</span>;
				return <div className={"img-div__img "+ (this.state.selectedImg === i?"selected":"")} style={{backgroundImage:"url("+img+")"}} key={i} onClick={this.chooseImg.bind(this,i)}>
					{message}
				</div>
			});
			el = (
				<form onSubmit={this.submitForm} className="form pure-form">
					<fieldset className="pure-group">
						<input className="pure-input-1" type="text" placeholder="Page Title" name="title" maxLength="50" required="true"></input>
						<BotCheck/>
						<input id="img-input" className="pure-input-1" onInput={this.updateImgPreview.bind(this)} type="text" placeholder="Preview Image (paste url or choose below)" name="image" required="true"></input>
						<div className="img-div">
							{imgs}
						</div>
						<textarea className="pure-input-1" type="text" placeholder="Custom message (optional)" name="message" maxLength="250" rows="3"></textarea>
						<textarea className="pure-input-1" type="text" placeholder="Page description" name="description" maxLength="150" rows="5" required="true"></textarea>
					</fieldset>
					<button className="pure-button pure-input-1 pure-button-primary" type="submit">Make it!</button>
				</form>
			);	
		}
		return el;
	}

}

export default SendForm;