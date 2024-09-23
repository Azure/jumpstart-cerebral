import random
from datetime import datetime
import time
import pyodbc
import os
from dotenv import load_dotenv

load_dotenv()

driver = os.getenv('DRIVER')
server = os.getenv('SERVER')
database = os.getenv('DATABASE')
username = os.getenv('UID')
password = os.getenv('PWD')

# Connect to the SQLite database
conn = pyodbc.connect(
    f'DRIVER={driver};'
    f'SERVER={server};'
    f'DATABASE={database};'
    f'UID={username};'
    f'PWD={password}'
)
cursor = conn.cursor()

def generate_intial_data():

    # Insert data into the Products table
    products = [
        (1, 'Bananas', 'Fruits', 'Fresh bananas', 0.99, 1, datetime.now().date()),
        (2, 'Apples', 'Fruits', 'Red apples', 1.49, 2, datetime.now().date()),
        (3, 'Oranges', 'Fruits', 'Juicy oranges', 1.29, 3, datetime.now().date()),
        (4, 'Broccoli', 'Vegetables', 'Fresh broccoli', 2.49, 4, datetime.now().date()),
        (5, 'Carrots', 'Vegetables', 'Organic carrots', 1.99, 5, datetime.now().date()),
        (6, 'Tomatoes', 'Vegetables', 'Ripe tomatoes', 2.99, 6, datetime.now().date()),
        (7, 'Chicken Breast', 'Meat', 'Boneless chicken breast', 5.99, 7, datetime.now().date()),
        (8, 'Ground Beef', 'Meat', 'Lean ground beef', 4.99, 8, datetime.now().date()),
        (9, 'Salmon Fillet', 'Seafood', 'Fresh salmon fillet', 9.99, 9, datetime.now().date()),
        (10, 'Shrimp', 'Seafood', 'Frozen shrimp', 12.99, 10, datetime.now().date()),
        (11, 'Milk', 'Dairy', 'Whole milk', 3.49, 11, datetime.now().date()),
        (12, 'Cheddar Cheese', 'Dairy', 'Sharp cheddar cheese', 4.99, 12, datetime.now().date()),
        (13, 'Yogurt', 'Dairy', 'Greek yogurt', 1.99, 13, datetime.now().date()),
        (14, 'Bread', 'Bakery', 'Whole wheat bread', 2.49, 14, datetime.now().date()),
        (15, 'Bagels', 'Bakery', 'Plain bagels', 3.99, 15, datetime.now().date()),
        (16, 'Eggs', 'Dairy', 'Large eggs', 2.99, 16, datetime.now().date()),
        (17, 'Orange Juice', 'Beverages', 'Freshly squeezed orange juice', 4.99, 17, datetime.now().date()),
        (18, 'Coffee', 'Beverages', 'Ground coffee', 7.99, 18, datetime.now().date()),
        (19, 'Cereal', 'Pantry', 'Whole grain cereal', 3.99, 19, datetime.now().date()),
        (20, 'Pasta', 'Pantry', 'Spaghetti pasta', 1.49, 20, datetime.now().date())
    ]

    cursor.executemany('''
    INSERT INTO Products (ProductID, ProductName, Category, Description, Price, SupplierID, DateAdded)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', products)

    # Insert data into the StoreInventory table
    store_inventory = [
        (1, 1, 100, 10, datetime.now().date()),
        (2, 2, 200, 20, datetime.now().date()),
        # Add more records up to 20
        (20, 20, 2000, 200, datetime.now().date())
    ]

    cursor.executemany('''
    INSERT INTO StoreInventory (ProductID, StoreID, StockLevel, ReorderThreshold, LastRestocked)
    VALUES (?, ?, ?, ?, ?)
    ''', store_inventory)

    # Insert data into the WarehouseInventory table
    warehouse_inventory = [
        (1, 1000, 100, datetime.now().date(), 'Location1'),
        (2, 2000, 200, datetime.now().date(), 'Location2'),
        # Add more records up to 20
        (20, 20000, 2000, datetime.now().date(), 'Location20')
    ]

    cursor.executemany('''
    INSERT INTO WarehouseInventory (ProductID, StockLevel, ReorderThreshold, LastRestocked, StorageLocation)
    VALUES (?, ?, ?, ?, ?)
    ''', warehouse_inventory)

    # Insert data into the Sales table
    sales = [
        (1, 1, 1, 10, datetime.now().date(), 100.00, 'Credit Card', 1, 1),
        (2, 2, 2, 20, datetime.now().date(), 200.00, 'Cash', 2, 2),
        # Add more records up to 20
        (20, 20, 20, 200, datetime.now().date(), 2000.00, 'Debit Card', 20, 20)
    ]

    cursor.executemany('''
    INSERT INTO Sales (SaleID, ProductID, StoreID, QuantitySold, SaleDate, SalePrice, PaymentMethod, CustomerID, RegisterID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', sales)

    # Insert data into the Suppliers table
    suppliers = [
        (1, 'Supplier1', 'Contact1', '1234567890', 'contact1@example.com', 5),
        (2, 'Supplier2', 'Contact2', '0987654321', 'contact2@example.com', 10),
        # Add more records up to 20
        (20, 'Supplier20', 'Contact20', '1122334455', 'contact20@example.com', 100)
    ]

    cursor.executemany('''
    INSERT INTO Suppliers (SupplierID, SupplierName, ContactName, PhoneNumber, Email, DeliveryLeadTimeDays)
    VALUES (?, ?, ?, ?, ?, ?)
    ''', suppliers)

    # Insert data into the Customers table
    customers = [
        (1, 'Customer1', 'customer1@example.com', 100, datetime.now().date(), datetime.now().date()),
        (2, 'Customer2', 'customer2@example.com', 200, datetime.now().date(), datetime.now().date()),
        # Add more records up to 20
        (20, 'Customer20', 'customer20@example.com', 2000, datetime.now().date(), datetime.now().date())
    ]

    cursor.executemany('''
    INSERT INTO Customers (CustomerID, CustomerName, Email, LoyaltyPoints, JoinDate, LastSeen)
    VALUES (?, ?, ?, ?, ?, ?)
    ''', customers)

    # Insert data into the Stores table
    stores = [
        (1, 'Contoso Market', '1383 Indian Trace', 'Weston', 'FL', '33327')
    ]

    cursor.executemany('''
    INSERT INTO Stores (StoreID, StoreName, Address, City, StateCode, Zipcode)
    VALUES (?, ?, ?, ?, ?, ?)
    ''', stores)

    # Insert data into the Orders table
    orders = [
        (1, datetime.now().date(), datetime.now().date(), 1, 10, 1),
        (2, datetime.now().date(), datetime.now().date(), 2, 20, 2),
        # Add more records up to 20
        (20, datetime.now().date(), datetime.now().date(), 20, 200, 20)
    ]

    cursor.executemany('''
    INSERT INTO Orders (OrderID, OrderGenerated, DeliveryDate, ProductID, Quantity, StoreID)
    VALUES (?, ?, ?, ?, ?, ?)
    ''', orders)

    # Commit the changes and close the connection
    conn.commit()
    conn.close()

    print("Data insertion completed successfully.")

def generate_transaction(sale_id):
    product_id = random.randint(1, 20)
    store_id = random.randint(1, 20)
    quantity_sold = random.randint(1, 10)
    sale_date = datetime.now().date()
    sale_price = round(random.uniform(1.0, 100.0), 2)
    payment_method = random.choice(['Credit Card', 'Cash', 'Debit Card'])
    customer_id = random.randint(1, 20)
    register_id = random.randint(1, 5)
        
    return (sale_id, product_id, store_id, quantity_sold, sale_date, sale_price, payment_method, customer_id, register_id)

def generate_transactions():
    
    sale_id = 1

    # Generate two transactions
    transactions = [generate_transaction(sale_id + i) for i in range(2)]
    cursor.executemany('''
    INSERT INTO Sales (SaleID, ProductID, StoreID, QuantitySold, SaleDate, SalePrice, PaymentMethod, CustomerID, RegisterID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', transactions)
    
    conn.commit()
    conn.close()
    print(f"Inserted 2 transactions at {datetime.now()}")


if __name__ == '__main__':
    print("Starting transaction generation every 30 seconds...")
    generate_intial_data()

    while True:
        generate_transactions()
        time.sleep(60)
