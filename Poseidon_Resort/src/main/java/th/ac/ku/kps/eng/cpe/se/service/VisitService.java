package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Visit;
import th.ac.ku.kps.eng.cpe.se.repository.VisitRepository;

@Service
public class VisitService {
	@Autowired
	private VisitRepository visitrepo;
	public List<Visit> getAll(){
		return (List<Visit>) visitrepo.findAll();		
	}
	public Visit getById(int id){
		return visitrepo.findById(id).get();
	}
	public Visit createVisit(Visit vs){
		return visitrepo.save(vs);
	}
	
    public Visit updateVisit(int id, Visit vs) {
    	Visit existingUser = visitrepo.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setTimein(vs.getTimein());
            existingUser.setTimeout(vs.getTimeout());
            existingUser.setComment(vs.getComment());
            return visitrepo.save(existingUser);
        }
        return null;
    }
    
    public void deleteVisit(int id) {
    	visitrepo.deleteById(id);
    }
}
