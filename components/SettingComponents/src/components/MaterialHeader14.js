import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialHeader14(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/left-arrow5.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.setting}>SETTING</Text>
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
    width: "100%",
    height: 24,
    flexDirection: "row",
    
    alignItems: "center",
  },
  image: {
    width: 22,
    height: 24
  },
  setting: {
    fontFamily: "roboto-700",
    color: "rgba(255,248,248,1)",
    height: 17,
    width: 64,
    marginLeft: '36%',
  }
});

export default MaterialHeader14;
