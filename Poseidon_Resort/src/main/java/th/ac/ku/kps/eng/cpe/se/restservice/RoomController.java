package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Room;
import th.ac.ku.kps.eng.cpe.se.model.Roomtype;
import th.ac.ku.kps.eng.cpe.se.service.RoomService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class RoomController {
	@Autowired
	private RoomService roomservice;
	
	@GetMapping("/rooms")
	public List<Room> getAllRooms(){
		return (List<Room>) roomservice.getAll();
	}
	@GetMapping("/rooms/id/{id}")
	public Room getRoomById(@PathVariable("id") int id){
		return roomservice.getRoomById(id);
	}
	@GetMapping("/rooms/type/{id}")
	public Roomtype getRoomType(@PathVariable("id") int id){
		Room r = roomservice.getRoomById(id);
		return r.getRoomtype();
	}
	@GetMapping("/rooms/floor/{floor}")
	public List<Room> getRoomByFloor(@PathVariable("floor") int floorID){
		return (List<Room>) roomservice.getRoomByFloor(floorID);
	}
	@GetMapping("/rooms/status/{status}")
	public List<Room> getRoomByStatus(@PathVariable("status") int statusID){
		return (List<Room>) roomservice.getRoomByStatus(statusID);
	}
	@GetMapping("/rooms/roomtype/roomtype/{roomType}")
	public List<Room> getRoomByRoomType(@PathVariable("roomType") int roomTypeID){
		return (List<Room>) roomservice.getRoomByRoomType(roomTypeID);
	}
	@PutMapping("/rooms/id/{id}")
    public void updateRoomStatus(@PathVariable("id") int id ,@RequestBody Room room){
		Room r = roomservice.getRoomById(id);
		r.setFloor(room.getFloor());
		r.setRoomtype(room.getRoomtype());
		r.setStatus(room.getStatus());
		roomservice.updateRoom(r);
    }
	
}
