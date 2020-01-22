
/**
 *  stop submit the form, we will post it manually.
 * @returns
 */

$(document).ready(function() {

	$("#exchange-form").submit(function(event) {

		event.preventDefault();
		fire_ajax_submit();

	});

});


/**
 * 
 * @returns
 */

function fire_ajax_submit() {

	//connect  javaScript  with  HTML  by id 
	var selectFrom = document.getElementById("from-currency");
	var selectTo =  document.getElementById("to-currency");
	//get key and value from  select
	var chooesFrom = selectFrom.options[selectFrom.selectedIndex].value;
	var chooesFromText = selectFrom.options[selectFrom.selectedIndex].text;
	var chooesTo = selectTo.options[selectTo.selectedIndex].value;
	var chooesToText = selectTo.options[selectTo.selectedIndex].text;
	//get value Amount
	var Amount =  document.getElementById("amount").value;
	
	//validate from input and choose
	if(chooesFromText === 'Choose From Currency')
		{
		showMessageError(" Please Choose From Currency ");
		}
	else if (chooesToText === 'Choose To Currency')
		{
		showMessageError(" Please Choose To Currency ");
		}
	else if(Amount == "" )
		{
		showMessageError(" Please Enter Amount ");
		}
	else if(Amount === '0')
		{
		showMessageError(" Please Enter Amount Greater Zero ");
		}
	else
		{
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : "http://localhost:7001/exchange/API/?from="+chooesFrom+"&to="+chooesTo+"&amount="+Amount,
				dataType : 'json',
				cache : false,
				timeout : 600000,
				success : function(data) {
					//return only 3 number  after Point
					var result =data.toFixed(3);
					// disable button
					document.getElementById("bt-exchange").disabled = true;
					//show box message 
					document.getElementById("box").style.display = "block";
					//set data in box message
					document.getElementById("txt-from").textContent =` From Currency : ${chooesFromText}`;
					document.getElementById("txt-to").textContent =` TO Currency : ${chooesToText}`;
					document.getElementById("txt-amount").textContent =` Amount  : ${Amount}`;
					document.getElementById("txt-resalt").textContent =` result =  ${result}`;
					//change Image 
					document.getElementById("icon-msg").classList.remove('ion-close-circled');
					document.getElementById("icon-msg").classList.add('ion-cash');
					//set color green
					document.getElementById('icon-msg').style.color = 'green';
				},
				error : function(e) {
					//fail connection in API
					showMessageError(" sorry try again");

				}
			});
			}



	
			
				
			
}

/**
 * show box message
 * set data in box message
 * change Image
 * set color red
 * 
 * @param msg
 * @returns
 *  
 */
function showMessageError(msg)
{	
	document.getElementById("box").style.display = "block";
	document.getElementById("txt-from").textContent = msg;
	document.getElementById("icon-msg").classList.remove('ion-cash');
	document.getElementById("icon-msg").classList.add('ion-close-circled');
	document.getElementById('icon-msg').style.color = 'red';
}

/**
 *  close window for result
 *  enable button
 * @returns
 */

function closeWindow()
{
	document.getElementById("box").style.display = "none";
	document.getElementById("bt-exchange").disabled = false;
	
}

