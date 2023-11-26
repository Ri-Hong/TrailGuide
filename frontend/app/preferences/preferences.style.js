import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  header: {
    marginTop: 100,
    marginBottom: 30,
    font: FONT.bold,
    fontSize: 60,
    color: "#3a2311",
  },

  optionBtn: {
    backgroundColor: "#6a885e",
    paddingHorizontal: 20,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 30,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    elevation: 20,
  },

  optionText: {
    font: FONT.regular,
    fontSize: 20,
    marginRight: 40,
    marginTop: 10,
    color: "#3a2311",
  },

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#bc6a46",
    //justifyContent: "center",
    alignItems: "center",
  },
  //   userName: {
  //     fontFamily: FONT.regular,
  //     fontSize: SIZES.large,
  //     color: COLORS.secondary,
  //   },
  //   welcomeMessage: {
  //     fontFamily: FONT.bold,
  //     fontSize: SIZES.xLarge,
  //     color: COLORS.primary,
  //     marginTop: 2,
  //   },
  searchContainer: {
    backgroundColor: "#6a885e",
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 40,
    borderRadius: 30,
    flexDirection: "column",
    //display: "block",
    justifyContent: "space-between",
    elevation: 20,
  },
  //   searchWrapper: {
  //     flex: 1,
  //     backgroundColor: COLORS.white,
  //     marginRight: SIZES.small,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: SIZES.medium,
  //     height: "100%",
  //   },

  checkin: {
    fontFamily: FONT.regular,
    fontSize: 20,
    width: "100%",
    color: "#3a2311",
    //height: "10%",
    paddingHorizontal: SIZES.small,
  },

  dropdown: {
    fontSize: 15,
    marginTop: 20,
    width: "100%",
    backgroundColor: "#eeecda",
    //height: "0%",
    paddingHorizontal: SIZES.medium,
    borderRadius: 10,
  },

  button: {
    marginRight: 20,
    marginTop: 80,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 40,
    backgroundColor: "#eeecda",
  },
  next: {
    font: FONT.bold,
    fontSize: 20,
  },

  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
