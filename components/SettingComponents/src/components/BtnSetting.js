import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonViolet19 from "./MaterialButtonViolet19";
import MaterialButtonViolet20 from "./MaterialButtonViolet20";
import MaterialButtonViolet21 from "./MaterialButtonViolet21";
import MaterialButtonViolet22 from "./MaterialButtonViolet22";

function BtnSetting(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonViolet19
        style={styles.materialButtonViolet19}
      ></MaterialButtonViolet19>
      <MaterialButtonViolet20
        style={styles.materialButtonViolet20}
      ></MaterialButtonViolet20>
      <MaterialButtonViolet21
        style={styles.materialButtonViolet21}
      ></MaterialButtonViolet21>
      <MaterialButtonViolet22
        style={styles.materialButtonViolet22}
      ></MaterialButtonViolet22>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonViolet19: {
    height: 52,
    width: 112,
    borderRadius: 15
  },
  materialButtonViolet20: {
    height: 52,
    width: 112,
    borderRadius: 15,
    marginTop: 148
  },
  materialButtonViolet21: {
    height: 52,
    width: 112,
    borderRadius: 15,
    marginTop: -184
  },
  materialButtonViolet22: {
    height: 52,
    width: 112,
    borderRadius: 15,
    marginTop: 13
  }
});

export default BtnSetting;
