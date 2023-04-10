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

import th.ac.ku.kps.eng.cpe.se.model.Staff;
import th.ac.ku.kps.eng.cpe.se.service.StaffService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class StaffController {
	@Autowired
	private StaffService staffService;
	
	@GetMapping("/staffs")
	public List<Staff> getAll(){
		return (List<Staff>) staffService.getAll();
	}
	
	@GetMapping("/staffs/id/{id}")
	public Staff getById(@PathVariable("id") Integer id){
		return staffService.getByID(id);
	}
	
	@GetMapping("/staffs/name/{name}")
	public List<Staff> getByName(@PathVariable("name") String name){
		return (List<Staff>) staffService.getByName(name);
	}
	
	@GetMapping("/staffs/position/{position}")
	public List<Staff> getByPosition(@PathVariable("position") String position){
		return (List<Staff>) staffService.getByPosition(position);
	}
	
	@PostMapping("/staffs")
	public void createStaff(@RequestBody Staff s){
		Staff staff = new Staff(s.getName(),s.getSurname(),s.getSalary(),s.getPhone());
		staff.setPosition(s.getPosition());
		staffService.saveStaff(staff);
	}
	
	@PutMapping("/staffs/id/{sid}")
	public void updateStaff(@PathVariable("sid") int sid,@RequestBody Staff s){
		Staff staff = staffService.getByID(sid);
		staff.setName(s.getName());
		staff.setSurname(s.getSurname());
		staff.setPhone(s.getPhone());
		staff.setPosition(s.getPosition());
		staff.setSalary(s.getSalary());
		staffService.saveStaff(staff);
	}
	
	@DeleteMapping("/staffs/{sid}")
	public void deleteStaff(@PathVariable("sid") int sid){
		staffService.deleteStaff(sid);
	}
}
