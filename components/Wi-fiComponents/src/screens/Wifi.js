import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader11 from "../../../BluetoothComponents/components/MaterialHeader11";
import MaterialButtonViolet13 from "../components/MaterialButtonViolet13";
import MaterialIconButtonsFooter2 from "../../../BluetoothComponents/components/MaterialIconButtonsFooter2";
import { Button } from "react-native-elements";
import CustomConnectBt from "../../../CustomConnectBt";
import { FlatList } from 'react-native';

function Wifi({ navigation, ...props }) {

  const renderItem = ({ item }) => (
    <CustomConnectBt
      key={item.SSID}
      label={`${item.SSID}`}
      onPress={() => props.onPressConnect(item)}
    />
  );
  return (
    <View style={styles1.container}>
      <View style={styles1.group1}>
        <MaterialHeader11 navigation={navigation} title="Wi-fi" style={styles1.materialHeader1}></MaterialHeader11>
        <MaterialButtonViolet13 onPress={props.onPress}
          style={styles1.materialButtonViolet13}
        ></MaterialButtonViolet13>
        <View style={styles1.scrollArea}>
          <FlatList
            style={styles1.scrollArea_contentContainerStyle}
            data={props.scannedWifi}
            renderItem={renderItem}
            keyExtractor={item => item.SSID}
          />
        </View>
        <MaterialIconButtonsFooter2
          title="Wi-fi"
          navigation={navigation}
          style={styles1.footerBluetooth1}
        ></MaterialIconButtonsFooter2>
      </View>
    </View>
  );
}

export const styles1 = StyleSheet.create({
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
    height: '100%',
    width: '100%',
    padding: 10,
    gap: 10,
  },
  footerBluetooth1: {
    height: 56,
    width: "100%",
    justifyContent: 'center',
  }
});

export default Wifi;
