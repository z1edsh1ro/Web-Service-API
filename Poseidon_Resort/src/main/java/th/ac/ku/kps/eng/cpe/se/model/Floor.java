package th.ac.ku.kps.eng.cpe.se.model;
// Generated Apr 6, 2023, 1:55:37 PM by Hibernate Tools 5.6.3.Final

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Floor generated by hbm2java
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Floor implements java.io.Serializable {

	private Integer fid;
	private String name;
	@JsonIgnore private Set staffinfloors = new HashSet(0);
	@JsonIgnore private Set rooms = new HashSet(0);

	public Floor() {
	}

	public Floor(String name) {
		this.name = name;
	}

	public Floor(String name, Set staffinfloors, Set rooms) {
		this.name = name;
		this.staffinfloors = staffinfloors;
		this.rooms = rooms;
	}

	public Integer getFid() {
		return this.fid;
	}

	public void setFid(Integer fid) {
		this.fid = fid;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set getStaffinfloors() {
		return this.staffinfloors;
	}

	public void setStaffinfloors(Set staffinfloors) {
		this.staffinfloors = staffinfloors;
	}

	public Set getRooms() {
		return this.rooms;
	}

	public void setRooms(Set rooms) {
		this.rooms = rooms;
	}

}
