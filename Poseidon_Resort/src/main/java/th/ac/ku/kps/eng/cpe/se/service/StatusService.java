package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Status;
import th.ac.ku.kps.eng.cpe.se.repository.StatusRepository;

@Service
public class StatusService {
	
	@Autowired
	StatusRepository statusRepository;
	
	public List<Status> getAll() {
		return (List<Status>) statusRepository.findAll();
	}
	
	public List<Status> getBookingStatus() {
		return (List<Status>) statusRepository.findByForWhat("booking");
	}
	
	public List<Status> getRoomStatus() {
		return (List<Status>) statusRepository.findByForWhat("room");
	}
	
	public Status getById(int id) {
		return statusRepository.findById(id).get();
	}
}
