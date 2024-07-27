# 4353assignment4

Assignment 4: Database Implementation
Description
In this assignment, you will create the database and connect it to your web or mobile application. You can use any type of database, either RDBMS or NoSQL.

Problem Statement
Same as Assignment 1. 

Additional Details
You can use RDBMS or NoSQL database.

Database must include the following tables/documents:

UserCredentials: (ID & password), password should be encrypted.
UserProfile: Stores user details like full name, address, city, state, zipcode, skills, preferences, and availability.
EventDetails: Stores details of the events such as event name, description, location, required skills, urgency, and event date.
VolunteerHistory: Tracks volunteer participation in events.
States: Stores state codes and names (if required).
Important Deliverables
Validations: Ensure validations are in place for required fields, field types, and field lengths.
Data Retrieval and Display: Backend should retrieve data from the database and display it to the front end.
Data Persistence: Form data should be populated from the backend. The backend should receive data from the front end, validate it, and persist it to the database.
Unit Tests: Any new code added should be covered by unit tests. Keep code coverage above 80%.
Pointers/Guidelines for Choosing a Database
RDBMS: If you choose a relational database, consider using MySQL, PostgreSQL, or SQLite. These databases are great for structured data with complex relationships.

Example: MySQL, PostgreSQL
Benefits: ACID compliance, complex queries, and relationships.
Drawbacks: Requires schema definition, less flexible with unstructured data.
NoSQL: If you choose a NoSQL database, consider using MongoDB or Firebase. These databases are great for unstructured data and flexible schemas.

Example: MongoDB, Firebase
Benefits: Flexible schema, easy scalability, and handling unstructured data.
Drawbacks: Less suitable for complex queries and transactions.
