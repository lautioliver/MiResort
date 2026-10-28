import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Sobre el hotel</Text>
      <Text style={styles.text}>
        MiResort es un hotel frente al mar con piscina, spa, restaurante y
        habitaciones pensadas para descansar. Estamos a pocos minutos del
        centro y ofrecemos desayuno incluido, wifi gratis y estacionamiento.
      </Text>
      <Text style={styles.item}>• Check-in: 14:00 hs</Text>
      <Text style={styles.item}>• Check-out: 10:00 hs</Text>
      <Text style={styles.item}>• Recepción 24 hs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f4c5c',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    marginBottom: 10,
  },
  item: {
    fontSize: 15,
    color: '#333',
  },
});
