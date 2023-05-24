import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {Picker} from '@react-native-picker/picker';
import i18n from './i18n';
import {Login} from './screens/Login';
import bluetooth from './Bluetooth2/BTfunzionante/bluetooth';
import styles from './styles';
import BsBluetooth from 'react-icons/bs';
import {IntlProvider, FormattedMessage, createIntl} from 'react-intl';
import {Image} from 'react-native-elements';
import {ScrollView} from 'react-native';
import WifiScreen from './screens/WifiScreen';
import Wifi from './components/Wi-fiComponents/src/screens/Wifi';
import MaterialIconButtonsFooter2 from './components/BluetoothComponents/components/MaterialIconButtonsFooter2';
import MaterialHeader11 from './components/BluetoothComponents/components/MaterialHeader11';
import {Setting} from './components/SettingComponents';

// Configura l'istanza Intl
const intl = createIntl({
  locale: i18n.language,
  messages: i18n.getResourceBundle(i18n.language),
  formats: {
    number: {},
    date: {},
  },
  defaultFormats: {},
  defaultLocale: 'en',
});

const App = ({navigation}) => {
  const {t} = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    // Aggiorna l'istanza di i18n con la lingua corrente
    i18n.changeLanguage(language);
  }, [language]);

  const changeLanguage = lng => {
    setLanguage(lng);
  };

  const renderFlag = () => {
    switch (language) {
      case 'it':
        return (
          <Image
            style={{width: 25, height: 15}}
            source={require('./assets/it.png')}
          />
        );
      case 'en':
        return (
          <Image
            style={{width: 25, height: 15}}
            source={require('./assets/en.png')}
          />
        );
      case 'fr':
        return (
          <Image
            style={{width: 25, height: 15}}
            source={require('./assets/fr.png')}
          />
        );
      case 'de':
        return (
          <Image
            style={{width: 25, height: 15}}
            source={require('./assets/de.png')}
          />
        );
      default:
        return null;
    }
  };

  const drawerNavigation = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 16, margin: 10}}>{t('Lingua')}:</Text>
        <View style={{marginLeft: 10, marginTop: 15}}>{renderFlag()}</View>
        <Picker
          style={{width: 150}}
          selectedValue={language}
          onValueChange={itemValue => changeLanguage(itemValue)}>
          <Picker.Item label={t('Italiano')} value="it" />
          <Picker.Item label={t('English')} value="en" />
          <Picker.Item label={t('Français')} value="fr" />
          <Picker.Item label={t('Deutsch')} value="de" />
        </Picker>
      </View>
    );
  };

  const crc = require('crc');

  const crc16Value = crc.crc16ccitt('hello').toString(16);

  console.log('CRC16:', crc16Value);

  //CRITTOGRAFIA AES-ECB
  var aesEcb = require('react-native-aes-ecb');

  var key = '0000000000000001';
  var plaintext = 'Hello           ';

  // Verifica se la lunghezza del plaintext è multipla di 16 byte
  if (plaintext.length % 16 !== 0) {
    console.log('Errore: la lunghezza del plaintext non è valida');
    return;
  }

  var encrypted = aesEcb.encrypt(key, plaintext);
  var decrypted = aesEcb.decrypt(key, encrypted);

  console.log('Plaintext:', plaintext);
  console.log('Encrypted:', encrypted);
  console.log('Decrypted:', decrypted);

  const handleSettingPress = () => {
    navigation.navigate('Setting');
  };

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        flexShrink: 0,
      }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <MaterialHeader11
          title="Home"
          navigation={navigation}
          onSettingPress={handleSettingPress}
          style={{flex: 0}}
        />
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <DrawerLayoutAndroid
            ref={ref => (drawerRef = ref)}
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={drawerNavigation}>
            <ScrollView style={styles.scrollView}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 1,
                    color: 'black',
                  }}>
                  {t('title')}
                </Text>
                <Text>{t('description')}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Button
                    title={t('login')}
                    onPress={() => navigation.navigate('Login')}
                  />
                  <Button
                    title={t('bluetooth')}
                    onPress={() => navigation.navigate('bluetooth')}
                  />
                  <Button
                    title={t('WifiScreen')}
                    onPress={() => navigation.navigate('Wifi')}
                  />
                </View>
              </View>
            </ScrollView>
          </DrawerLayoutAndroid>
        </View>
        <MaterialIconButtonsFooter2 navigation={navigation} style={{flex: 0}} />
      </View>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <IntlProvider
      locale={i18n.language}
      messages={i18n.getResourceBundle(i18n.language)}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={App} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="bluetooth" component={bluetooth} />
          <Stack.Screen name="Wifi" component={WifiScreen} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </IntlProvider>
  );
}

export default AppNavigation;
