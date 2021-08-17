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
							<input className="result__input pure-input-1" type="text" value={this.props.responseUrl} onInput={this.preventDefault} onChange={this.preventDefault}></input>
							<a href={this.props.responseUrl} target="_blank" className="result__show"><h4>Visit it here!</h4></a>
							<p>To manage hosting costs, your page will be deleted in 72 hours. Use it before then!</p>
							<a href="https://paypal.me/Soren589" className="result__support-cta" target="_blank">
								<button className="pure-button-primary pure-button">
									<img src="https://www.paypalobjects.com/webstatic/paypalme/images/social/pplogo384.png" height="25"/>
									Say Thanks And Support This Project!
								</button>
							</a>
							<button className="button-secondary pure-button" onClick={this.props.reload}>Make another!</button>
						</div>
					</div>
				);
		};
		return el;
	}
}

export default ResultDisplay;
