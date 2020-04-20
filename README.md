# customer-geolocation
API that shows the geolocation of customers.
The geolocation service is provided via the TomTom API.

### How to run the project
To run this project on your machine, just make sure you have docker installed, then run the `docker-compose up`
command on the project root level.

### Know issues 
* If docker raises a `error 500: drive has not been shared` when building the application, change the Docker settings to allow it to share the drive where the project is in.
* If the api can't connect to the db, try the following:
    * press `ctrl + C` to stop the containers, then run `docker-compose up` again
    * if it didn't work, rebuild the application running `docker-compose down` an then `docker-compose up`
