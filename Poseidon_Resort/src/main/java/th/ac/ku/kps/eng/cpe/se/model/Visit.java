package th.ac.ku.kps.eng.cpe.se.model;
// Generated Apr 6, 2023, 1:55:37 PM by Hibernate Tools 5.6.3.Final

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Visit generated by hbm2java
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Visit implements java.io.Serializable {

	private Integer vid;
	private Guest guest;
	private Recreation recreation;
	private Date timein;
	private Date timeout;
	private String comment;

	public Visit() {
	}

	public Visit(Guest guest, Recreation recreation, Date timein, Date timeout, String comment) {
		this.guest = guest;
		this.recreation = recreation;
		this.timein = timein;
		this.timeout = timeout;
		this.comment = comment;
	}

	public Integer getVid() {
		return this.vid;
	}

	public void setVid(Integer vid) {
		this.vid = vid;
	}

	public Guest getGuest() {
		return this.guest;
	}

	public void setGuest(Guest guest) {
		this.guest = guest;
	}

	public Recreation getRecreation() {
		return this.recreation;
	}

	public void setRecreation(Recreation recreation) {
		this.recreation = recreation;
	}

	public Date getTimein() {
		return this.timein;
	}

	public void setTimein(Date timein) {
		this.timein = timein;
	}

	public Date getTimeout() {
		return this.timeout;
	}

	public void setTimeout(Date timeout) {
		this.timeout = timeout;
	}

	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}
