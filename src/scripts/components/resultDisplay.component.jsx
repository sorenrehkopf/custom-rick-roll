import React, {Component} from 'react';

class ResultDisplay extends Component{

	render(){
		var el = null;
		if(this.props.responseUrl){
			el = (
					<div className="result">
						<h2>Here&#39;s your link!</h2>
						<a href={this.props.responseUrl} target="_blank"><h3>{this.props.responseUrl}</h3></a>
						<button className="pure-button-primary pure-button" onClick={this.reload}>Make another!</button>
					</div>
				);
		};
		return el;
	}
}

export default ResultDisplay;