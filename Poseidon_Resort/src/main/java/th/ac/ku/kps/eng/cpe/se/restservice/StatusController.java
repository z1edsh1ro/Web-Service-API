package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Status;
import th.ac.ku.kps.eng.cpe.se.service.StatusService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class StatusController {
	@Autowired
	private StatusService statusService;
	
	@GetMapping("/status")
	public List<Status> getAll(){
		return (List<Status>) statusService.getAll();
	}
	@GetMapping("/statusbookings")
	public List<Status> getBookingStatus() {
		return (List<Status>) statusService.getBookingStatus();
	}
	@GetMapping("/statusrooms")
	public List<Status> getRoomStatus() {
		return (List<Status>) statusService.getRoomStatus();
	}
}
