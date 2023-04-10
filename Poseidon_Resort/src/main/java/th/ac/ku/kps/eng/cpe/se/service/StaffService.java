package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Staff;
import th.ac.ku.kps.eng.cpe.se.repository.StaffRepository;

@Service
public class StaffService {
	@Autowired
	StaffRepository staffRepository;
	
	public List<Staff> getAll(){
		return (List<Staff>) staffRepository.findAll();
	}
	public Staff getByID(int sid){
		return staffRepository.findById(sid).get();
	}
	public List<Staff> getByName(String name){
		return (List<Staff>) staffRepository.findByName(name);
	}
	public List<Staff> getByPosition(String position){
		return (List<Staff>) staffRepository.findByPosition(position);
	}
	public void saveStaff(Staff s) {
		staffRepository.save(s);
	}
	public void deleteStaff(int sid) {
		staffRepository.deleteById(sid);
	}
}
