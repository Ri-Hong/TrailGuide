import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bc6a46",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  map: {
    marginTop: 30,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 100,
  },
  button: {
    marginRight: 20,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 40,
    backgroundColor: "#eeecda",
  },
  next: {
    font: FONT.bold,
    fontSize: 20,
  },
});

export default styles;
