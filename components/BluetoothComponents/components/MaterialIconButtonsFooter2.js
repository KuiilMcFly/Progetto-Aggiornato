import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

function MaterialIconButtonsFooter2({ navigation, ...props }) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
      <TouchableOpacity onPress={() => navigation.navigate('bluetooth')}>
        <Image
          source={require("../assets/images/bluetooth_(2)3.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image
        source={require("../assets/images/home_(2)3.png")}
        resizeMode="contain"
        style={styles.image2}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Wifi')}>
        <Image
          source={require("../assets/images/wifi_(1)3.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
    </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f51b5",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },

  group: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
  
    
  },
  image: {
    width: 33,
    height: 31
  },
  image2: {
    width: 33,
    height: 42
  },
  image3: {
    width: 33,
    height: 33
  }
});

export default MaterialIconButtonsFooter2;
