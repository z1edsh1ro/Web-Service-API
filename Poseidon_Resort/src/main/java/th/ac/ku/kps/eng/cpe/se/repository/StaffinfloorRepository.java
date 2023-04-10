package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.Staffinfloor;

public interface StaffinfloorRepository extends CrudRepository<Staffinfloor, Integer> {
	@Query("from Staffinfloor sf join sf.staff s where s.name=:name")
	public List<Staffinfloor> findByStaffName(@Param("name")String name);
	
	@Query("from Staffinfloor sf join sf.floor f where f.fid=:floor")
	public List<Staffinfloor> findByfloor(@Param("floor")int floor);
}
