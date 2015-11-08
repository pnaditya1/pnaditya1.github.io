
function renderPage(topic){
	var finalHtml = "Page not found";
	switch(topic){
		case "home":
			finalHtml = getHomePage();
		break;

		case "about":
			finalHtml = getAboutPage();
		break;

		case "events":
			finalHtml = getEvents();
		break;

		case "contact":
			finalHtml = getContactInfo();
		break;
	}
	return finalHtml;
}

function getHomePage(){
	var html = "Home, Coming soon!";
	return html;
}

function getAboutPage(){
	var html = "About, Coming soon!";
	return html;
}

function getEvents(){
	var html = "Events, Coming soon!"
	return html;
}

function getContactInfo(){
	var html = "Contact, Coming soon!";
	return html;
}

$(document).ready(function() {
	$('.item_selection').click(function(event){
		event.preventDefault();
		var eventName = $(this).attr('name');
		var html = renderPage(eventName);
		$('#page_body').html(html);
	});	
});
