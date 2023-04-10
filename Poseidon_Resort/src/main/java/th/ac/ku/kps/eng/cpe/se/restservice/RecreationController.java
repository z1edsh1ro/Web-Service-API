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

import th.ac.ku.kps.eng.cpe.se.model.Recreation;
import th.ac.ku.kps.eng.cpe.se.service.RecreationService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class RecreationController {
	@Autowired
	private RecreationService recreationservice;
	
	@GetMapping("/recreations")
	public List<Recreation> getAll(){
		return (List<Recreation>) recreationservice.getAll();
	}
	@GetMapping("/recreations/id/{id}")
	public Recreation get(@PathVariable("id") int id){
		return recreationservice.getById(id);
	} 
	@PostMapping("/recreations")
	public Recreation create(@RequestBody Recreation r) {
		System.out.println(r);
		return recreationservice.createRecreation(r);
	}
	@PutMapping("recreations/id/{id}")
    public Recreation updateRecreation(@PathVariable int id, @RequestBody Recreation r) {
        return recreationservice.updateRecreation(id, r);
    }
    @DeleteMapping("recreations/id/{id}")
    public void deleteRecreation(@PathVariable int id) {
    	recreationservice.deleteRecreation(id);
    }

}
