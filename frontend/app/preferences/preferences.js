import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable, Switch } from "react-native";
import { useState } from "react";
import { Stack, Slot, Link, useRouter } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./preferences.style.js";

const Preferences = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const times = [
    { label: "10 minutes", value: 10 },
    { label: "15 minutes", value: 10 },
    { label: "20 minutes", value: 10 },
    { label: "25 minutes", value: 10 },
    { label: "30 minutes", value: 10 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Before you start...</Text>

      <Pressable style={styles.optionBtn}>
        <Text style={styles.optionText}>Weather Notifications</Text>
        <Switch
          //trackColor={{ false: "#767577", true: "#81b0ff" }}
          //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Pressable>
      <Pressable style={styles.searchContainer}>
        <Text style={styles.checkin}>Check-in Interval</Text>
        <Dropdown
          style={styles.searchInput}
          data={times}
        />
      </Pressable>

      <Link href="/preferences/preferences" style={styles.button}>
        <Pressable>
          <Text style={styles.next}>Next</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};
export default Preferences;
