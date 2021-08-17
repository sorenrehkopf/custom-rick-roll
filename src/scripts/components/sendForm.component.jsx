import React, { Component } from 'react';

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
				'opt1.jpg',
				'opt2.jpg',
				'opt3.jpg',
				'opt4.jpg',
				'opt5.jpg'
			]
		}
	}

	submitForm(e){
		e.preventDefault();
		var data = FormService.getJSON(e.target);
		if(FormService.botCheck(e.target)){
			PageService.createPage(data)
			.then(this.props.responseHandler);
		}else{
			this.props.responseHandler("http://localhost:3000/index.html")
		}
	}

	componentDidUpdate(){
		imgInput = document.getElementById('img-input');
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
				imgs:imgs,
				selectedImg:0
			});
		},1000);
	}

	chooseImg(i){
		var url = i?window.location.origin+"/assets/"+this.state.imgs[i]:this.state.imgs[i];
		imgInput.value = url;
		this.setState({
			selectedImg:i
		});
	}

	render(){
		var el = null;
		if(this.props.showMe){
			var imgs = this.state.imgs.map((img,i)=>{
				var message = img?'':<span>Paste the url to your image to see the preview here!</span>;
				var img = i?window.location.origin+"/assets/"+img:img;
				var style = {
					backgroundImage:"url("+img+")"
				}
				return <div className={"img-div__img "+ (this.state.selectedImg === i?"selected":"")} style={style} key={i} onClick={this.chooseImg.bind(this,i)}>
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
						<textarea className="pure-input-1" type="text" placeholder="Page description" name="description" maxLength="150" rows="5" required="true"></textarea>
						<textarea className="pure-input-1" type="text" placeholder="Custom message (optional)" name="message" maxLength="250" rows="3"></textarea>
						<input className="pure-input-1" type="text" placeholder="File Name (optional) (ie. site.com/file-name.html) (defaults to page title)" name="pagename" maxLength="50"></input>
						<select className="pure-input-1 select" name="source" defaultValue="https://www.thisworldthesedays.com">
							<option value="blog">From: A trendy current events and culture blog.</option>
							<option value="paper">From: A lesser know yet respected regional paper.</option>
						</select>
					</fieldset>
					<button className="pure-button pure-input-1 pure-button-primary" type="submit">Make it!</button>
				</form>
			);
		}
		return el;
	}

}

export default SendForm;
