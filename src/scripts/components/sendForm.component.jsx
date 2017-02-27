import React, {Component} from 'react';

import PageService from '../services/pageService.jsx';
import FormService from '../services/formService.jsx'

class SendForm extends Component {

	submitForm(e){
		e.preventDefault();
		var data = FormService.getJSON(e.target);
		console.log(data);
		PageService.createPage(data)
		.then(data=>{
			console.log(data);
		}).catch(err=>{
			console.log(err);
		})
	}

	render(){
		return(
				<form onSubmit={this.submitForm} className="form pure-form">
					<fieldset className="pure-group">
						<input className="pure-input-1" type="text" placeholder="Page Title" name="title" max="50"></input>
						<input className="pure-input-1" type="text" placeholder="Preview Image" name="image" max="500"></input>
						<textarea className="pure-input-1" type="text" placeholder="Custom message (optional)" name="message" max="250" rows="3"></textarea>
						<textarea className="pure-input-1" type="text" placeholder="Page description" name="description" max="150" rows="5"></textarea>
					</fieldset>
					<button className="pure-button pure-input-1 pure-button-primary" type="submit">Make it!</button>
				</form>
			);
	}

}

export default SendForm;