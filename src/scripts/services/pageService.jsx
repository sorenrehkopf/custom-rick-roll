var apiUrls = {
	'localhost':'http://localhost:3000',
	'www.secretrickroll.com':'https://www.theraleighregister.com'
};

var apiUrl = apiUrls[window.location.hostname];

class PageService {

	static createPage(content){
		return new Promise(function(resolve,reject){
			var http = new XMLHttpRequest();
			http.open(
				'POST',
				apiUrl+'/api/pages/create'
			)
			http.setRequestHeader("Content-Type","application/json");
			http.send(JSON.stringify(content));
			http.onreadystatechange = function(){
				if(http.readyState === 4){
					if(http.status===200){;
						resolve(http.response);
					}
					else reject(http.status);
				}
			};
		})
		
	}

}

export default PageService;