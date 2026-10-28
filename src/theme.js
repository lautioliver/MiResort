import { Platform } from 'react-native';

export const colores = {
  beige: '#f3ede8',
  arena: '#cbb9a6',
  texto: '#3a3a3a',
  gris: '#7a7a7a',
  linea: '#e2d8ce',
  blanco: '#fff',
  error: '#b3261e',
};

export const serif = Platform.select({ android: 'serif', default: 'Georgia' });
