class FormService {

	static getJSON(el){
		var inputs = el.querySelectorAll('[name]');
		console.log(inputs);
		var data = {};
		for(var i = 0;i < inputs.length ;i++){
			data[inputs[i].getAttribute('name')] = inputs[i].value;
		};
		return data;
	};

}

export default FormService;