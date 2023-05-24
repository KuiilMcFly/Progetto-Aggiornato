import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader11 from "./components/MaterialHeader11";
import D from "./components/D";
import MaterialIconButtonsFooter2 from "./components/MaterialIconButtonsFooter2";

function Index(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader11 style={styles.materialHeader11}></MaterialHeader11>
      <D style={styles.bottoniBluetooth}></D>
      <View style={styles.scrollBluetooth}>
        <ScrollView
          contentContainerStyle={styles.scrollBluetooth_contentContainerStyle}
        ></ScrollView>
      </View>
      <MaterialIconButtonsFooter2
        style={styles.footerBluetooth}
      ></MaterialIconButtonsFooter2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 360,
    height: 736
  },
  materialHeader11: {
    width: 360,
    height: 56
  },
  bottoniBluetooth: {
    width: 324,
    height: 133
  },
  scrollBluetooth: {
    width: 317,
    height: 425,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollBluetooth_contentContainerStyle: {
    height: 425,
    width: 317
  },
  footerBluetooth: {
    height: 56,
    width: 360
  }
});

export default Index;
