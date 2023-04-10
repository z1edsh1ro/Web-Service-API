package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Hotelservice;
import th.ac.ku.kps.eng.cpe.se.service.HotelService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class HotelServiceController {
	@Autowired
	private HotelService hotelService;
	
	@GetMapping("/hotels/services")
	public List<Hotelservice> getAll(){
		return (List<Hotelservice>) hotelService.getAll();
	}
	
	@GetMapping("/hotels/services/id/{id}")
	public Hotelservice get(@PathVariable("id") int id){
		return hotelService.getById(id);
	}
	@PostMapping("/hotels/services")
	public Hotelservice create(@RequestBody Hotelservice hs) {
		System.out.println(hs);
		return hotelService.createHotelService(hs);
	}
    @PutMapping("/hotels/services/id/{id}")
    public Hotelservice updateUser(@PathVariable int id, @RequestBody Hotelservice user) {
        return hotelService.updateHotelService(id, user);
    }
    @DeleteMapping("/hotels/services/id/{id}")
    public void deleteUser(@PathVariable int id) {
        hotelService.deleteHotelService(id);
    }
}
