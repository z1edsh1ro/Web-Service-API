package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.Booking;
import th.ac.ku.kps.eng.cpe.se.model.Servicerecord;

public interface RecordHotelServiceRepository extends CrudRepository<Servicerecord, Integer> {
	@Query("from Servicerecord sr join sr.booking b where b.bid=:bid")
	public List<Servicerecord> findByBooking(@Param("bid")int bid);
	
	@Query("from Servicerecord sr inner join sr.booking b inner join b.guest g where g.name=:name")
	public List<Servicerecord> findServiceByGuestName(@Param("name")String name);
	
}
