import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Booking from '../components/Booking';
import Carousel from '../components/Carousel';
import Pantalla from '../components/Pantalla';
import { colores, serif } from '../theme';

export default function Inicio() {
  return (
    <Pantalla>
      <Carousel />
      <Booking />
      <View style={styles.section}>
        <Text style={styles.label}>BIENVENIDOS</Text>
        <Text style={styles.heading}>Una cadena de hoteles para descansar</Text>
        <Text style={styles.text}>
          Hoteles en la ciudad, la playa, la montaña y entre viñedos, todos con la
          misma atención y comodidad.
        </Text>
        <Link href="/ubicaciones" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Ver nuestros hoteles</Text>
          </Pressable>
        </Link>
      </View>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 24,
    alignItems: 'center',
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
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: colores.texto,
    textAlign: 'center',
    maxWidth: 560,
  },
  button: {
    borderWidth: 1,
    borderColor: colores.arena,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  buttonText: {
    color: colores.texto,
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1,
  },
});
