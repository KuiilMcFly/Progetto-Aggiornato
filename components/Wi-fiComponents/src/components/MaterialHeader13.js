import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialHeader13(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/left-arrow4.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.wifi}>WIFI</Text>
        <Image
          source={require("../assets/images/settings3.png")}
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
    justifyContent: "center",
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
    width: 336,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 7
  },
  image: {
    width: 21,
    height: 37
  },
  wifi: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 20,
    width: 33
  },
  image2: {
    width: 23,
    height: 40
  }
});

export default MaterialHeader13;
