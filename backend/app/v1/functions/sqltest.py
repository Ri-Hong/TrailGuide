import mysql.connector
import os
import dotenv

dotenv.load_dotenv()


def closest_campground(lng: float, lat: float, database: str, table: str):
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
    query = f'''
    SELECT LATITUDE, LONGITUDE, Name_e, 111.045 * DEGREES(ACOS(COS(RADIANS(@lat))
     * COS(RADIANS(LATITUDE))
     * COS(RADIANS(LONGITUDE) - RADIANS(@lng))
     + SIN(RADIANS(@lat))
     * SIN(RADIANS(LATITUDE))))
     AS distance
    FROM {table}
    ORDER BY distance ASC
    LIMIT 0,5;
    '''
    # query = '''
    # SELECT LATITUDE, LONGITUDE, Name_e,
    # ((ACOS(SIN(@lat * PI() / 180) *
    # SIN(LATITUDE * PI() / 180) + COS(@lat * PI() / 180) *
    # COS(LATITUDE * PI() / 180) * COS((@lng - LONGITUDE) * PI() / 180)) * 180 / PI()) * 60 * 1.1515)
    # as distance FROM campgrounds ORDER BY distance ASC LIMIT 5;
    # '''
    cursor.execute(query)
    return_list = list(cursor)
    print(mydb)

    mydb.close()
    return return_list


if __name__ == "__main__":
    lng = 43.009722
    lat = -81.272778
    # lng = 44.22629733
    # lat = -76.45215738
    # result = closest_campground(lng, lat, "hackwestern", "campgrounds")
    result = closest_campground(lng, lat, "hackwestern", "washroom")
    for (LATITUDE, LONGITUDE, Name_e, distance) in result:
        print("Site: ", Name_e)
        print("Latitude: ", LATITUDE)
        print("Longitude: ", LONGITUDE)
        print("Distance: ", distance)
