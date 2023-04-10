package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Roomtype;
import th.ac.ku.kps.eng.cpe.se.repository.RoomtypeRepository;

@Service
public class RoomTypeService {
	@Autowired
	private RoomtypeRepository roomtyperepo;
	
	public List<Roomtype> getAll(){
		return (List<Roomtype>) roomtyperepo.findAll();
	}
}
