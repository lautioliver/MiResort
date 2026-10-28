import { ScrollView, StyleSheet, View } from 'react-native';
import Footer from './Footer';

// Contenedor de cada pantalla: contenido con scroll y el footer al final
export default function Pantalla({ children }) {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <View style={styles.cuerpo}>{children}</View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contenido: {
    flexGrow: 1,
  },
  cuerpo: {
    flex: 1,
  },
});
