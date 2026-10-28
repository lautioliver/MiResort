import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import habitaciones, { confirmarReserva } from '../habitaciones';
import { colores, serif } from '../theme';

export default function Habitaciones() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>HABITACIONES</Text>
      <Text style={styles.heading}>Elegí tu habitación</Text>

      <View style={styles.grilla}>
        {habitaciones.map((h) => (
          <View key={h.id} style={styles.card}>
            <Image source={{ uri: h.imagen }} style={styles.imagen} resizeMode="cover" />
            <View style={styles.info}>
              <Text style={styles.nombre}>{h.nombre}</Text>
              <Text style={styles.descripcion}>{h.descripcion.toUpperCase()}</Text>
              <Text style={styles.detalle}>{h.detalle}</Text>
              <View style={styles.pie}>
                <Text style={styles.precio}>
                  ${h.precio} <Text style={styles.noche}>/ noche</Text>
                </Text>
                <Pressable style={styles.button} onPress={() => confirmarReserva(h)}>
                  <Text style={styles.buttonText}>Reservar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
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
    marginBottom: 16,
  },
  grilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  card: {
    flexGrow: 1,
    flexBasis: 260,
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.linea,
  },
  imagen: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 16,
    flexGrow: 1,
  },
  nombre: {
    fontFamily: serif,
    fontSize: 20,
    color: colores.texto,
  },
  descripcion: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colores.gris,
    marginTop: 4,
  },
  detalle: {
    fontSize: 14,
    lineHeight: 21,
    color: colores.texto,
    marginTop: 10,
    flexGrow: 1,
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colores.linea,
    marginTop: 14,
    paddingTop: 12,
  },
  precio: {
    fontFamily: serif,
    fontSize: 20,
    color: colores.texto,
  },
  noche: {
    fontSize: 13,
    color: colores.gris,
  },
  button: {
    backgroundColor: colores.arena,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: colores.blanco,
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1,
  },
});
