import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function MaterialIconButtonsFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/bluetooth_(2)3.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/home_(2)3.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/wifi_(1)3.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f51b5",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  group: {
    width: "100%",
    height: 42,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 33,
    height: 31
  },
  image2: {
    width: 33,
    height: 42
  },
  image3: {
    width: 33,
    height: 33
  }
});

export default MaterialIconButtonsFooter2;
