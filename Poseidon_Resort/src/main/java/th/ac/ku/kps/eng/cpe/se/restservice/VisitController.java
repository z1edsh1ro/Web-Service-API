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

import th.ac.ku.kps.eng.cpe.se.model.Visit;
import th.ac.ku.kps.eng.cpe.se.service.VisitService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class VisitController {
	@Autowired
	private VisitService visitservice;
	
	@GetMapping("/visits")
	public List<Visit> getAll(){
		return (List<Visit>) visitservice.getAll();
	}
	@GetMapping("/visits/id/{id}")
	public Visit get(@PathVariable("id") int id){
		return visitservice.getById(id);
	} 
	@PostMapping("/visits")
	public Visit create(@RequestBody Visit vs) {
		System.out.println(vs);
		return visitservice.createVisit(vs);
	}
	@PutMapping("visits/id/{id}")
    public Visit updateVisit(@PathVariable int id, @RequestBody Visit vs) {
		
        return visitservice.updateVisit(id, vs);
    }
    @DeleteMapping("visits/id/{id}")
    public void deleteVisit(@PathVariable int id) {
    	visitservice.deleteVisit(id);
    }

}
