-- Users table to store both managers and drivers
CREATE TABLE Users (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Role ENUM('Manager', 'Driver') NOT NULL
);

-- Drivers' profile table
CREATE TABLE DriverProfiles (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    FullName VARCHAR(255) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Gender ENUM('Male', 'Female') NOT NULL,
    Phone VARCHAR(15) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    CDLLicenseNumber VARCHAR(50) NOT NULL,
    ExpirationDate DATE NOT NULL,
    ApprovalStatus ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);

-- Managers' profile table
CREATE TABLE ManagerProfiles (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    FullName VARCHAR(255) NOT NULL,
    Phone VARCHAR(15) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);

-- Approval history for tracking changes
CREATE TABLE ApprovalHistory (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    DriverProfileID INT NOT NULL,
    ManagerID INT NOT NULL,
    ApprovalStatus ENUM('Pending', 'Approved', 'Rejected') NOT NULL,
    ApprovalDate DATETIME NOT NULL,
    FOREIGN KEY (DriverProfileID) REFERENCES DriverProfiles(ID),
    FOREIGN KEY (ManagerID) REFERENCES ManagerProfiles(ID)
);
