package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Booking;
import th.ac.ku.kps.eng.cpe.se.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	private BookingRepository bookingrep;
	
	public List<Booking> getAll(){
		return (List<Booking>) bookingrep.findAll();
	}	
	public List<Booking> getNotChkOut(){
		return (List<Booking>) bookingrep.findByNotChkOut();
	}
	public List<Booking> getNotChkIn(){
		return (List<Booking>) bookingrep.findByNotChkIn();
	}
	public List<Booking> getChkOut(){
		return (List<Booking>) bookingrep.findByChkOut();
	}
	public Booking getByID(int id){
		return bookingrep.findById(id).get();
	}
	public List<Booking> getByGuestName(String name){
		return (List<Booking>) bookingrep.findByGuestName(name);
	}
	public List<Booking> getByGuestStatus(String status){
		return (List<Booking>) bookingrep.findByGuestStatus(status);
	}
	public List<Booking> getByGuestRoom(int rid){
		return (List<Booking>) bookingrep.findByGuestRoom(rid);
	}
	public void saveBooking(Booking b) {
		bookingrep.save(b);
	}
}
