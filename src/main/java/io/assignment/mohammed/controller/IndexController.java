package io.assignment.mohammed.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import io.assignment.mohammed.service.exchangeService;



@RestController
public class IndexController {


	@Autowired
	private exchangeService exchangeService;
	
	
	/**
	 * 
	 * @param fromCurrency
	 * @param ToCurrency
	 * @param Amount
	 * @return result
	 * 
	 * 
	 * This method is based on the currency value when converted
	 */
	
	
	@RequestMapping(method = RequestMethod.POST,value ="exchange/API")
	@Cacheable("Cashe")
	public String  getRates(@RequestParam("from") String fromCurrency ,@RequestParam("to") String ToCurrency, @RequestParam("amount") float Amount)
	{
		
		double  result =  exchangeService.calculateCurrencyDifference(fromCurrency, ToCurrency, Amount);	
		
		 return String.valueOf(result);
		 
	}
	
}
