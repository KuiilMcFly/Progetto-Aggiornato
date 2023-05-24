import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialHeader3 from "../components/MaterialHeader3";
import D from "../components/D";
import MaterialIconButtonsFooter2 from "../components/MaterialIconButtonsFooter2";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.schermataHome}>
        <MaterialHeader3 style={styles.headerHome}></MaterialHeader3>
        <D style={styles.bottoniHome}></D>
        <MaterialIconButtonsFooter2
          style={styles.footerHome}
        ></MaterialIconButtonsFooter2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  schermataHome: {
    width: 361,
    height: 736,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    alignSelf: "center"
  },
  headerHome: {
    width: 361,
    height: 56
  },
  bottoniHome: {
    width: 126,
    height: 133
  },
  footerHome: {
    height: 56,
    width: 360
  }
});

export default Home;
