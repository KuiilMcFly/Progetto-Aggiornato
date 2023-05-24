import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader11 from "./components/MaterialHeader11";
import D from "./components/D";
import MaterialIconButtonsFooter2 from "./components/MaterialIconButtonsFooter2";
import CustomButtonBT from '../../components/CustomButtonBT';
import BluetoothStyles from '../../styles/BluetoothStyles';
import { Button } from "react-native-elements";


function IndexBluetooth({ navigation, ...props }) {
  return (
    <View style={styles.container}>
      <MaterialHeader11 navigation={navigation} title="Bluetooth" style={styles.materialHeader11}></MaterialHeader11>
      <D onPressPrimary={props.onPressPrimary} onPressViolet2={props.onPressViolet2} onPressDanger={props.onPressDanger} onPressViolet3={props.onPressViolet3} style={styles.bottoniBluetooth}></D>
      <View style={styles.scrollBluetooth}>
        <ScrollView
          contentContainerStyle={styles.scrollBluetooth_contentContainerStyle}
        >
            {props.scannedDevices.map(device => (
          <Button
            key={device.id}
            title={`${device.name}`}
            onPress={() => props.onPressConnect(device)}
     
          />
        ))}
        </ScrollView>
      </View>
      <MaterialIconButtonsFooter2
        navigation={navigation}
        style={styles.footerBluetooth}
      ></MaterialIconButtonsFooter2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  materialHeader11: {
    width: "100%",
    height: 56,
  },
  bottoniBluetooth: {
    width: 324,
    height: 133
  },
  scrollBluetooth: {
    width: "90%",
    height: "60%",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollBluetooth_contentContainerStyle: {
    height: 425,
    width: "100%",
  },
  footerBluetooth: {
    height: 56,
    width: "100%",
  }
});

export default IndexBluetooth;
