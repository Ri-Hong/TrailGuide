import re

# The regex to match the coordinates
regex = r"(\d+)°(\d+)′(\d+)″\s*([NS])\s*(\d+)°(\d+)′(\d+)″\s*([EW])"


def extract_coordinates(coords: str):
    # Search for the regex in the coords
    match = re.search(regex, coords)

    # If a match is found, extract the groups
    if match:
        # The degrees, minutes, seconds, and direction of the latitude
        lat_deg = int(match.group(1))
        lat_min = int(match.group(2))
        lat_sec = int(match.group(3))
        lat_dir = match.group(4)

        # The degrees, minutes, seconds, and direction of the longitude
        lon_deg = int(match.group(5))
        lon_min = int(match.group(6))
        lon_sec = int(match.group(7))
        lon_dir = match.group(8)

        # Convert the latitude to decimals
        lat_dec = round(lat_deg + lat_min / 60 + lat_sec / 3600, 6)

        # Convert the longitude to decimals
        lon_dec = round(lon_deg + lon_min / 60 + lon_sec / 3600, 6)

        # Multiply the latitude by -1 if the direction is S
        if lat_dir == "S":
            lat_dec = -lat_dec

        # Multiply the longitude by -1 if the direction is W
        if lon_dir == "W":
            lon_dec = -lon_dec

        # Print the coordinates in decimals
        # print(f"Latitude: {lat_dec}, Longitude: {lon_dec}")
        # print(f"{lat_dec}, {lon_dec}")
        return [lat_dec, lon_dec]
    else:
        # No match found
        # print("Invalid coordinates")
        raise Exception("Error converting to coordinates")


if __name__ == "__main__":
    # The coordinates to convert
    coords = "43°0′35″ N  81°16′22″ W"
    print(extract_coordinates(coords))