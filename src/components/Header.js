import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { colores, serif } from '../theme';

const links = [
  { label: 'HOTEL', seccion: 'about' },
  { label: 'HABITACIONES', seccion: 'booking' },
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
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80' }}
        style={styles.hero}
      >
        <View style={styles.overlay}>
          <Text style={styles.heroText}>Tu descanso empieza acá</Text>
        </View>
      </ImageBackground>
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
  hero: {
    height: 340,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 60,
  },
  heroText: {
    fontFamily: serif,
    fontSize: 26,
    color: colores.blanco,
    textAlign: 'center',
  },
});
