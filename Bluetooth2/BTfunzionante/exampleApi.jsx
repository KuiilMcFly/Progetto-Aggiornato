import React, { useState, useEffect } from 'react';
import { Button, ScrollView, Text, View, Modal } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import styles from '../../styles';

const ExampleApi = () => {
  const [scannedDevices, setScannedDevices] = useState([]);
  const [scannedDeviceCount, setScannedDeviceCount] = useState(0);
  const [connectedDevice, setConnectedDevice] = useState(null);

  const requestLocationPermission = async () => {
    try {
      const granted = await request(PERMISSIONS.ANDROID.BLUETOOTH_SCAN, {
        title: 'Location permission for Bluetooth scanning',
        message: 'Whatever message you want to show',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === RESULTS.GRANTED) {
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

  const deviceScan = () => {
    requestLocationPermission().then(permission => {
      if (permission) {
        const manager = new BleManager();
        let timerId;

        const devices = new Map();

        manager.startDeviceScan(null, null, (error, device) => {
          if (error) {
            console.log(error);
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

              setScannedDevices(Array.from(devices.values()));
              setScannedDeviceCount(count => count + 1);
            }
          }

          if (scannedDeviceCount >= 9) {
            clearTimeout(timerId);
            deviceStopScan();
          }
        });

        timerId = setTimeout(() => {
          deviceStopScan();
        }, 10000);
      }
    });
  };

  const deviceStopScan = () => {
    manager.stopDeviceScan();
  };

  return (
    <View>
      <Text>Hello World</Text>
      <Button title="Scan" onPress={deviceScan} />
      <Button title="Stop Scan" onPress={deviceStopScan} />
      <ScrollView>
        {scannedDevices.map(device => (
          <Button
            key={device.id}
            title={`Connect to device ${device.name}`}
            onPress={() => connectToDevice(device.id)}
          />
        ))}
      </ScrollView>
      <Modal visible={!!connectedDevice} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* Modal content */}
          <Button title="Close" onPress={() => setConnectedDevice(null)} />
        </View>
      </Modal>
    </View>
  );
};

export default ExampleApi;
