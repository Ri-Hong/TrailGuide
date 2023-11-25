import mysql.connector
import os
import dotenv

dotenv.load_dotenv()


def closest_campground(lng: float, lat: float, database: str):
    host = os.getenv('MYSQL_HOST')
    user = os.getenv('MYSQL_USER')
    password = os.getenv('MYSQL_PASSWORD')
    mydb = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database
    )
    cursor = mydb.cursor()

    print(mydb.is_connected())

    cursor.execute('SET @lng=' + str(lng) + ';')
    cursor.execute('SET @lat=' + str(lat) + ';')
    query = '''
    SELECT LATITUDE, LONGITUDE, Name_e, 111.045 * DEGREES(ACOS(COS(RADIANS(@lat))
     * COS(RADIANS(LATITUDE))
     * COS(RADIANS(LONGITUDE) - RADIANS(@lng))
     + SIN(RADIANS(@lat))
     * SIN(RADIANS(LATITUDE))))
     AS distance_in_km
    FROM campgrounds
    ORDER BY distance_in_km ASC
    LIMIT 0,5;
    '''
    cursor.execute(query)
    return_list = list(cursor)
    print(mydb)

    mydb.close()
    return return_list


if __name__ == "__main__":
    # lng = 43.009722
    # lat = -81.272778
    lng = 69.14111382
    lat = -140.2453597
    result = closest_campground(lng, lat, "hackwestern")
    for (LATITUDE, LONGITUDE, Name_e, distance_in_km) in result:
        print("Site: ", Name_e)
        print("Latitude: ", LATITUDE)
        print("Longitude: ", LONGITUDE)
        print("Distance: ", distance_in_km)