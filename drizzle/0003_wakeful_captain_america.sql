CREATE TABLE `bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`roomId` int NOT NULL,
	`guestName` varchar(255) NOT NULL,
	`guestEmail` varchar(320),
	`checkIn` varchar(10) NOT NULL,
	`checkOut` varchar(10),
	`notes` text,
	`status` enum('active','upcoming','completed','cancelled') NOT NULL DEFAULT 'upcoming',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rooms` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`floor` varchar(50) NOT NULL,
	`notes` text,
	CONSTRAINT `rooms_id` PRIMARY KEY(`id`),
	CONSTRAINT `rooms_name_unique` UNIQUE(`name`)
);
