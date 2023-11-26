import { View, Text, ScrollView, SafeAreaView, Pressable} from "react-native";
import { useState } from "react";
import { Stack, Slot, Link, useRouter } from "expo-router";
import styles from './index.style.js';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TrailGuide</Text>
      <Text style={styles.subtitle}>Your SMS-Powered Hiking Buddy</Text>

        <Link href="/map/map" style={styles.button}>
          <Pressable>
            <Text style={styles.start}>Start</Text>
          </Pressable>
        </Link>
    </View>
  );
};
export default Home;
