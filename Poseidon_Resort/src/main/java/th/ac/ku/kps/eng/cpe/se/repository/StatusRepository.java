package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.Status;

public interface StatusRepository extends CrudRepository<Status, Integer> {
	
	@Query("from Status s where s.forWhat=:forWhat")
	public List<Status> findByForWhat(@Param("forWhat")String forWhat);
}
