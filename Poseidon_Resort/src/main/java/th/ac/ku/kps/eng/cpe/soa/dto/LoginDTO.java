package th.ac.ku.kps.eng.cpe.soa.dto;

public class LoginDTO {
	private String username;
	private String password;

	public LoginDTO() {
	}
	 
	public LoginDTO(String idUser, String password) {
	this.setUsername(idUser);
	this.password = password;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}



}
