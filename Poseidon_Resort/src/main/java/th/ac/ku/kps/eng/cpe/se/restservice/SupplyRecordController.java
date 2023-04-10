package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Supplyrecord;
import th.ac.ku.kps.eng.cpe.se.service.SupplyRecordService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class SupplyRecordController {
	@Autowired
	private SupplyRecordService supplyrecordservice;
	
	@GetMapping("/supplyrecords")
	public List<Supplyrecord> getAll(){
		return (List<Supplyrecord>) supplyrecordservice.getAll();
	}
	@GetMapping("/supplyrecords/supplies/id/{id}")
	public List<Supplyrecord> getByIdSupplies(@PathVariable("id") int id){
		return (List<Supplyrecord>) supplyrecordservice.findByIdSupply(id);
	}
	@GetMapping("/supplyrecords/staffs/id/{id}")
	public List<Supplyrecord> getByNameSupplies(@PathVariable("id") int id){
		return (List<Supplyrecord>) supplyrecordservice.findByIdStaff(id);
	}
	@GetMapping("/supplyrecords/id/{id}")
	public Supplyrecord getById(@PathVariable("id") int id){
		return supplyrecordservice.findById(id);
	}
	@GetMapping("/supplyrecords/bookings/id/{id}")
	public List<Supplyrecord> getByBooking(@PathVariable("id") int id){
		return (List<Supplyrecord>) supplyrecordservice.findByBooking(id);
	}
	@PostMapping("/supplyrecords")
	public void createSupplyRecords(@RequestBody Supplyrecord supplyrecord) {
		supplyrecordservice.save(new Supplyrecord(supplyrecord.getBooking(),supplyrecord.getStaff(),supplyrecord.getSupply(),supplyrecord.getTime(),supplyrecord.getReason(),supplyrecord.getQuantity()));
	}
}
