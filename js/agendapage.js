var CLIENT_ID = "767701219000-skc85592k6fbterbqcfa63t4bkpu6a4g.apps.googleusercontent.com"; //uniek ID
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
var allEvents = new Array();
var allEventsLength = allEvents.length; //lengte van de activiteiten op één dag

// var addedToDocument = false;
// var wrapper = document.createElement("div");
// wrapper.id = "slideInner";
// var nodesToWrap = document.querySelectorAll(".datum__dag");
// var datumdag = document.getElementsByClassName("datum__dag");
// console.log(nodesToWrap)
//
// var authorizeBut = document.getElementById('authorize__button');
// authorizeBut.addEventListener("click", function() {
// for (i = 0; i < 1; i++) {
// 		var node = nodesToWrap[i];
// 		if (! addedToDocument) {
// 				node.parentNode.insertBefore(wrapper, node);
// 				addedToDocument = true;
// 		}
// 		node.parentNode.removeChild(node);
// 		wrapper.appendChild(node);
// }
// });

/* Check if current user has authorized this application */
function checkAuth() {
    gapi.auth.authorize(
        {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true //toestaan, false = blokkeren
        }, handleAuthResult);
}

//Handle response from authorization server. Haalt button weg als gebruiker al toestemming heeft
/** @param {Object} authResult Authorization result */

function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize');
    if (authResult && !authResult.error) {
			authorizeDiv.style.display = 'none';
			loadCalendarApi();
    } else {
      authorizeDiv.style.display = 'inline';
    }
}

// Initiate auth flow in response to user clicking authorize button
/** @param {Event} event Button click event */

var authorizeBut = document.getElementById('authorize__button');
authorizeBut.addEventListener("click", function handleAuthClick(event) {
	var agenda = document.querySelector('.calendar');
	agenda.style.display = "block";

    gapi.auth.authorize(
        {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
        handleAuthResult);
    return false;



});

// Load Google Calendar client library. List upcoming events once client library is loaded
function loadCalendarApi() {
    gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

/* Print the summary and start datetime/date of the next ten events in the authorized user's calendar.
If no events are found an appropriate message is printed */
function listUpcomingEvents() {
	 var request = gapi.client.calendar.events.list({
		 'calendarId': 'primary',
		 'timeMin': (new Date()).toISOString(),
		 'showDeleted': false,
		 'singleEvents': true,
		 'maxResults': 10,
		 'orderBy': 'startTime'
	 });

	 request.execute(function(resp) {
		 var events = resp.items;

		 if (events.length > 0) {
			 for (i = 0; i < events.length; i++) {
				 	var when = events[i].start.dateTime;
				 	var monthNames = ["Jan", "Feb", "Mar","Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

					var date = new Date(when);
					var day = date.getDate();
					var monthIndex = date.getMonth();
					var year = date.getFullYear();
					var hours = date.getHours();
					var minutes = date.getMinutes();

					if (day == '1'){ day = ' 1';}
					if (day == '2'){ day = ' 2';}
					if (day == '3'){ day = ' 3';}
					if (day == '4'){ day = ' 4';}
					if (day == '5'){ day = ' 5';}
					if (day == '6'){ day = ' 6';}
					if (day == '7'){ day = ' 7';}
					if (day == '8'){ day = ' 8';}
					if (day == '9'){ day = ' 9';}
					if (minutes == '0'){ minutes = '00';}
					if (hours < 10){ hours = '0' + hours;}

				 	appendPre(day + ' ' + monthNames[monthIndex] + ' ' + events[i].summary + hours + ':' + minutes);
			 }
		 } else {
			 appendPre('No upcoming events found.');
		 }

	 });
 }

// Append a pre element to the body containing the given message as its text node
/** @param {string} message Text to be placed in pre element */

 function appendPre(message) {
	 var datumdag = document.createElement("p");
	 datumdag.setAttribute("class", "agenda datum__dag");
	 var datumdagtext = document.createTextNode(message.substr(0, 2));

	 var datummaand = document.createElement("p");
	 datummaand.setAttribute("class", "agenda datum__maand");
	 var datummaandtext = document.createTextNode(message.substr(3, 4));

	 var tijd = document.createElement("p");
	 tijd.setAttribute("class", "agenda tijd");
	 var tijdtext = document.createTextNode(message.substr(message.length - 5));

	 var activiteit = document.createElement("p");
	 activiteit.setAttribute("class", "agenda activiteit");
	 var activiteittext = document.createTextNode(message.substr(6, message.length -11));

	 var kleur = document.createElement("a");
	 kleur.setAttribute("class", "agenda selectkleur");
	 kleur.setAttribute("href", "./agenda-item.html");
	 var kleurtext = document.createTextNode(">");


	 datumdag.appendChild(datumdagtext);
	 datummaand.appendChild(datummaandtext);
	 activiteit.appendChild(activiteittext)
	 tijd.appendChild(tijdtext);
	 kleur.appendChild(kleurtext);

	 document.querySelector('#agenda').appendChild(datumdag);
	 document.querySelector('#agenda').appendChild(datummaand);
	 document.querySelector('#agenda').appendChild(activiteit);
	 document.querySelector('#agenda').appendChild(tijd);
	 document.querySelector('#agenda').appendChild(kleur);
 }
