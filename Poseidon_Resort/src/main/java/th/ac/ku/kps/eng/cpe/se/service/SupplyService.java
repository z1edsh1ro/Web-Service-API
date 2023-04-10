package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Supply;
import th.ac.ku.kps.eng.cpe.se.repository.SupplyRepository;

@Service
public class SupplyService {
	@Autowired
	private SupplyRepository supplyrepo;
	
	public List<Supply> getAll(){
		return (List<Supply>) supplyrepo.findAll();
	}
	public Supply findSupplyById(int id) {
		return supplyrepo.findById(id).get();
	}
	public List<Supply> findSupplyByName(String name) {
		return (List<Supply>) supplyrepo.findSupplyByName(name);
	}
	public void delete(int id) {
		supplyrepo.deleteById(id);
	}
	public void save(Supply supply) {
		supplyrepo.save(supply);
	}
}
