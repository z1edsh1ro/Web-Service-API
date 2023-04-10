package th.ac.ku.kps.eng.cpe.se.model;
// Generated Apr 6, 2023, 1:55:37 PM by Hibernate Tools 5.6.3.Final

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Supply generated by hbm2java
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Supply implements java.io.Serializable {

	private Integer supId;
	private String name;
	private int quantity;
	private double price;
	@JsonIgnore private Set supplyrecords = new HashSet(0);

	public Supply() {
	}

	public Supply(String name, int quantity, double price) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}

	public Supply(String name, int quantity, double price, Set supplyrecords) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.supplyrecords = supplyrecords;
	}

	public Integer getSupId() {
		return this.supId;
	}

	public void setSupId(Integer supId) {
		this.supId = supId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return this.price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Set getSupplyrecords() {
		return this.supplyrecords;
	}

	public void setSupplyrecords(Set supplyrecords) {
		this.supplyrecords = supplyrecords;
	}

}
