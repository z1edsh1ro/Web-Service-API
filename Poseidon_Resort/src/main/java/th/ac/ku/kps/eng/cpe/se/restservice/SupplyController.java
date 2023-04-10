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

import th.ac.ku.kps.eng.cpe.se.model.Supply;
import th.ac.ku.kps.eng.cpe.se.service.SupplyService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class SupplyController {
	@Autowired
	private SupplyService supplyservice;
	
	@GetMapping("/supplies")
	public List<Supply> getAll(){
		return supplyservice.getAll();
	}
	@GetMapping("/supplies/id/{id}")
	public Supply getById(@PathVariable("id")int id){
		return supplyservice.findSupplyById(id);
	}
	@GetMapping("/supplies/name/{name}")
	public List<Supply> getByName(@PathVariable("name") String name){
		return (List<Supply>) supplyservice.findSupplyByName(name);
	}
	@PostMapping("/supplies")
	public void createSupply(@RequestBody Supply supply) {
		supplyservice.save(new Supply(supply.getName(), supply.getQuantity(), supply.getPrice()));
	}
	@PutMapping("/supplies/id/{id}")
	public void updateSupply(@PathVariable("id") int id,@RequestBody Supply supply) {
		Supply s = supplyservice.findSupplyById(id);
		s.setName(supply.getName());
		s.setPrice(supply.getPrice());
		s.setQuantity(supply.getQuantity());
		supplyservice.save(s);
	}
	@DeleteMapping("/supplies/id/{id}")
	public void deletSupply(@PathVariable("id") int id) {
		supplyservice.delete(id);
	}

}
