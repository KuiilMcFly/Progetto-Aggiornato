import React, {useState, useEffect, useRef} from 'react';
import {Button, ScrollView, Text, View, Modal, Alert} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {styles} from '../../styles';
import Base64 from '../../components/Base64';
import {useNavigation} from '@react-navigation/native';
import BluetoothStyles from '../../styles/BluetoothStyles';
import CustomButtonBT from '../../components/CustomButtonBT';

const Bluetooth = () => {
  const [scannedDevices, setScannedDevices] = useState([]);
  const [scannedDeviceCount, setScannedDeviceCount] = useState(0);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [characteristicUUID, setCharacteristicUUID] = useState(null);

  const [isDisconnectedModalVisible, setIsDisconnectedModalVisible] =
    useState(false);
  const [isBluetoothEnabled, setBluetoothEnabled] = useState(false);

  const _bleManager = useRef(null as unknown as BleManager);
  const navigation = useNavigation();

  useEffect(() => {
    if (!_bleManager.current) {
      _bleManager.current = new BleManager();
    }

    return () => {};
  }, []);

  useEffect(() => {
    if (isBluetoothEnabled === false) {
      Alert.alert(
        'Bluetooth non attivo',
        'Per effettuare la scansione dei dispositivi, attiva il Bluetooth.',
        [{text: 'OK'}],
      );
    }
  }, [isBluetoothEnabled]);

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

      const granted = await request(PERMISSIONS.ANDROID.BLUETOOTH_SCAN, {
        title: 'Location permission for Bluetooth scanning',
        message: 'Whatever message you want to show',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      const grantedConnect = await request(
        PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
        {
          title: 'Location permission for Bluetooth scanning',
          message: 'Whatever message you want to show',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (
        granted === RESULTS.GRANTED &&
        isCoarseGranted === RESULTS.GRANTED &&
        grantedConnect === RESULTS.GRANTED
      ) {
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
        let timerId: number;
        const devices = new Map();

        _bleManager.current.startDeviceScan(
          null,
          null,
          (error, device: any) => {
            if (error) {
              console.log(JSON.stringify(error));
              return;
            }
            console.log('Device id:', device.id);
            console.log('Device name:', device.name);

            if (device.name && device.name !== 'Unknown Device') {
              if (!devices.has(device.id)) {
                devices.set(device.id, {
                  id: device.id,
                  name: device.name,
                });

                setScannedDeviceCount(count => count + 1);
                setScannedDevices(Array.from(devices.values()));
              }
            }

            if (scannedDeviceCount >= 9) {
              clearTimeout(timerId);
              deviceStopScan();
            }
          },
        );

        timerId = setTimeout(() => {
          deviceStopScan();
        }, 10000);
      }
    });
  }

  function deviceStopScan() {
    _bleManager.current.stopDeviceScan();
  }

  function connect(_device) {
    _bleManager.current.connectToDevice(_device.id).then(connectedDevice => {
      connectedDevice
        .discoverAllServicesAndCharacteristics()
        .then(discoveredDev => {
          discoveredDev.services().then(async services => {
            for (const service of services) {
              const characteristics = await service.characteristics();
              for (const characteristic of characteristics) {
                console.log('Characteristic UUID:', characteristic.uuid);
                if (characteristic.uuid.toLowerCase().includes('00002a19')) {
                  characteristic.read().then(value => {
                    console.log(value.value);
                    const batteryString = Base64.atob(value.value);
                    const newBattery = batteryString.charCodeAt(0);
                    console.log(
                      'Percentuale di carica della batteria:',
                      newBattery,
                    );

                    // Aggiorna le variabili di stato
                    setBatteryLevel(newBattery);
                    setCharacteristicUUID(characteristic.uuid);
                    setSelectedDevice(connectedDevice);
                  });
                }
              }
            }
          });
        });

      // Gestisci la disconnessione
      connectedDevice.onDisconnected(() => {
        setIsDisconnectedModalVisible(true);
        setSelectedDevice(null);
      });
    });
  }
  function activeBluetooth() {
    _bleManager.current.enable().then(state => {
      Alert.alert('bluetooth attivato!');
    });
  }

  function stopBluetooth() {
    _bleManager.current.disable().then(state => {
      Alert.alert('bluetooth disabilitato!');
    });
  }

  return (
    <View>
      <Text>Hello World</Text>
      <Button title="Scan" onPress={deviceScan} />
      <Button title="Stop Scan" onPress={deviceStopScan} />
      <Button title="Attiva Bluetooth" onPress={activeBluetooth} />
      <Button title="Disattiva bluetooth" onPress={stopBluetooth} />
      <ScrollView>
        {scannedDevices.map(device => (
          <CustomButtonBT
            key={device.id}
            title={`${device.name}`}
            onPress={() => connect(device)}
            style={BluetoothStyles.btButton}
          />
        ))}
      </ScrollView>
      <Modal visible={!!selectedDevice} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={styles.deviceData}>{selectedDevice?.name || ''}</Text>
          <Text style={styles.deviceData}>{selectedDevice?.id || ''}</Text>

          <Text style={styles.deviceData}>
            Current connection status:{' '}
            {selectedDevice ? 'Connected' : 'Not connected'}
          </Text>

          <Text style={styles.deviceData}>
            Percentuale di carica della batteria: {batteryLevel}%
          </Text>

          <Text style={styles.deviceData}>
            Characteristic UUID: {characteristicUUID}
          </Text>

          <Button title="Close" onPress={() => setSelectedDevice(null)} />
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
      </Modal>
    </View>
  );
};
export default Bluetooth;
