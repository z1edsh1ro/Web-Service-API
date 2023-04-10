package th.ac.ku.kps.eng.cpe.se.model;
// Generated Apr 6, 2023, 1:55:37 PM by Hibernate Tools 5.6.3.Final

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Position generated by hbm2java
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Position implements java.io.Serializable {

	private Integer pid;
	private String name;
	@JsonIgnore private Set staffs = new HashSet(0);

	public Position() {
	}

	public Position(String name) {
		this.name = name;
	}

	public Position(String name, Set staffs) {
		this.name = name;
		this.staffs = staffs;
	}

	public Integer getPid() {
		return this.pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set getStaffs() {
		return this.staffs;
	}

	public void setStaffs(Set staffs) {
		this.staffs = staffs;
	}

}