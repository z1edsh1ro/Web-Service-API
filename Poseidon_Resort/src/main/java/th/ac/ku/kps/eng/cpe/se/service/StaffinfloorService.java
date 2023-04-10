package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Staffinfloor;
import th.ac.ku.kps.eng.cpe.se.repository.StaffinfloorRepository;

@Service
public class StaffinfloorService {
	@Autowired
	StaffinfloorRepository staffinfloorRepository;
	
	public List<Staffinfloor> getAll(){
		return (List<Staffinfloor>) staffinfloorRepository.findAll();
	}
	public Staffinfloor getByID(int sfid){
		return staffinfloorRepository.findById(sfid).get();
	}
	public List<Staffinfloor> getByStaffName(String name){
		return (List<Staffinfloor>) staffinfloorRepository.findByStaffName(name);
	}
	public List<Staffinfloor> getByFloor(int floor){
		return (List<Staffinfloor>) staffinfloorRepository.findByfloor(floor);
	}
	public void saveStaffinfloor(Staffinfloor sf) {
		staffinfloorRepository.save(sf);
	}
	public void deleteStaffinfloor(int sfid) {
		staffinfloorRepository.deleteById(sfid);
	}
}
