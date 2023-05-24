import React, {useState, useEffect, useRef} from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import {LogBox} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import styles from '../styles';
import Base64 from '../components/Base64';
import {useNavigation} from '@react-navigation/native';
import {PermissionsAndroid, Platform} from 'react-native';
import {State as BleState} from 'react-native-ble-plx';
import WifiManager from 'react-native-wifi-reborn';
import BluetoothStyles from '../styles/BluetoothStyles';
import CustomButtonBT from '../components/CustomButtonBT';
import {Wifi} from '../components/Wi-fiComponents';

const WifiScreen = props => {
  const [passwordWifi, setPasswordWifi] = useState('');
  const [scannedWifi, setScannedWifi] = useState([]);
  const [scannedDeviceCount, setScannedDeviceCount] = useState(0);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [characteristicUUID, setCharacteristicUUID] = useState(null);

  const [isDisconnectedModalVisible, setIsDisconnectedModalVisible] =
    useState(false);

  const navigation = useNavigation();

  useEffect(() => {});

  const requestLocationPermission = async () => {
    try {
      const isCoarseGranted = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        {
          title: 'Location permission for GPS scanning',
          message: 'Whatever message you want to show',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (isCoarseGranted === RESULTS.GRANTED) {
        console.log('Location permission for Bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for Bluetooth scanning revoked');
        return false;
      }
    } catch (error) {
      console.warn(error);
      return false;
    }
  };

  function deviceScan() {
    requestLocationPermission().then(permission => {
      if (permission) {
        WifiManager.isEnabled().then(
          res => {
            if (res) {
              let timerId: number;
              const wifiList = new Map();
              WifiManager.loadWifiList().then(wifi => {
                console.log(wifi);
                wifi.forEach(element => {
                  if (!wifiList.has(element.SSID)) {
                    wifiList.set(element.SSID, {
                      SSID: element.SSID,
                      level: element.level,
                    });
                    setScannedDeviceCount(count => count + 1);
                    setScannedWifi(Array.from(wifiList.values()));
                  }
                });
              });
            } else {
              Alert.alert('Attenzione il wifi non è abilitato');
            }
          },
          err => {
            Alert.alert('Attenzione il wifi non è abilitato');
          },
        );
      }
    });
  }

  function selectWifi(wifi) {
    setConnectedDevice(wifi);
    console.log(connectedDevice);
  }

  function connect(SSID) {
    WifiManager.connectToProtectedSSID(SSID, passwordWifi, false).then(x => {
      console.log('connessione riuscita');
    });
  }
  function stopConnection() {
    WifiManager.disconnect().then(
      res => {
        setConnectedDevice(null);
      },
      err => {
        console.log('try me bitch');
      },
    );
  }

  return (
    <View style={{flexGrow: 1}}>
      <Wifi
        navigation={navigation}
        onPress={deviceScan}
        scannedWifi={scannedWifi}></Wifi>

      {/* 
      <Modal visible={!!connectedDevice} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={styles.deviceData}>{connectedDevice?.SSID || ''}</Text>
        
          <TextInput
            placeholder="password"
            style={styles.deviceData}
            onChangeText={text => setPasswordWifi(text)}
          />

          <Button
            title="Connetti"
            onPress={() => {
              connect(connectedDevice.SSID);
            }}
          />

          <Button title="Close" onPress={() => stopConnection()} />
        </View>
      </Modal>

      <Modal visible={isDisconnectedModalVisible} animationType="slide">
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.deviceData}>Connessione interrotta</Text>
          <Button
            title="Torna alla schermata principale"
            onPress={() => {
              setIsDisconnectedModalVisible(false);
              navigation.navigate('Homepage');
            }}
          />
        </View>
      </Modal> */}
    </View>
  );
};
export default WifiScreen;
