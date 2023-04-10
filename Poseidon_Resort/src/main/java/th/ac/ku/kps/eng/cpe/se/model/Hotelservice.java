package th.ac.ku.kps.eng.cpe.se.model;
// Generated Apr 6, 2023, 1:55:37 PM by Hibernate Tools 5.6.3.Final

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Hotelservice generated by hbm2java
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Hotelservice implements java.io.Serializable {

	private Integer sevId;
	private String name;
	private double price;
	@JsonIgnore private Set servicerecords = new HashSet(0);

	public Hotelservice() {
	}

	public Hotelservice(String name, double price) {
		this.name = name;
		this.price = price;
	}

	public Hotelservice(String name, double price, Set servicerecords) {
		this.name = name;
		this.price = price;
		this.servicerecords = servicerecords;
	}

	public Integer getSevId() {
		return this.sevId;
	}

	public void setSevId(Integer sevId) {
		this.sevId = sevId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return this.price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Set getServicerecords() {
		return this.servicerecords;
	}

	public void setServicerecords(Set servicerecords) {
		this.servicerecords = servicerecords;
	}

}
