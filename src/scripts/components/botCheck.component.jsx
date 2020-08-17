import React, {Component} from 'react';

class BotCheck extends Component{

	constructor(){
		super();
		this.val = 0;
	}

	updateVal(){
		this.val+=1000
		this.forceUpdate();
	}

	render(){
		if(this.val < 3000) setTimeout(this.updateVal.bind(this),1000);
		return(
			<input className="hidden" name="botcheck" value={this.val} />
		)
	}

}

export default BotCheck;