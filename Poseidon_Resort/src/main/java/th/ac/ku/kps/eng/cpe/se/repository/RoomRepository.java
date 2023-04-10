package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.Room;

@Repository
public interface RoomRepository extends CrudRepository<Room, Integer>{
	@Query("from Room as r inner join r.floor as f where f.fid=:floorID")
	public List<Room> getRoomByFloor(@Param("floorID")int floorID);
	
	@Query("from Room as r inner join r.status as s where s.statusId=:statusID")
	public List<Room> getRoomByStatus(@Param("statusID")int statusID);
	
	@Query("from Room as r inner join r.roomtype as rt where rt.rtId =:roomTypeID")
	public List<Room> getRoomByRoomType(@Param("roomTypeID")int roomTypeID);
}
