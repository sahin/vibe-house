CREATE TABLE `applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fullName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`linkedinUrl` varchar(500),
	`founderType` enum('exited_founder','pef_member','superfounders_member','technical_founder','other') NOT NULL,
	`additionalNotes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `applications_id` PRIMARY KEY(`id`)
);
