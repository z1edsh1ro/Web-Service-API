package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Guest;
import th.ac.ku.kps.eng.cpe.se.repository.GuestRepository;

@Service
public class GuestService {
	@Autowired
	GuestRepository guestRepo;
	
	public List<Guest> getAll(){
		return (List<Guest>) guestRepo.findAll();
	}
	public Guest getGuestById(int guestID) {
		return guestRepo.findById(guestID).get();
	}
	public List<Guest> getGuestByName(String name){
		return (List<Guest>) guestRepo.getGuestByName(name);
	}
	public void createGuest(Guest guest) {
		guestRepo.save(guest);
	}
	public void updateGuest(Guest guest) {
		guestRepo.save(guest);
	}
}
