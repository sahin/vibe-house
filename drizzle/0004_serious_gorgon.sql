ALTER TABLE `bookings` MODIFY COLUMN `checkIn` datetime NOT NULL;--> statement-breakpoint
ALTER TABLE `bookings` MODIFY COLUMN `checkOut` datetime;--> statement-breakpoint
ALTER TABLE `bookings` ADD `updatedAt` timestamp;--> statement-breakpoint
ALTER TABLE `rooms` ADD `description` text;--> statement-breakpoint
ALTER TABLE `rooms` ADD `createdAt` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `rooms` ADD `updatedAt` timestamp;--> statement-breakpoint
ALTER TABLE `rooms` DROP COLUMN `notes`;