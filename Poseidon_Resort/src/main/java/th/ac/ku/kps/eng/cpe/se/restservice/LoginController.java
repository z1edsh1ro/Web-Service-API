package th.ac.ku.kps.eng.cpe.se.restservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Guest;
import th.ac.ku.kps.eng.cpe.se.service.LoginService;
import th.ac.ku.kps.eng.cpe.soa.dto.GuestLogin;
import th.ac.ku.kps.eng.cpe.soa.dto.LoginDTO;
import th.ac.ku.kps.eng.cpe.soa.response.LoginResponse;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class LoginController {
	@Autowired
	private LoginService loginservice;
	
	@PostMapping("/login")
	public LoginResponse authentication(@RequestBody LoginDTO login) {
		Guest guest = loginservice.validGuest(login);
		LoginResponse resp = new LoginResponse();
		if (guest == null) {
			resp.setMsg("Invalid Username or password");
			resp.setStatus("401");
			return resp;
		}
		resp.setStatus("200");
		resp.setGuest(guest);
		GuestLogin.guestLogin = guest;
		resp.setMsg("OK");
		return resp;
	}
}
