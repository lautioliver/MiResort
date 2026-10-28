import { Alert, Platform } from 'react-native';

// Alert.alert no funciona en la web, ahí usamos window.alert
export default function alerta(titulo, mensaje) {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
}
