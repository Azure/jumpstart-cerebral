CREATE TABLE example_table (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);


CREATE TABLE Products (
	ProductID INT PRIMARY KEY,
	ProductName VARCHAR(100),
	Category VARCHAR(50),
	Description VARCHAR(100),
	Price DECIMAL(10, 2),
	SupplierID INT,
	DateAdded DATE
);

CREATE TABLE StoreInventory(
	ProductID INT,
	StoreID INT,
	StockLevel INT,
	ReorderThreshold INT,
	LastRestocked DATE,
	PRIMARY KEY (ProductID, StoreID),
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID), 
	FOREIGN KEY (StoreID) REFERENCES Stores(StoreID)
);

CREATE TABLE WarehouseInventory(
	ProductID INT,
	StockLevel INT,
	ReorderThreshold INT,
	LastRestocked DATE,
	StorageLocation VARCHAR(20),
	PRIMARY KEY (ProductID, StoreID),
FOREIGN KEY (ProductID) REFERENCES Products(ProductID), 
);

CREATE TABLE Sales (
	SaleID INT PRIMARY KEY,
	ProductID INT,
	StoreID INT,
	QuantitySold INT,
	SaleDate DATE,
	SalePrice DECIMAL(10, 2),
	PaymentMethod VARCHAR(20),
	CustomerID INT,
	RegisterID INT,
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Suppliers (
	SupplierID INT PRIMARY KEY,
	SupplierName VARCHAR(100),
	ContactName VARCHAR(100),
	PhoneNumber VARCHAR(15),
	Email VARCHAR(100),
	DeliveryLeadTimeDays INT
);

CREATE TABLE Customers (
	CustomerID INT PRIMARY KEY,
	CustomerName VARCHAR(100),
	Email VARCHAR(100),
	LoyaltyPoints INT,
	JoinDate DATE,
LastSeen DATE
);

CREATE TABLE Stores(
	StoreID INT PRIMARY KEY,
	StoreName VARCHAR(100),
	Address VARCHAR(100),
	City VARCHAR(100),
	StateCode CHAR(2),
	Zipcode CHAR(5)
);

CREATE TABLE Orders(
	OrderID INT PRIMARY KEY,
	OrderGenerated DATE,
	DeliveryDate  DATE,
	ProductID INT,
	Quantity INT,
	StoreID INT,
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
	FOREIGN KEY (StoreID) REFERENCES Stores(StoreID)
);

INSERT INTO StoreInventory (ProductID, StoreID, StockLevel, ReorderThreshold, LastRestocked) VALUES
(1, 1, 46, 50, '2024-08-15'),
(2, 1, 87, 50, '2024-09-01'),
(3, 1, 64, 50, '2024-08-01'),
(4, 1, 57, 30, '2024-08-15'),
(5, 1, 92, 50, '2024-09-01'),
(6, 1, 41, 30, '2024-08-15'),
(7, 1, 72, 40, '2024-08-15'),
(8, 1, 79, 50, '2024-08-15'),
(9, 1, 70, 50, '2024-08-01'),
(10, 1, 62, 30, '2024-08-01'),
(11, 1, 68, 50, '2024-08-15'),
(12, 1, 50, 40, '2024-09-01'),
(13, 1, 83, 40, '2024-08-15'),
(14, 1, 92, 30, '2024-09-01'),
(15, 1, 52, 50, '2024-08-01'),
(16, 1, 28, 40, '2024-08-01'),
(17, 1, 71, 40, '2024-08-01'),
(18, 1, 94, 40, '2024-08-15'),
(19, 1, 88, 30, '2024-08-01'),
(20, 1, 36, 40, '2024-08-15'),
(21, 1, 65, 50, '2024-08-15'),
(22, 1, 63, 50, '2024-08-01'),
(23, 1, 77, 50, '2024-09-01'),
(24, 1, 61, 40, '2024-08-15'),
(25, 1, 68, 50, '2024-08-15'),
(26, 1, 75, 50, '2024-08-15'),
(27, 1, 34, 40, '2024-08-15'),
(28, 1, 30, 30, '2024-08-15'),
(29, 1, 94, 40, '2024-09-01'),
(30, 1, 64, 40, '2024-08-01'),
(31, 1, 67, 30, '2024-08-15'),
(32, 1, 41, 30, '2024-09-01'),
(33, 1, 64, 30, '2024-08-15'),
(34, 1, 65, 30, '2024-08-15'),
(35, 1, 66, 30, '2024-08-01'),
(36, 1, 85, 30, '2024-08-15'),
(37, 1, 60, 30, '2024-08-15'),
(38, 1, 77, 30, '2024-08-15'),
(39, 1, 56, 30, '2024-09-01'),
(40, 1, 55, 30, '2024-08-01'),
(41, 1, 49, 30, '2024-08-01'),
(42, 1, 33, 40, '2024-09-01'),
(43, 1, 32, 50, '2024-08-01'),
(44, 1, 85, 50, '2024-09-01'),
(45, 1, 86, 30, '2024-08-01'),
(46, 1, 83, 30, '2024-08-15'),
(47, 1, 96, 50, '2024-08-15'),
(48, 1, 64, 50, '2024-08-15'),
(49, 1, 68, 40, '2024-08-15'),
(50, 1, 63, 30, '2024-08-01'),
(51, 1, 48, 30, '2024-08-01'),
(52, 1, 57, 50, '2024-08-01'),
(53, 1, 42, 40, '2024-08-01'),
(54, 1, 35, 40, '2024-08-15'),
(55, 1, 75, 50, '2024-09-01'),
(56, 1, 62, 50, '2024-09-01'),
(57, 1, 56, 50, '2024-08-15'),
(58, 1, 51, 40, '2024-08-15'),
(59, 1, 73, 40, '2024-08-15'),
(60, 1, 40, 30, '2024-09-01'),
(61, 1, 57, 40, '2024-08-01'),
(62, 1, 89, 30, '2024-08-01'),
(63, 1, 42, 40, '2024-08-01'),
(64, 1, 75, 50, '2024-08-15'),
(65, 1, 65, 40, '2024-08-01'),
(66, 1, 91, 40, '2024-09-01'),
(67, 1, 68, 40, '2024-08-15'),
(68, 1, 68, 30, '2024-09-01'),
(69, 1, 40, 40, '2024-08-01'),
(70, 1, 87, 50, '2024-09-01'),
(71, 1, 34, 30, '2024-08-01'),
(72, 1, 66, 40, '2024-08-01'),
(73, 1, 43, 30, '2024-09-01'),
(74, 1, 88, 30, '2024-08-15'),
(75, 1, 90, 40, '2024-08-15'),
(76, 1, 88, 40, '2024-08-15'),
(77, 1, 73, 30, '2024-08-15'),
(78, 1, 31, 40, '2024-09-01'),
(79, 1, 47, 40, '2024-08-15'),
(80, 1, 41, 30, '2024-08-15'),
(81, 1, 31, 40, '2024-08-15'),
(82, 1, 42, 50, '2024-08-01'),
(83, 1, 84, 30, '2024-08-01'),
(84, 1, 69, 40, '2024-08-15'),
(85, 1, 29, 30, '2024-08-15'),
(86, 1, 34, 50, '2024-09-01'),
(87, 1, 70, 30, '2024-09-01'),
(88, 1, 40, 40, '2024-09-01'),
(89, 1, 61, 40, '2024-08-01'),
(90, 1, 90, 50, '2024-09-01'),
(91, 1, 58, 40, '2024-08-15'),
(92, 1, 88, 30, '2024-08-01'),
(93, 1, 71, 30, '2024-08-15'),
(94, 1, 58, 50, '2024-08-15'),
(95, 1, 94, 40, '2024-08-15'),
(96, 1, 28, 30, '2024-08-15'),
(97, 1, 28, 40, '2024-08-01'),
(98, 1, 82, 30, '2024-08-01'),
(99, 1, 78, 40, '2024-09-01'),
(100, 1, 94, 50, '2024-09-01');