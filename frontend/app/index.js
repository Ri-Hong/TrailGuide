import { View, Text, ScrollView, SafeAreaView, Pressable} from "react-native";
import { useState } from "react";
import { Stack, Slot, Link, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>hihiifffffii</Text>
      <Text>blahhhh</Text>
      <Text>awfswe</Text>

      <Link href="/map/map">
        <Pressable>
          <Text>Start</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};
export default Home;
