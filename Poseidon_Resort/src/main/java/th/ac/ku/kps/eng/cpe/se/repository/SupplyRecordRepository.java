package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.Supplyrecord;

public interface SupplyRecordRepository extends CrudRepository<Supplyrecord, Integer>{
	@Query("from Supplyrecord as sr inner join sr.supply as s where s.name=:name")
	public List<Supplyrecord> getByNameSupply(@Param("name") String name);
	
	@Query("from Supplyrecord as sr inner join sr.staff as s where s.sid=:sid")
	public List<Supplyrecord> getByIdStaff(@Param("sid") int sid);
	
	@Query("from Supplyrecord as sr inner join sr.supply as s where s.supId=:supId")
	public List<Supplyrecord> getByIdSupply(@Param("supId") int id);
	
	@Query("from Supplyrecord as sr inner join sr.booking as b where b.bid=:bid")
	public List<Supplyrecord> getByBooking(@Param("bid") int bid);
}
