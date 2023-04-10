package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.Supply;
@Repository
public interface SupplyRepository extends CrudRepository<Supply, Integer>{
	@Query("from Supply as s where s.name=:name")
	public List<Supply> findSupplyByName(@Param("name") String name);
}
