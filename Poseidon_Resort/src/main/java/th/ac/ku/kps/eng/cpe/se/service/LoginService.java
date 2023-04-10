package th.ac.ku.kps.eng.cpe.se.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Guest;
import th.ac.ku.kps.eng.cpe.se.repository.GuestRepository;
import th.ac.ku.kps.eng.cpe.soa.dto.LoginDTO;

@Service
public class LoginService {
	@Autowired
	private GuestRepository guestrepo;
	public Guest validGuest(LoginDTO login) {
		Guest g = guestrepo.getGuestByUsername(login.getUsername());
		if(g!=null) {
			String passwordDTO = login.getPassword();
			String passwordDB = g.getPassword();
			Boolean isPwdRight = passwordDTO.equals(passwordDB);
			if (isPwdRight) {
				Guest guest = guestrepo.getGuestByUsernameAndPassword(login.getUsername(), login.getPassword());
				if(guest!=null) {
					return guest;
				}
				else {
	                return null;
	            }
			}
			else {
	           return null;
	           }	
		}
	   else {
	           return null;
	       }
	}	
}
