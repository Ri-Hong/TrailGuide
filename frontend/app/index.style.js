import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#55433b",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    font: FONT.medium,
    fontSize: 65,
    color: "#eeecda",
    marginHorizontal: 40,
  },
  subtitle: {
    fontSize: 40,
    color: "#6a885e",
    marginHorizontal: 40,
  },
  button: {
    marginLeft: 40,
    marginTop: 80,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 40,
    backgroundColor: "#eeecda",
  },
  start: {
    font: FONT.bold,
    fontSize: 20,
    width: "10%",
  },
});


export default styles;
