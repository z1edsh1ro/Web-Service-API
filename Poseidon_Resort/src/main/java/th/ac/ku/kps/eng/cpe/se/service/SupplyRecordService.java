package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Supplyrecord;
import th.ac.ku.kps.eng.cpe.se.repository.SupplyRecordRepository;

@Service
public class SupplyRecordService {
	@Autowired
	private SupplyRecordRepository supplyrecordrepo;
	public List<Supplyrecord> getAll(){
		return (List<Supplyrecord>) supplyrecordrepo.findAll();
	}
	public List<Supplyrecord> findByNameSupply(String name){
		return (List<Supplyrecord>) supplyrecordrepo.getByNameSupply(name);
	}
	public List<Supplyrecord> findByIdSupply(int id){
		return (List<Supplyrecord>) supplyrecordrepo.getByIdSupply(id);
	}
	public List<Supplyrecord> findByIdStaff(int id){
		return (List<Supplyrecord>) supplyrecordrepo.getByIdStaff(id);
	}
	public List<Supplyrecord> findByBooking(int id){
		return (List<Supplyrecord>) supplyrecordrepo.getByBooking(id);
	}
	public Supplyrecord findById(int id) {
		return supplyrecordrepo.findById(id).get();
	}
	public void save(Supplyrecord supplyrecord) {
		supplyrecordrepo.save(supplyrecord);
	}
}
