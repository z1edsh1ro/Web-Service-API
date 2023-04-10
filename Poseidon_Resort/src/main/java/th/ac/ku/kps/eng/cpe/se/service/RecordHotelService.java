package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Booking;
import th.ac.ku.kps.eng.cpe.se.model.Servicerecord;
import th.ac.ku.kps.eng.cpe.se.repository.RecordHotelServiceRepository;

@Service
public class RecordHotelService {
	@Autowired
	private RecordHotelServiceRepository servRecordRepo;
	
	public List<Servicerecord> getAll(){
		return (List<Servicerecord>) servRecordRepo.findAll();
	}
	
	public List<Servicerecord> getByBooking(int id){
		return (List<Servicerecord>) servRecordRepo.findByBooking(id);
	}
	
	public Servicerecord getById(int id){
		return servRecordRepo.findById(id).get();
	}
	
	public Servicerecord createRecordHotelService(Servicerecord sc){
		return servRecordRepo.save(sc);
	}
	
    public Servicerecord updateRecordHotelService(int id, Servicerecord sc) {
    	Servicerecord existingUser = servRecordRepo.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setBooking(sc.getBooking());
            existingUser.setHotelservice(sc.getHotelservice());
            existingUser.setStaff(sc.getStaff());
            existingUser.setTime(sc.getTime());
            existingUser.setComment(sc.getComment());;
            return servRecordRepo.save(existingUser);
        }
        return null;
    }
    
	public List<Servicerecord> getByGuestName(String name){
		return  servRecordRepo.findServiceByGuestName(name);
	}
    
}
