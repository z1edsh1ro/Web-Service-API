package th.ac.ku.kps.eng.cpe.soa.response;

import th.ac.ku.kps.eng.cpe.se.model.Guest;

public class LoginResponse {
	private String status;
	private Guest guest;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Guest getGuest() {
		return guest;
	}
	public void setGuest(Guest guest) {
		this.guest = guest;
	}
}
