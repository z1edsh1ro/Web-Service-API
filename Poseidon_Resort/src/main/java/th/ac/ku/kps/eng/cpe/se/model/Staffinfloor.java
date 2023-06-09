package th.ac.ku.kps.eng.cpe.se.model;
// Generated Apr 6, 2023, 1:55:37 PM by Hibernate Tools 5.6.3.Final

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Staffinfloor generated by hbm2java
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Staffinfloor implements java.io.Serializable {

	private Integer sifId;
	private Floor floor;
	private Staff staff;

	public Staffinfloor() {
	}

	public Staffinfloor(Floor floor, Staff staff) {
		this.floor = floor;
		this.staff = staff;
	}

	public Integer getSifId() {
		return this.sifId;
	}

	public void setSifId(Integer sifId) {
		this.sifId = sifId;
	}

	public Floor getFloor() {
		return this.floor;
	}

	public void setFloor(Floor floor) {
		this.floor = floor;
	}

	public Staff getStaff() {
		return this.staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

}
