import { View, Text, ScrollView, SafeAreaView, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Stack, Slot, Link, useRouter } from "expo-router";
import styles from "./map.style.js";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import Geojson from "react-native-geojson";

const Map = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>hihiiwasdfari</Text>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        // region={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.015,
        //   longitudeDelta: 0.0121,
        // }}
      ></MapView>
      {/* <Marker
                coordinate={{ latitude: 13.406, longitude: 123.3753 }}
                title="testt"
                description="RTeerster"
            ></Marker> */}
      <Link href="/preferences/preferences" style={styles.button}>
        <Pressable>
          <Text style={styles.next}>Next</Text>
        </Pressable>
      </Link>
    </View>
  );
};
export default Map;
