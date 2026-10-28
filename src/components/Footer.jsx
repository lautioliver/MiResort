import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colores, serif } from '../theme';
import { links } from './Header';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.columnas}>
        <View style={styles.columna}>
          <Text style={styles.title}>MiResort</Text>
          <Text style={styles.subtitle}>HOTELES & SPA</Text>
          <Text style={styles.text}>Una cadena de hoteles pensada para descansar.</Text>
        </View>
        <View style={styles.columna}>
          <Text style={styles.label}>SECCIONES</Text>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={styles.link}>
              {l.label}
            </Link>
          ))}
        </View>
        <View style={styles.columna}>
          <Text style={styles.label}>CONTACTO</Text>
          <Text style={styles.text}>+54 11 1234-5678</Text>
          <Text style={styles.text}>reservas@miresort.com</Text>
        </View>
      </View>
      <Text style={styles.copy}>© 2026 MiResort. Todos los derechos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colores.beige,
    padding: 24,
    marginTop: 24,
  },
  columnas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
  },
  columna: {
    flexGrow: 1,
    flexBasis: 200,
    gap: 6,
  },
  title: {
    fontFamily: serif,
    fontSize: 22,
    color: colores.texto,
  },
  subtitle: {
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: colores.texto,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: colores.gris,
    marginBottom: 4,
  },
  link: {
    fontSize: 13,
    color: colores.texto,
  },
  text: {
    fontSize: 14,
    color: colores.texto,
  },
  copy: {
    fontSize: 12,
    color: colores.gris,
    borderTopWidth: 1,
    borderTopColor: colores.arena,
    marginTop: 24,
    paddingTop: 16,
    textAlign: 'center',
  },
});
