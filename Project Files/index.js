function getDetailuser1() {
        initiateAjaxRequest('http://demo3262005.mockable.io/user1' , 'GET')
}

function getDetailuser2() {
        initiateAjaxRequest('http://demo3262005.mockable.io/user2' , 'GET')
}

function getDetailuser3() {
        initiateAjaxRequest('http://demo3262005.mockable.io/user3' , 'GET')
}

function getDetailuser4() {
        initiateAjaxRequest('http://demo3262005.mockable.io/user4' , 'GET')
}


function initiateAjaxRequest(url, method){
	$.ajax({
		url: url,
		method: method,
                datatype: 'html',
        success: function(result){
        	document.write(result);
        },
        error: function(err, msg){
        	alert(msg);
        }
	})
}