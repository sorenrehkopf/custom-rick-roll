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
				<form onSubmit={this.submitForm}>
					<label>Title for the page!</label>
					<input type="text" placeholder="Page Title" name="title" max="50"></input>
					<label>Description</label>
					<textarea type="text" placeholder="Page description" name="description" max="150" rows="5" cols="50"></textarea>
					<button type="submit">Make it!</button>
				</form>
			);
	}

}

export default SendForm;