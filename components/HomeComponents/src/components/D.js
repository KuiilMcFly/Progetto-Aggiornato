import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonViolet2 from "./MaterialButtonViolet2";
import MaterialButtonViolet3 from "./MaterialButtonViolet3";

function D(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonViolet2 style={styles.scanB}></MaterialButtonViolet2>
      <MaterialButtonViolet3 style={styles.stopScanB}></MaterialButtonViolet3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end"
  },
  scanB: {
    height: 59,
    width: 128,
    borderRadius: 15
  },
  stopScanB: {
    height: 61,
    width: 128,
    borderRadius: 15,
    marginTop: 13
  }
});

export default D;
