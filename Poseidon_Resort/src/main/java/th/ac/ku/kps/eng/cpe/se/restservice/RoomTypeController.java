package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Roomtype;
import th.ac.ku.kps.eng.cpe.se.service.RoomTypeService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class RoomTypeController {
	@Autowired
	private RoomTypeService roomtypeservice;
	@GetMapping("/roomtypes")
	public List<Roomtype> getAll(){
		return (List<Roomtype>) roomtypeservice.getAll();
	}
}
