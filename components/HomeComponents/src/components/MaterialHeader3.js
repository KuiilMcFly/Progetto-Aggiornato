import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

function MaterialHeader3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButtonColumnRowRow}>
        <View style={styles.leftIconButtonColumnRow}>
          <View style={styles.leftIconButtonColumn}>
            <TouchableOpacity style={styles.leftIconButton}></TouchableOpacity>
            <View style={styles.textWrapper}>
              <Text numberOfLines={1} style={styles.home}>
                HOME
              </Text>
            </View>
          </View>
          <Image
            source={require("../assets/images/settings.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
        <View style={styles.leftIconButtonColumnRowFiller}></View>
        <TouchableOpacity style={styles.rightIconButton}></TouchableOpacity>
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
  leftIconButton: {
    padding: 11
  },
  textWrapper: {
    marginTop: 1,
    marginLeft: 16
  },
  home: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  },
  leftIconButtonColumn: {
    width: 22,
    marginBottom: 23
  },
  image1: {
    width: 37,
    height: 45,
    marginLeft: 283,
    marginTop: 1
  },
  leftIconButtonColumnRow: {
    flexDirection: "row"
  },
  leftIconButtonColumnRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 11,
    alignItems: "center"
  },
  leftIconButtonColumnRowRow: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginLeft: 5,
    marginTop: 5
  }
});

export default MaterialHeader3;
