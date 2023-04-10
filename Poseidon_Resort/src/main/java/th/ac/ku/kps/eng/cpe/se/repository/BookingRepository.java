package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.Booking;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Integer> {
	
	@Query("from Booking b where b.chkout IS NULL AND b.chkin IS NOT NULL")
	public List<Booking> findByNotChkOut();
	
	@Query("from Booking b where b.chkout IS NULL AND b.chkin IS NULL")
	public List<Booking> findByNotChkIn();
	
	@Query("from Booking b where b.chkout IS NOT NULL")
	public List<Booking> findByChkOut();
	
	@Query("from Booking b join b.guest g where g.name=:name")
	public List<Booking> findByGuestName(@Param("name")String name);
	
	@Query("from Booking b join b.status s where s.name=:status")
	public List<Booking> findByGuestStatus(@Param("status")String status);
	
	@Query("from Booking b join b.room r where r.rid=:rid")
	public List<Booking> findByGuestRoom(@Param("rid")int rid);

}
