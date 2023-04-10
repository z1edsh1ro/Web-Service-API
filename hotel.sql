-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2023 at 08:34 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `BID` int(11) NOT NULL,
  `guest` int(11) NOT NULL,
  `room` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `firstDate` date NOT NULL,
  `lastDate` date NOT NULL,
  `chkin` datetime DEFAULT NULL,
  `chkout` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`BID`, `guest`, `room`, `status`, `firstDate`, `lastDate`, `chkin`, `chkout`) VALUES
(1, 1, 201, 7, '2023-03-01', '2023-03-08', '2023-03-03 15:00:00', '2023-03-06 10:00:00'),
(7, 1, 101, 7, '2023-04-05', '2023-04-06', '2023-04-05 23:29:40', '2023-04-05 23:29:42'),
(8, 1, 105, 7, '2023-04-05', '2023-04-05', '2023-04-05 23:39:57', '2023-04-05 23:40:01'),
(9, 1, 105, 7, '2023-04-05', '2023-04-06', '2023-04-05 23:40:21', '2023-04-06 00:40:48'),
(10, 1, 103, 5, '2023-04-05', '2023-04-14', NULL, NULL),
(11, 1, 101, 7, '2023-04-11', '2023-04-06', NULL, '2023-04-06 00:41:28'),
(12, 1, 102, 5, '2023-04-05', '2023-04-15', NULL, NULL),
(13, 1, 104, 6, '2023-04-06', '2023-04-13', '2023-04-06 12:07:07', NULL),
(14, 1, 201, 6, '2023-04-06', '2023-04-14', '2023-04-06 12:07:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `floor`
--

CREATE TABLE `floor` (
  `FID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `floor`
--

INSERT INTO `floor` (`FID`, `name`) VALUES
(1, 'ชั้น 1'),
(2, 'ชั้น 2'),
(3, 'ชั้น 3'),
(4, 'ชั้น 4'),
(5, 'ชั้น 5');

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

CREATE TABLE `guest` (
  `GID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guest`
--

INSERT INTO `guest` (`GID`, `name`, `surname`, `username`, `password`, `phone`) VALUES
(1, 'บวรวัชร', 'ทองอยู่', 'bowornwat.b@ku.th', '123456', '0944173434');

-- --------------------------------------------------------

--
-- Table structure for table `hotelservice`
--

CREATE TABLE `hotelservice` (
  `sevID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotelservice`
--

INSERT INTO `hotelservice` (`sevID`, `name`, `price`) VALUES
(1, 'สั่งของ', 0),
(2, 'ทำความสะอาดห้องทันที', 100),
(3, 'ใช้บริการกับพาร์ทเนอร์', 50);

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `PID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`PID`, `name`) VALUES
(1, 'พนักงานทำความสะอาด'),
(2, 'พนักงานหน้าเคาน์เตอร์'),
(3, 'พนักงานบริการ');

-- --------------------------------------------------------

--
-- Table structure for table `recreation`
--

CREATE TABLE `recreation` (
  `rcID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pricePerHour` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recreation`
--

INSERT INTO `recreation` (`rcID`, `name`, `pricePerHour`) VALUES
(1, 'ฟิตเนส', 350),
(2, 'สระน้ำ', 300),
(3, 'after name', 123);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `RID` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`RID`, `floor`, `type`, `status`) VALUES
(101, 1, 1, 1),
(102, 1, 1, 2),
(103, 1, 1, 2),
(104, 1, 2, 3),
(105, 1, 2, 1),
(201, 2, 3, 3),
(202, 2, 3, 1),
(203, 2, 3, 3),
(204, 2, 3, 1),
(205, 2, 4, 1),
(206, 2, 4, 1),
(207, 2, 4, 1),
(208, 2, 4, 1),
(209, 2, 5, 1),
(210, 2, 5, 1),
(301, 3, 14, 1),
(302, 3, 14, 1),
(303, 3, 15, 1),
(304, 3, 15, 1),
(305, 3, 16, 1),
(306, 3, 16, 1),
(401, 4, 6, 1),
(402, 4, 6, 1),
(403, 4, 7, 1),
(404, 4, 7, 1),
(405, 4, 10, 1),
(406, 4, 11, 1),
(501, 5, 9, 1),
(502, 5, 9, 1),
(503, 5, 12, 1),
(504, 5, 12, 1),
(505, 5, 13, 1),
(506, 5, 13, 1);

-- --------------------------------------------------------

--
-- Table structure for table `roomtype`
--

CREATE TABLE `roomtype` (
  `rtID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `pricePerDay` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roomtype`
--

INSERT INTO `roomtype` (`rtID`, `name`, `pricePerDay`) VALUES
(1, 'ห้องประชุม', 8000),
(2, 'ห้องจัดเลี้ยง', 10000),
(3, 'Single-Standard', 400),
(4, 'Single-Superior', 800),
(5, 'Single-Deluxe', 2000),
(6, 'Double-Standard', 800),
(7, 'Double-Superior', 1500),
(8, 'Double-Deluxe', 3500),
(9, 'Double-Suite', 7000),
(10, 'Triple-Standard', 1000),
(11, 'Triple-Superior', 1800),
(12, 'Triple-Deluxe', 4700),
(13, 'Triple-Suite', 8000),
(14, 'Twin-Standard', 750),
(15, 'Twin-Superior', 1400),
(16, 'Twin-Deluxe', 3200);

-- --------------------------------------------------------

--
-- Table structure for table `servicerecord`
--

CREATE TABLE `servicerecord` (
  `srID` int(11) NOT NULL,
  `service` int(11) NOT NULL,
  `booking` int(11) NOT NULL,
  `staff` int(11) DEFAULT NULL,
  `time` datetime NOT NULL,
  `comment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `servicerecord`
--

INSERT INTO `servicerecord` (`srID`, `service`, `booking`, `staff`, `time`, `comment`) VALUES
(2, 3, 1, NULL, '2023-04-06 08:26:14', NULL),
(3, 2, 1, 1, '2023-04-06 08:26:27', NULL),
(4, 1, 1, NULL, '2023-04-06 08:26:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `SID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `position` int(11) DEFAULT NULL,
  `salary` double NOT NULL,
  `phone` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`SID`, `name`, `surname`, `position`, `salary`, `phone`) VALUES
(1, 'สมชาย', 'สมสกุล', 2, 8000, '0800000000'),
(2, 'สมหญิง', 'สมสกุล', 1, 8200, '0801234567');

-- --------------------------------------------------------

--
-- Table structure for table `staffinfloor`
--

CREATE TABLE `staffinfloor` (
  `sifID` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `staff` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staffinfloor`
--

INSERT INTO `staffinfloor` (`sifID`, `floor`, `staff`) VALUES
(1, 2, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `statusID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `forWhat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`statusID`, `name`, `forWhat`) VALUES
(1, 'ว่าง', 'room'),
(2, 'จองแล้ว', 'room'),
(3, 'เข้าพัก', 'room'),
(5, 'จองห้อง', 'booking'),
(6, 'เข้าพักอยู่', 'booking'),
(7, 'หมดสัญญา', 'booking');

-- --------------------------------------------------------

--
-- Table structure for table `supply`
--

CREATE TABLE `supply` (
  `supID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `supply`
--

INSERT INTO `supply` (`supID`, `name`, `quantity`, `price`) VALUES
(1, 'ผ้าขนหนู', 50, 150),
(2, 'หมวกอาบน้ำ', 100, 20),
(3, 'ยาสีฟัน', 60, 79),
(4, 'แปรงสีฟัน', 40, 69),
(5, 'น้ำเปล่า', 100, 10);

-- --------------------------------------------------------

--
-- Table structure for table `supplyrecord`
--

CREATE TABLE `supplyrecord` (
  `supRID` int(11) NOT NULL,
  `supply` int(11) NOT NULL,
  `staff` int(11) DEFAULT NULL,
  `booking` int(11) DEFAULT NULL,
  `time` datetime NOT NULL,
  `reason` text DEFAULT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `supplyrecord`
--

INSERT INTO `supplyrecord` (`supRID`, `supply`, `staff`, `booking`, `time`, `reason`, `quantity`) VALUES
(1, 5, 2, NULL, '2023-03-06 10:20:00', 'เติมตู้เย็นหลังแขกออก', 5),
(2, 5, NULL, 1, '2023-04-06 08:30:44', NULL, 4);

-- --------------------------------------------------------

--
-- Table structure for table `visit`
--

CREATE TABLE `visit` (
  `VID` int(11) NOT NULL,
  `guest` int(11) NOT NULL,
  `recreation` int(11) NOT NULL,
  `timein` datetime NOT NULL,
  `timeout` datetime NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visit`
--

INSERT INTO `visit` (`VID`, `guest`, `recreation`, `timein`, `timeout`, `comment`) VALUES
(1, 1, 1, '2023-03-05 09:30:00', '2023-03-05 11:30:00', 'สะอาด บริการดี'),
(2, 1, 2, '2023-03-05 14:00:00', '2023-03-05 15:00:00', 'ดี');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`BID`),
  ADD KEY `guest` (`guest`),
  ADD KEY `room` (`room`),
  ADD KEY `status` (`status`) USING BTREE;

--
-- Indexes for table `floor`
--
ALTER TABLE `floor`
  ADD PRIMARY KEY (`FID`);

--
-- Indexes for table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`GID`);

--
-- Indexes for table `hotelservice`
--
ALTER TABLE `hotelservice`
  ADD PRIMARY KEY (`sevID`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`PID`);

--
-- Indexes for table `recreation`
--
ALTER TABLE `recreation`
  ADD PRIMARY KEY (`rcID`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`RID`),
  ADD KEY `floor` (`floor`),
  ADD KEY `type` (`type`),
  ADD KEY `status` (`status`) USING BTREE;

--
-- Indexes for table `roomtype`
--
ALTER TABLE `roomtype`
  ADD PRIMARY KEY (`rtID`);

--
-- Indexes for table `servicerecord`
--
ALTER TABLE `servicerecord`
  ADD PRIMARY KEY (`srID`),
  ADD KEY `service` (`service`),
  ADD KEY `staff` (`staff`),
  ADD KEY `booking` (`booking`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`SID`),
  ADD KEY `position` (`position`);

--
-- Indexes for table `staffinfloor`
--
ALTER TABLE `staffinfloor`
  ADD PRIMARY KEY (`sifID`),
  ADD KEY `floor` (`floor`),
  ADD KEY `staff` (`staff`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`statusID`);

--
-- Indexes for table `supply`
--
ALTER TABLE `supply`
  ADD PRIMARY KEY (`supID`);

--
-- Indexes for table `supplyrecord`
--
ALTER TABLE `supplyrecord`
  ADD PRIMARY KEY (`supRID`),
  ADD KEY `supply` (`supply`),
  ADD KEY `staff` (`staff`),
  ADD KEY `booking` (`booking`);

--
-- Indexes for table `visit`
--
ALTER TABLE `visit`
  ADD PRIMARY KEY (`VID`),
  ADD KEY `guest` (`guest`),
  ADD KEY `recreation` (`recreation`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `BID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `floor`
--
ALTER TABLE `floor`
  MODIFY `FID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `guest`
--
ALTER TABLE `guest`
  MODIFY `GID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hotelservice`
--
ALTER TABLE `hotelservice`
  MODIFY `sevID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `PID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `recreation`
--
ALTER TABLE `recreation`
  MODIFY `rcID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `RID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=507;

--
-- AUTO_INCREMENT for table `roomtype`
--
ALTER TABLE `roomtype`
  MODIFY `rtID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `servicerecord`
--
ALTER TABLE `servicerecord`
  MODIFY `srID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `staffinfloor`
--
ALTER TABLE `staffinfloor`
  MODIFY `sifID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `statusID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `supply`
--
ALTER TABLE `supply`
  MODIFY `supID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `supplyrecord`
--
ALTER TABLE `supplyrecord`
  MODIFY `supRID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `visit`
--
ALTER TABLE `visit`
  MODIFY `VID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`guest`) REFERENCES `guest` (`GID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`status`) REFERENCES `status` (`statusID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `booking_ibfk_3` FOREIGN KEY (`room`) REFERENCES `room` (`RID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`type`) REFERENCES `roomtype` (`rtID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `room_ibfk_2` FOREIGN KEY (`floor`) REFERENCES `floor` (`FID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `room_ibfk_3` FOREIGN KEY (`status`) REFERENCES `status` (`statusID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `servicerecord`
--
ALTER TABLE `servicerecord`
  ADD CONSTRAINT `servicerecord_ibfk_2` FOREIGN KEY (`staff`) REFERENCES `staff` (`SID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `servicerecord_ibfk_4` FOREIGN KEY (`service`) REFERENCES `hotelservice` (`sevID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `servicerecord_ibfk_5` FOREIGN KEY (`booking`) REFERENCES `booking` (`BID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`position`) REFERENCES `position` (`PID`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `staffinfloor`
--
ALTER TABLE `staffinfloor`
  ADD CONSTRAINT `staffinfloor_ibfk_1` FOREIGN KEY (`floor`) REFERENCES `floor` (`FID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `staffinfloor_ibfk_2` FOREIGN KEY (`staff`) REFERENCES `staff` (`SID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `supplyrecord`
--
ALTER TABLE `supplyrecord`
  ADD CONSTRAINT `supplyrecord_ibfk_1` FOREIGN KEY (`supply`) REFERENCES `supply` (`supID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `supplyrecord_ibfk_2` FOREIGN KEY (`staff`) REFERENCES `staff` (`SID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `supplyrecord_ibfk_3` FOREIGN KEY (`booking`) REFERENCES `booking` (`BID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `visit`
--
ALTER TABLE `visit`
  ADD CONSTRAINT `visit_ibfk_1` FOREIGN KEY (`guest`) REFERENCES `guest` (`GID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `visit_ibfk_2` FOREIGN KEY (`recreation`) REFERENCES `recreation` (`rcID`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
