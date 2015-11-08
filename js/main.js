
function renderPage(topic){
	var finalHtml = "Page not found";
	switch(topic){
		case "home":
			finalHtml = getHomePage();
		break;

		case "donors":
			finalHtml = getDonorsPage();
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
	var html = "<p> Seethireddipalli is small village in Amadagur Mandal, Anantapur district, Andhra Pradesh which has around fifty families. \
				Our village is quite backward and we did not even have a temple in this village. </p> \
				<p> Panchangam family who have been residing there since 200 years, way back in 1950 they used to carry Sita Rama photo on Saturdays and do Bhajans, \
				those valuable memories and strong resolve have sown the seeds to construct <b>Sree Seetha Rama Anjaneya Temple</b> along with Siva,\
				Ganapathi, Parvathi, Navagrahas and Adi Shankaracharya deities. </p>";
	return html;
}

function getDonorsPage(){
	var html = "Donors, coming soon!";
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
	$('#page_body').html(getHomePage());

	$('.item_selection').click(function(event){
		event.preventDefault();
		var eventName = $(this).attr('name');
		var html = renderPage(eventName);
		$('#page_body').html(html);
	});	
});
