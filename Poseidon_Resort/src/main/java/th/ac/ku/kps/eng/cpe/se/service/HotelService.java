package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Hotelservice;
import th.ac.ku.kps.eng.cpe.se.repository.HotelServiceRepository;

@Service
public class HotelService {
	@Autowired
	private HotelServiceRepository hotelServRepo;
	
	public List<Hotelservice> getAll(){
		return (List<Hotelservice>) hotelServRepo.findAll();
	}
	
	public Hotelservice getById(int id){
		return hotelServRepo.findById(id).get();
	}
	
	public Hotelservice createHotelService(Hotelservice hs){
		return hotelServRepo.save(hs);
	}
	
    public Hotelservice updateHotelService(int id, Hotelservice hs) {
        Hotelservice existingUser = hotelServRepo.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setName(hs.getName());
            existingUser.setPrice(hs.getPrice());
            return hotelServRepo.save(existingUser);
        }
        return null;
    }
    
    public void deleteHotelService(int id) {
        hotelServRepo.deleteById(id);
    }
	
}
