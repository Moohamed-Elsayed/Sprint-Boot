
/**
 * 
 * @param selectId : reference id  select ID  dropdown
 * @param selectedText  :default text in header dropdown list 
 * 
 */

function dropdownList(selectId ,selectedText)
{
	
	let dropdown = $(selectId);
	dropdown.empty();
	dropdown.append(`<option selected="true" disabled>Choose ${selectedText} Currency</option>`);
	dropdown.prop('selectedIndex', 0);
	const url = 'https://openexchangerates.org/api/currencies.json';

	//Populate dropdown  with list of provinces
	$.getJSON(url, function (data) {
	$.each(data, function (key,entry ) {
	 dropdown.append($('<option></option>').attr('value', key).text(entry));
	})
	});
	
}


dropdownList("#from-currency","From");
dropdownList("#to-currency","To");















