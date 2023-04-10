package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;
import java.util.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Booking;
import th.ac.ku.kps.eng.cpe.se.model.Room;
import th.ac.ku.kps.eng.cpe.se.service.BookingService;
import th.ac.ku.kps.eng.cpe.se.service.RoomService;
import th.ac.ku.kps.eng.cpe.se.service.StatusService;
import th.ac.ku.kps.eng.cpe.soa.dto.GuestLogin;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class BookingController {
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private StatusService statusService;
	
	@Autowired
	private RoomService roomService;
	
	@GetMapping("/bookings")
	public List<Booking> getAll(){
		return (List<Booking>) bookingService.getAll();
	}
	
	@GetMapping("/bookings/current")
	public List<Booking> getNotChkOut(){
		return (List<Booking>) bookingService.getNotChkOut();
	}
	
	@GetMapping("/bookings/books")
	public List<Booking> getNotChkIn(){
		return (List<Booking>) bookingService.getNotChkIn();
	}
	
	@GetMapping("/bookings/history")
	public List<Booking> getChkOut(){
		return (List<Booking>) bookingService.getChkOut();
	}
	
	@GetMapping("/bookings/id/{id}")
	public Booking getByID(@PathVariable("id") int id){
		return bookingService.getByID(id);
	}
	
	@GetMapping("/bookings/diffday/{id}")
	public int getByDiffDay(@PathVariable("id") int id){
		Booking b =  bookingService.getByID(id);
		long diffInMs = b.getLastDate().getTime() - b.getFirstDate().getTime();
		int diffInDays = (int) (diffInMs / (1000 * 60 * 60 * 24));
		return diffInDays;
	}
	
	@GetMapping("/bookings/name/{name}")
	public List<Booking> getByGuestName(@PathVariable("name") String name){
		return (List<Booking>) bookingService.getByGuestName(name);
	}
	
	@GetMapping("/bookings/status/{status}")
	public List<Booking> getByGuestStatus(@PathVariable("status") String status){
		return (List<Booking>) bookingService.getByGuestStatus(status);
	}
	
	@GetMapping("/bookings/room/{rid}")
	public List<Booking> getByGuestRoom(@PathVariable("rid") int rid){
		return (List<Booking>) bookingService.getByGuestRoom(rid);
	}
	
	@PostMapping("/bookings/guest")
	public void createBookingByGuest(@RequestBody Booking b){
		bookingService.saveBooking(new Booking(GuestLogin.guestLogin,b.getRoom(),statusService.getById(5),b.getFirstDate(),b.getLastDate()));
		Room room = roomService.getRoomById(b.getRoom().getRid());
		room.setStatus(statusService.getById(2));
		roomService.updateRoom(room);
	}
	
	@PostMapping("/bookings/counter")
	public void createBookingByCounter(@RequestBody Booking b){
		LocalDate localDate = LocalDate.now();
		Date currentDate = java.sql.Date.valueOf(localDate);
		LocalDateTime localDateTime = LocalDateTime.now();
		Date currentDateTime = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
		Booking booking = new Booking(b.getGuest(),b.getRoom(),statusService.getById(6),currentDate,b.getLastDate());
		booking.setChkin(currentDateTime);
		bookingService.saveBooking(booking);
		Room room = roomService.getRoomById(b.getRoom().getRid());
		room.setStatus(statusService.getById(3));
		roomService.updateRoom(room);
	}
	
	@PutMapping("/bookings/{bid}")
	public void updateBooking(@PathVariable("bid") int bid,@RequestBody Booking b){
		Booking booking = bookingService.getByID(bid);
		booking.setLastDate(b.getLastDate());
		bookingService.saveBooking(booking);
	}
	
	@PutMapping("/bookings/chkin/{bid}")
	public void chkin(@PathVariable("bid") int bid){
		LocalDate localDate = LocalDate.now();
		Date currentDate = java.sql.Date.valueOf(localDate);
		LocalDateTime localDateTime = LocalDateTime.now();
		Date currentDateTime = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
		Booking booking = bookingService.getByID(bid);
		booking.setStatus(statusService.getById(6));
		booking.setFirstDate(currentDate);
		booking.setChkin(currentDateTime);
		bookingService.saveBooking(booking);
		Room room = roomService.getRoomById(booking.getRoom().getRid());
		room.setStatus(statusService.getById(3));
		roomService.updateRoom(room);
	}
	
	@PutMapping("/bookings/chkout/{bid}")
	public void chkout(@PathVariable("bid") int bid){
		LocalDate localDate = LocalDate.now();
		Date currentDate = java.sql.Date.valueOf(localDate);
		LocalDateTime localDateTime = LocalDateTime.now();
		Date currentDateTime = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
		Booking booking = bookingService.getByID(bid);
		booking.setStatus(statusService.getById(7));
		booking.setLastDate(currentDate);
		booking.setChkout(currentDateTime);
		bookingService.saveBooking(booking);
		Room room = roomService.getRoomById(booking.getRoom().getRid());
		room.setStatus(statusService.getById(1));
		roomService.updateRoom(room);
	}
}
