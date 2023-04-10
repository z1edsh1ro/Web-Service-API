package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.Staff;

@Repository
public interface StaffRepository extends CrudRepository<Staff, Integer> {

	@Query("from Staff s where s.name=:name")
	public List<Staff> findByName(@Param("name")String name);
	
	@Query("from Staff s join s.position p where p.name=:position")
	public List<Staff> findByPosition(@Param("position")String position);
}
