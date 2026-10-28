import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colores, serif } from '../theme';
import Carousel from './Carousel';

const links = [
  { label: 'HOTEL', seccion: 'about' },
  { label: 'HABITACIONES', seccion: 'habitaciones' },
  { label: 'CONTACTO', seccion: 'contact' },
];

export default function Header({ onNavigate }) {
  return (
    <View>
      <View style={styles.topBar} />
      <View style={styles.bar}>
        <View style={styles.logo}>
          <Text style={styles.title}>MiResort</Text>
          <Text style={styles.subtitle}>HOTEL & SPA</Text>
        </View>
        <View style={styles.nav}>
          {links.map((l) => (
            <Pressable key={l.seccion} onPress={() => onNavigate(l.seccion)}>
              <Text style={styles.link}>{l.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <Carousel />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 24,
    backgroundColor: colores.beige,
  },
  bar: {
    backgroundColor: colores.blanco,
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  logo: {
    alignItems: 'center',
  },
  title: {
    fontFamily: serif,
    fontSize: 28,
    color: colores.texto,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: colores.texto,
  },
  nav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  link: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colores.texto,
  },
});
