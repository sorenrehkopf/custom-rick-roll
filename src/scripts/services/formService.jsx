var sourceOptionsMap = {
	blog: ['https://www.thisworldthesedays.com', 'https://www.tomorrowtides.com'],
	paper: ['https://www.theraleighregister.com', 'https://www.sanfransentinel.com']
}

class FormService {

	static getJSON(el){
		var inputs = el.querySelectorAll('[name]');
		var data = {};

		for(var i = 0;i < inputs.length ;i++) {
			if (inputs[i].getAttribute('name') === 'source') {
				data[inputs[i].getAttribute('name')] = sourceOptionsMap[inputs[i].value][Math.round(Math.random())];
			} else {
				data[inputs[i].getAttribute('name')] = inputs[i].value;
			}
		};
		return data;
	};

	static botCheck(el){
		var input = el.querySelector('[name="botcheck"]');
		console.log(input);
		return input.value > 2999;
	};

}

export default FormService;