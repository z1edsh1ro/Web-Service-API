package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import th.ac.ku.kps.eng.cpe.se.model.Visit;
@Repository
public interface VisitRepository extends CrudRepository<Visit,Integer>{
	


}
