import React, {Component} from 'react';

class ResultDisplay extends Component{

	preventDefault(e){
		e.preventDefault();
	}

	render(){
		var el = null;
		if(this.props.responseUrl){
			el = (
					<div className="result">
						<div>
							<h2>Here&#39;s your link!</h2>
							<input className="result__input pure-input-1" type="text" value={this.props.responseUrl} onInput={this.preventDefault}></input>
							<a href={this.props.responseUrl} target="_blank" className="result__show"><h4>Visit it here!</h4></a>
							<p>To manage hosting costs, your page will be deleted in 72 hours. Use it before then!</p>
							<button className="pure-button-primary pure-button" onClick={this.props.reload}>Make another!</button>
						</div>
					</div>
				);
		};
		return el;
	}
}

export default ResultDisplay;