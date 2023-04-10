package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Position;
import th.ac.ku.kps.eng.cpe.se.repository.PositionRepository;

@Service
public class PositionService {
	
	@Autowired
	PositionRepository positionRepository;
	
	public List<Position> getAll(){
		return (List<Position>) positionRepository.findAll();
	}
	
	public Position getByID(int rid){
		return positionRepository.findById(rid).get();
	}
}
