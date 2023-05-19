import {StyleSheet} from 'react-native';

export const BluetoothStyles = StyleSheet.create({
  btButton: {
    backgroundColor: 'blue',
    color: 'white',
    width: 110,
    height: 110,
    justifyContent: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    gap: 20,
  },
});

export default BluetoothStyles;
