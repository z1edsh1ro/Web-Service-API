package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Room;
import th.ac.ku.kps.eng.cpe.se.repository.RoomRepository;

@Service
public class RoomService {
	@Autowired
	private RoomRepository roomrepo;
	
	public List<Room> getAll(){
		return (List<Room>) roomrepo.findAll();
	}
	public Room getRoomById(int roomID) {
		return roomrepo.findById(roomID).get();
	}
	public List<Room> getRoomByFloor(int floorID){
		return (List<Room>) roomrepo.getRoomByFloor(floorID);
	}
	public List<Room> getRoomByStatus(int statusID){
		return (List<Room>) roomrepo.getRoomByStatus(statusID);
	}
	public List<Room> getRoomByRoomType(int roomTypeID){
		return (List<Room>) roomrepo.getRoomByRoomType(roomTypeID);
	}
	public void updateRoom(Room r) {
		roomrepo.save(r);
	}
}
