import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonPrimary from "./MaterialButtonPrimary";
import MaterialButtonViolet2 from "./MaterialButtonViolet2";
import MaterialButtonDanger from "./MaterialButtonDanger";
import MaterialButtonViolet3 from "./MaterialButtonViolet3";

function D(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.attivaRow}>
        <MaterialButtonPrimary style={styles.attiva}></MaterialButtonPrimary>
        <View style={styles.attivaFiller}></View>
        <MaterialButtonViolet2 style={styles.scanB}></MaterialButtonViolet2>
      </View>
      <View style={styles.disattivaRow}>
        <MaterialButtonDanger style={styles.disattiva}></MaterialButtonDanger>
        <View style={styles.disattivaFiller}></View>
        <MaterialButtonViolet3 style={styles.stopScanB}></MaterialButtonViolet3>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  attiva: {
    height: 59,
    width: 128,
    borderRadius: 15
  },
  attivaFiller: {
    flex: 1,
    flexDirection: "row"
  },
  scanB: {
    height: 59,
    width: 128,
    borderRadius: 15
  },
  attivaRow: {
    height: 59,
    flexDirection: "row"
  },
  disattiva: {
    height: 61,
    width: 128,
    borderRadius: 15
  },
  disattivaFiller: {
    flex: 1,
    flexDirection: "row"
  },
  stopScanB: {
    height: 61,
    width: 128,
    borderRadius: 15
  },
  disattivaRow: {
    height: 61,
    flexDirection: "row",
    marginTop: 13
  }
});

export default D;
