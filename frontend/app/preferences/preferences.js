import { Linking, Text, Button, SafeAreaView, TextInput, Pressable, Switch } from "react-native";
import { useState } from "react";
import { Stack, Slot, Link, useRouter } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./preferences.style.js";

  const handlePress = () => {
    // Replace '123456789' with the recipient's phone number
    const phoneNumber = "2496638092";

    // Replace 'Hello%20world' with your pre-filled message (URL encoded)
    const message = "Hello world";

    // Create the SMS URI
    const smsUri = `sms:${phoneNumber}?body=${message}`;

    // Open the SMS application
    Linking.openURL(smsUri).catch((err) =>
      console.error("Error opening SMS application:", err)
    );
  };

const Preferences = () => {
  //const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    console.log(isEnabled);
  } 
  const times = [
    { label: "10 minutes", value: 10 },
    { label: "15 minutes", value: 15 },
    { label: "20 minutes", value: 20 },
    { label: "25 minutes", value: 25 },
    { label: "30 minutes", value: 30 },
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
          style={[styles.dropdown, isFocus]}
          data={times}
          labelField="label"
          valueField="value"
          searchField=""
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          placeholder={!isFocus ? "Select item" : "..."}
        />
      </Pressable>

      <Pressable title="start" onPress={handlePress} style={styles.button}>
          <Text style={styles.next}>Start Hiking!</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Preferences;
