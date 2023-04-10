package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Floor;
import th.ac.ku.kps.eng.cpe.se.repository.FloorRepository;

@Service
public class FloorService {
	
	@Autowired
	FloorRepository floorRepository;

	public List<Floor> getAll() {
		return (List<Floor>) floorRepository.findAll();
	}
	
	public Floor getByID(int fid) {
		return floorRepository.findById(fid).get();
	}
}
