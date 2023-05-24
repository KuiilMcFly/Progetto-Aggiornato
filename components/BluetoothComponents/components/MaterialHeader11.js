import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialHeader11(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/left-arrow3.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.bluetooth}>BLUETOOTH</Text>
        <Image
          source={require("../assets/images/settings2.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  group: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  image: {
    width: 23,
    height: 32
  },
  bluetooth: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 84
  },
  image2: {
    width: 23,
    height: 32
  }
});

export default MaterialHeader11;
