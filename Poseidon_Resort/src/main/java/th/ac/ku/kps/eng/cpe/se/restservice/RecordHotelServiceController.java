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

import th.ac.ku.kps.eng.cpe.se.model.Booking;
import th.ac.ku.kps.eng.cpe.se.model.Servicerecord;
import th.ac.ku.kps.eng.cpe.se.service.RecordHotelService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class RecordHotelServiceController {
	@Autowired
	private RecordHotelService recordHotelService;
	
	@GetMapping("/records/services")
	public List<Servicerecord> getAll(){
		return (List<Servicerecord>)  recordHotelService.getAll();
	}
	
	@GetMapping("/records/services/id/{id}")
	public Servicerecord get(@PathVariable("id") int id){
		return  recordHotelService.getById(id);
	}
	
	@GetMapping("/records/bookings/id/{id}")
	public List<Servicerecord> getByBooking(@PathVariable("id") int id){
		return  (List<Servicerecord>) recordHotelService.getByBooking(id);
	}
	
	@PostMapping("/records/services")
	public Servicerecord create(@RequestBody Servicerecord hs) {
		return  recordHotelService.createRecordHotelService(hs);
	}
	
    @PutMapping("/records/services/id/{id}")
    public Servicerecord updateUser(@PathVariable int id, @RequestBody Servicerecord user) {
        return  recordHotelService.updateRecordHotelService(id, user);
    }
    
	@GetMapping("/records/services/guests/name/{name}")
	public  List<Servicerecord> getByGuestName(@PathVariable("name") String name){
		return  recordHotelService.getByGuestName(name);
	}
	
}
