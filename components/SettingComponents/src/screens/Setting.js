import React, { Component, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHeader14 from "../components/MaterialHeader14";
import BtnSetting from "../components/BtnSetting";
import { NavigationContext } from '@react-navigation/native';

function Setting(props) {
  const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <MaterialHeader14 navigation={navigation} style={styles.materialHeader14}></MaterialHeader14>
        
        <Text style={styles.lingua}>LINGUA :</Text>
        <BtnSetting style={styles.btnSetting}></BtnSetting>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: "100%",
    height: "100%",
    alignItems: "center",
   
    alignSelf: "center",
  },
  materialHeader14: {
    height: 56,
    width: "100%",
  },
  lingua: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: '100%',
  },
  btnSetting: {
    height: 252,
    width: 112
  }
});

export default Setting;