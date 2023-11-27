import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Stack, Slot, Link, useRouter } from "expo-router";
import styles from "./map.style.js";

import { DOMParser } from "xmldom"; // for parsing your KLM string, converting it to an XML doc
import { kml } from "@tmcw/togeojson"; // for converting KLM docs to JSON
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import Geojson from "react-native-geojson";
//import RNFS from "react-native-fs";

const Map = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>Plan Your Trip</Text>
        <TextInput
          style={styles.search}
          //value={searchTerm}
          //onChange={() => {}}
          placeholder="Toronto, Ontario"
        ></TextInput>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.0052909289918,
          longitude: -81.27221601471572,
          latitudeDelta: 0.015,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline
          coordinates={[
            { latitude: 43.004273512210666, longitude: -81.27721430783038 },
            { latitude: 43.00356569806975, longitude: -81.27374481011194 },
            { latitude: 43.00371592488859, longitude: -81.2729350890655 },
            { latitude: 43.00609194218213, longitude: -81.27187993020455 },
            { latitude: 43.00627780452986, longitude: -81.27178048117943 },
            { latitude: 43.00615655942636, longitude: -81.27129648895426 },
            { latitude: 43.006110349328054, longitude: -81.27078539615526 },
            { latitude: 43.00615205182938, longitude: -81.27057437147694 },
            { latitude: 43.006389223599705, longitude: -81.27025334622404 },
            { latitude: 43.00712408839451, longitude: -81.2699800882524 },

            { latitude: 43.00796992871746, longitude: -81.26993280460523 },
            { latitude: 43.007307308892166, longitude: -81.26551241825227 },
            { latitude: 43.00670014214952, longitude: -81.26538821048302 },
          ]}
          strokeColor="orange"
          strokeWidth={6}
          lineCap="round"
          lineDashPattern={[0]}
        />
      </MapView>

      {/* <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView> */}
      {/* <Marker
                coordinate={{ latitude: 13.406, longitude: 123.3753 }}
                title="testt"
                description="RTeerster"
            ></Marker> */}
      <View style={styles.btnContainer}>
        <Link href="/preferences/preferences" style={styles.button}>
          <Pressable>
            <Text style={styles.next}>Next</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};
export default Map;
