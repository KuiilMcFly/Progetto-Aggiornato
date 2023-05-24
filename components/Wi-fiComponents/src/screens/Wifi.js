import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader13 from "../components/MaterialHeader13";
import MaterialButtonViolet13 from "../components/MaterialButtonViolet13";
import MaterialIconButtonsFooter2 from "../components/MaterialIconButtonsFooter2";

function Wifi(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <MaterialHeader13 style={styles.materialHeader1}></MaterialHeader13>
        <MaterialButtonViolet13
          style={styles.materialButtonViolet13}
        ></MaterialButtonViolet13>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
        <MaterialIconButtonsFooter2
          style={styles.footerBluetooth1}
        ></MaterialIconButtonsFooter2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group1: {
    width: 360,
    height: 738,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22
  },
  materialHeader1: {
    height: 56,
    width: 360
  },
  materialButtonViolet13: {
    height: 61,
    width: 127,
    borderRadius: 15
  },
  scrollArea: {
    width: 294,
    height: 460,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 460,
    width: 294
  },
  footerBluetooth1: {
    height: 56,
    width: 360
  }
});

export default Wifi;
