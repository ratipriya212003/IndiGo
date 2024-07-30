This IndiGo project consists of Frontend , Backend and Admin folder . The Admin folder consist of Flight List and Update option . Whenever a flight detail is updated , it does to the database . Kafaka Producer gets notifies about that updated data and makes the Kafka consumer send an email to all the passengers asscoiated with that particular flight.
The Frontend consits of a search fligth option which opens only when the user logins in . on enetring the flight details , it displays all the information of the particular flight so that anyone can see the latest flight changes .

Tech Stack 
Frontend-React
Backend-Node and Express
Databse-MongoDB
Real Time Updates- Kafka
