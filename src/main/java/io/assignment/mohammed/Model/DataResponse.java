
package io.assignment.mohammed.Model;


import java.util.Map;


import javax.persistence.Id;



public class DataResponse {
@Id	
 private String disclaimer;
 private String license;
 private float timestamp;
 private String base;
 

 private Map<String, Float> rates;



 // Getter Methods 
 
 
 

 public String getDisclaimer() {
  return disclaimer;
 }

 public Map<String, Float> getRates() {
	return rates;
}



public String getLicense() {
  return license;
 }

 public float getTimestamp() {
  return timestamp;
 }

 public String getBase() {
  return base;
 }


 // Setter Methods 
 
 public void setRates(Map<String, Float> rates) {
		this.rates = rates;
	}

 public void setDisclaimer(String disclaimer) {
  this.disclaimer = disclaimer;
 }

 public void setLicense(String license) {
  this.license = license;
 }

 public void setTimestamp(float timestamp) {
  this.timestamp = timestamp;
 }

 public void setBase(String base) {
  this.base = base;
 }

@Override
public String toString() {
	return "DataResponse [disclaimer=" + disclaimer + ", license=" + license + ", timestamp=" + timestamp + ", base="
			+ base + ", rates=" + rates + "]";
}

 
 

}