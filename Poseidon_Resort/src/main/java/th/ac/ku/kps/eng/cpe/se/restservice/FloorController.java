package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Floor;
import th.ac.ku.kps.eng.cpe.se.service.FloorService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class FloorController {
	@Autowired
	private FloorService floorService;
	
	@GetMapping("/floors")
	public List<Floor> getAll() {
		return (List<Floor>) floorService.getAll();
	}
}
