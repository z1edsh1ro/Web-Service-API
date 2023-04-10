package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Guest;
import th.ac.ku.kps.eng.cpe.se.service.GuestService;
import th.ac.ku.kps.eng.cpe.soa.response.RegisterResponse;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class GuestController {
	@Autowired
	GuestService guestservice;
	
	@GetMapping("/guests")
	public List<Guest> getAllGuests(){
		return (List<Guest>) guestservice.getAll();
	}
	@GetMapping("/guests/{id}")
	public Guest getGuestByName(@PathVariable("id")int id){
		return guestservice.getGuestById(id);
	}
	@GetMapping("/guests/{name}")
	public List<Guest> getGuestByName(@PathVariable("name")String name){
		return (List<Guest>) guestservice.getGuestByName(name);
	}
	@PostMapping("/guests")
	public RegisterResponse createGuest(@RequestBody Guest guest) {
		RegisterResponse resp = new RegisterResponse();
		resp.setStatus("200");
		guestservice.createGuest(new Guest(guest.getName(),guest.getSurname(),guest.getUsername(),guest.getPassword(),guest.getPhone()));
		return resp;
	}
	@PutMapping("/guests/update/{id}")
    public void updateRoomStatus(@PathVariable("id") int id ,@RequestBody Guest guest){
		Guest g = guestservice.getGuestById(id);
		g.setName(guest.getName());
		g.setSurname(guest.getSurname());
		g.setUsername(guest.getUsername());
		g.setPassword(guest.getPassword());
		
		guestservice.updateGuest(g);
    }
}
