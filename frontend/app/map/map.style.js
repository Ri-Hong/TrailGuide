import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bc6a46",
    //alignItems: "flex-end",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
  },

  map: {
    marginTop: 30,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 300,
  },

  subtitle: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#55433b",
    marginTop: 50,
    alignItems: "center",
  },

  search: {
    width: "70%",
    fontSize: 15,
    marginTop: 20,
    backgroundColor: "#eeecda",
    //height: "0%",
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  btnContainer: {
    alignItems: "flex-end",
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
