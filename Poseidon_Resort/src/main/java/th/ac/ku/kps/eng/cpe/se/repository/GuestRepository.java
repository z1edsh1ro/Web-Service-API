package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.Guest;

public interface GuestRepository extends CrudRepository<Guest, Integer> {
	@Query("from Guest g where g.name = :name")
	public List<Guest> getGuestByName(@Param("name")String name);
	@Query("from Guest g where g.username=:username")
	public Guest getGuestByUsername(@Param("username")String username);
	@Query("from Guest g where g.username=:username and g.password=:password")
	public Guest getGuestByUsernameAndPassword(@Param("username")String username,@Param("password") String password);
}
