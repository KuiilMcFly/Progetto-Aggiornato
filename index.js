/**
 * @format
 */
import './intl-polyfill'; // Importa il file del polyfill prima di tutto
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
