import React, {Component} from 'react';

import SendForm from './sendForm.component.jsx';

class Main extends Component {

	render(){
		return (
				<div className="app-container">
					<h1>Custom rick roll generator</h1>
					<p>Use the form below to get a custom link to a fake webpage that will actually just auto play Rick Astley&#39;s iconic hit <em>Never Gonna Give You Up</em> for anyone who visits.</p>
					<SendForm/>
				</div>
			)
	}
}

export default Main;