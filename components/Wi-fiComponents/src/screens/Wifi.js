import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader11 from "../../../BluetoothComponents/components/MaterialHeader11";
import MaterialButtonViolet13 from "../components/MaterialButtonViolet13";
import MaterialIconButtonsFooter2 from "../../../BluetoothComponents/components/MaterialIconButtonsFooter2";
import { Button } from "react-native-elements";

function Wifi({navigation, ...props} ) {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <MaterialHeader11 title="Wi-fi" style={styles.materialHeader1}></MaterialHeader11>
        <MaterialButtonViolet13 onPress={props.onPress}
          style={styles.materialButtonViolet13}
        ></MaterialButtonViolet13>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >


       
          {props.scannedWifi.map(device => (
            <Button
              key={device.SSID}
              label={`${device.SSID}`}
              onPress={() => selectWifi(device)}
            
            />
          ))}
     

          </ScrollView>
        </View>
        <MaterialIconButtonsFooter2
          title="Wi-fi"
          navigation={navigation}
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
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  materialHeader1: {
    height: 56,
    width: "100%"
  },
  materialButtonViolet13: {
    height: 61,
    width: 127,
    borderRadius: 15
  },
  scrollArea: {
    width: "90%",
    height: "65%",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 460,
    width: 294
  },
  footerBluetooth1: {
    height: 56,
    width: "100%",
    justifyContent: 'center',
  }
});

export default Wifi;
