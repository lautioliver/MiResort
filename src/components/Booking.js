import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import alerta from '../alerta';
import { colores, serif } from '../theme';

const habitaciones = [
  { id: 1, nombre: 'Habitación Simple', descripcion: '1 cama single', precio: 50 },
  { id: 2, nombre: 'Habitación Doble', descripcion: '1 cama matrimonial', precio: 80 },
  { id: 3, nombre: 'Habitación Familiar', descripcion: '1 matrimonial + 2 single', precio: 120 },
  { id: 4, nombre: 'Suite', descripcion: 'Vista al mar y jacuzzi', precio: 200 },
];

export default function Booking() {
  const [visible, setVisible] = useState(false);

  const reservar = (habitacion) => {
    setVisible(false);
    alerta(
      'Reserva confirmada',
      `Reservaste: ${habitacion.nombre} ($${habitacion.precio} por noche).`
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.label}>HABITACIONES Y HUÉSPEDES</Text>
      <Text style={styles.text}>4 tipos de habitaciones disponibles</Text>
      <Pressable style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Reservar</Text>
      </Pressable>

      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.heading}>Elegí una habitación</Text>
            {habitaciones.map((h) => (
              <Pressable key={h.id} style={styles.option} onPress={() => reservar(h)}>
                <View>
                  <Text style={styles.optionTitle}>{h.nombre}</Text>
                  <Text style={styles.optionText}>{h.descripcion}</Text>
                </View>
                <Text style={styles.price}>${h.precio}</Text>
              </Pressable>
            ))}
            <Pressable onPress={() => setVisible(false)}>
              <Text style={styles.cancel}>CANCELAR</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colores.blanco,
    marginHorizontal: 20,
    marginTop: -50,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colores.texto,
  },
  text: {
    fontSize: 15,
    color: colores.gris,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colores.arena,
  },
  button: {
    backgroundColor: colores.arena,
    padding: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: colores.blanco,
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: colores.blanco,
    padding: 24,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  heading: {
    fontFamily: serif,
    fontSize: 24,
    color: colores.texto,
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colores.linea,
    paddingVertical: 14,
  },
  optionTitle: {
    fontSize: 16,
    color: colores.texto,
  },
  optionText: {
    fontSize: 13,
    color: colores.gris,
    marginTop: 2,
  },
  price: {
    fontFamily: serif,
    fontSize: 18,
    color: colores.texto,
  },
  cancel: {
    textAlign: 'center',
    color: colores.gris,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 20,
  },
});
