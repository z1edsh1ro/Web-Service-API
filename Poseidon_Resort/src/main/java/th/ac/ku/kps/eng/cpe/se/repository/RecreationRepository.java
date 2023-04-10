package th.ac.ku.kps.eng.cpe.se.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.Recreation;


@Repository
public interface RecreationRepository extends CrudRepository<Recreation,Integer>{

}
