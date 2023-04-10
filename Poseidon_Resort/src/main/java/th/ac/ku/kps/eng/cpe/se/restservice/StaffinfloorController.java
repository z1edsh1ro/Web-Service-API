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

import th.ac.ku.kps.eng.cpe.se.model.Staffinfloor;
import th.ac.ku.kps.eng.cpe.se.service.StaffinfloorService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class StaffinfloorController {
	@Autowired
	private StaffinfloorService staffinfloorService;
	
	@GetMapping("/staffsinfloors")
	public List<Staffinfloor> getAll(){
		return (List<Staffinfloor>) staffinfloorService.getAll();
	}
	@GetMapping("/staffsinfloors/name/{name}")
	public List<Staffinfloor> getByStaffName(@PathVariable("name") String name){
		return (List<Staffinfloor>) staffinfloorService.getByStaffName(name);
	}
	
	@GetMapping("/staffsinfloors/floor/{floor}")
	public List<Staffinfloor> getByFloor(@PathVariable("floor") int floor){
		return (List<Staffinfloor>) staffinfloorService.getByFloor(floor);
	}
	
	@PostMapping("/staffsinfloors")
	public void createStaffinfloor(@RequestBody Staffinfloor sf){
		staffinfloorService.saveStaffinfloor(new Staffinfloor(sf.getFloor(),sf.getStaff()));
	}
	
	@PutMapping("/staffsinfloors/{sfid}")
	public void updateStaff(@PathVariable("sfid") int sfid,@RequestBody Staffinfloor sf){
		Staffinfloor staffinfloor = staffinfloorService.getByID(sfid);
		staffinfloor.setFloor(sf.getFloor());
		staffinfloor.setStaff(sf.getStaff());
		staffinfloorService.saveStaffinfloor(staffinfloor);
	}
	
	@DeleteMapping("/staffsinfloors/{sfid}")
	public void deleteStaffinfloor(@PathVariable("sfid") int sfid){
		staffinfloorService.deleteStaffinfloor(sfid);
	}
}
