package io.assignment.mohammed.service;



import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import io.assignment.mohammed.Model.DataResponse;

@Service
public class exchangeService {

	// API_KEY = URL path get All rates
	private static final String API_KEY = "https://openexchangerates.org/api/latest.json?app_id=23a2ec66b28243858f4bd1a181604e69";

	
	private RestTemplate restTemplate = new RestTemplate();

	DataResponse data = restTemplate.getForObject(API_KEY, DataResponse.class);

	
	private float reateToCurrency;
	private float reateFromCurrency;

	/**
	 * 
	 * @param fromCurrency
	 * @param ToCurrency
	 * @param Amount
	 * @return Calculate Currency Difference
	 */
	
	@Cacheable("getCurrencey")
	public double calculateCurrencyDifference(String fromCurrency, String ToCurrency, float Amount) {
		reateToCurrency = data.getRates().get(ToCurrency);
		reateFromCurrency = data.getRates().get(fromCurrency);

		switch (fromCurrency) {
		case "USD":
			return Amount * reateToCurrency;
		default:
			return Amount / reateFromCurrency;
		}

	}

}
