import React, {Component} from 'react';

import SendForm from './sendForm.component.jsx';
import ResultDisplay from './resultDisplay.component.jsx';

import FormService from '../services/formService.jsx';

class Main extends Component {

	constructor(){
		super();
		this.state = {
			showForm:true,
			responseUrl:false
		};
	}

	responseHandler(data){
		this.setState({
			responseUrl:data,
			showForm:false
		})
	}

	reload(){
		this.setState({
			responseUrl:false,
			showForm:true
		});
	}

	render(){
		return (
				<div className="app-container">
					<div className="app-container__instructions">
						<h1>Custom rick roll generator</h1>
						<p>When you share a link on almost all social media and messaging platforms, there is a preview displayed to show people what the link is about.</p>
						<span>ex.</span><img className="app-container__instructions--example" src="/assets/fb-example.png" />
						<p><strong>Now you can use this fact to mislead and irritate people!</strong></p>
						<p>Use the form  to get a link to a custom webpage that will preview the info you enter, but actually just autoplay Rick Astley&#39;s iconic hit <em>Never Gonna Give You Up</em> as soon as the page loads.</p>
						<p>You can even add a brief message to display to your victim while they are reminded that they "wouldn&#39;t get this from any other guy."</p>
						<p><strong>Enjoy!</strong></p>
					</div>
					<SendForm responseHandler={this.responseHandler.bind(this)} showMe={this.state.showForm}/>
					<ResultDisplay responseUrl={this.state.responseUrl} reload={this.reload.bind(this)}/>
				</div>
			)
	}
}

export default Main;
