import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import MaterialHeader11 from "./components/MaterialHeader11";
import D from "./components/D";
import MaterialIconButtonsFooter2 from "./components/MaterialIconButtonsFooter2";
import CustomConnectBt from "../CustomConnectBt";


function IndexBluetooth({ navigation, ...props }) {

  const renderItem = ({ item }) => (
    <CustomConnectBt
      key={item.id}
      label={`${item.name}`}
      onPress={() => props.onPressConnect(item)}
    />
  );
  const ItemSeparator = () => (
    <View style={{ height: 1, width: '100%', backgroundColor: '#607D8B' }} />
  );

  return (
    <View style={styles.container}>
      <MaterialHeader11 navigation={navigation} title="Bluetooth" style={styles.materialHeader11}></MaterialHeader11>
      <D onPressPrimary={props.onPressPrimary} onPressViolet2={props.onPressViolet2} onPressDanger={props.onPressDanger} onPressViolet3={props.onPressViolet3} style={styles.bottoniBluetooth}></D>
      <View style={styles.scrollBluetooth}>
        <FlatList
          contentContainerStyle={styles.scrollBluetooth_contentContainerStyle}
          data={props.scannedDevices}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => item.id}
        />
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
    height: "65%",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollBluetooth_contentContainerStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  footerBluetooth: {
    height: 56,
    width: "100%",
  }
});

export default IndexBluetooth;
