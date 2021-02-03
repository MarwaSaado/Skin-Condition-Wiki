-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2021 at 08:06 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skincondition`
--

-- --------------------------------------------------------

--
-- Table structure for table `skin`
--

CREATE TABLE `skin` (
  `id` varchar(50) NOT NULL,
  `cond` text NOT NULL,
  `description` text NOT NULL,
  `isCreated` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skin`
--

INSERT INTO `skin` (`id`, `cond`, `description`, `isCreated`) VALUES
('1R2QQ3', '20', '20', 0),
('ASDASD', 'condASD', 'descASD', 0),
('ASDASD1', 'condASD', 'descASD', 1),
('QQQQQQ', '111', '111', 1),
('QWEQEW', 'sdasdasd', 'sdafasfafd', 1),
('QWEQWE', 'QEWQWE', 'QWEQWE', 2),
('REGGW2', 'sadasd', 'asdasd', 1),
('T42YU3', 'condition 12', 'description 12', 2),
('T4FEE3', 'condition 10', 'description 10', 2),
('TTEVSD2', 'condition 1112', 'asdasdas', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(1, 'user1@abc.com', '$2b$10$wQIaWKU0WM3K7mPvVCvlnuVudxAD.5dg00SN/Z1Efcgv5tfh70nAq'),
(2, 'user2@abc.com', '$2b$10$zebioVOSJysfzM0FRYauvedZnwNWbrQJpzImgEWyqb8wWRKFtZ72.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `skin`
--
ALTER TABLE `skin`
  ADD UNIQUE KEY `index1` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
