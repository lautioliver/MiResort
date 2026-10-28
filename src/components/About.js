import { StyleSheet, Text, View } from 'react-native';
import { colores, serif } from '../theme';

export default function About() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>EL HOTEL</Text>
      <Text style={styles.heading}>Sobre MiResort</Text>
      <Text style={styles.text}>
        MiResort es un hotel frente al mar con piscina, spa, restaurante y
        habitaciones pensadas para descansar. Estamos a pocos minutos del
        centro y ofrecemos desayuno incluido, wifi gratis y estacionamiento.
      </Text>
      <View style={styles.datos}>
        <Text style={styles.item}>Check-in 14:00 hs</Text>
        <Text style={styles.item}>Check-out 10:00 hs</Text>
        <Text style={styles.item}>Recepción 24 hs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: colores.beige,
    margin: 20,
    padding: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: colores.gris,
  },
  heading: {
    fontFamily: serif,
    fontSize: 26,
    color: colores.texto,
    marginTop: 6,
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: colores.texto,
  },
  datos: {
    borderTopWidth: 1,
    borderTopColor: colores.arena,
    marginTop: 16,
    paddingTop: 12,
    gap: 4,
  },
  item: {
    fontSize: 14,
    color: colores.gris,
  },
});
