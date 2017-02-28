import React, {Component} from 'react';

import SendForm from './sendForm.component.jsx';

class Main extends Component {

	constructor(){
		super();
		this.showForm = true;
	}

	responseHandler(data){
		console.log(data);
		this.responseUrl = data;
		this.showForm = false;
		this.forceUpdate();
	}

	render(){
		return (
				<div className="app-container">
					<h1>Custom rick roll generator</h1>
					<p>Use the form below to get a custom link to a fake webpage that will actually just auto play Rick Astley&#39;s iconic hit <em>Never Gonna Give You Up</em> for anyone who visits.</p>
					<SendForm responseHandler={this.responseHandler.bind(this)} showMe={this.showForm}/>
					<a href={this.responseUrl} target="_blank"><h1>{this.responseUrl}</h1></a>
				</div>
			)
	}
}

export default Main;