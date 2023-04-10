package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Recreation;
import th.ac.ku.kps.eng.cpe.se.repository.RecreationRepository;

@Service
public class RecreationService {
	@Autowired
	private RecreationRepository recreationrepo;
	public List<Recreation> getAll(){
		return (List<Recreation>) recreationrepo.findAll();		
	}
	public Recreation getById(int id){
		return recreationrepo.findById(id).get();
	}
	public Recreation createRecreation(Recreation r){
		return recreationrepo.save(r);
	}
	
    public Recreation updateRecreation(int id, Recreation r) {
    	Recreation existingUser = recreationrepo.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setName(r.getName());
            existingUser.setPricePerHour(r.getPricePerHour());
            
            return recreationrepo.save(existingUser);
        }
        return null;
    }
    public void deleteRecreation(int id) {
    	recreationrepo.deleteById(id);
    }

}
