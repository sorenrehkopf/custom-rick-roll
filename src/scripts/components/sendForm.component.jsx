import React, {Component} from 'react';

import PageService from '../services/pageService.jsx';

class SendForm extends Component {

	submitForm(){
		PageService.createPage({thing:'what'})
		.then(data=>{
			console.log(data);
		}).catch(err=>{
			console.log(err);
		})
	}

	render(){
		return(
			<h1 onClick={this.submitForm}>Send form!</h1>
			);
	}

}

export default SendForm;