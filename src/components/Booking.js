import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

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
    Alert.alert(
      'Reserva confirmada',
      `Reservaste: ${habitacion.nombre} ($${habitacion.precio} por noche).`
    );
  };

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Reservas</Text>
      <Text style={styles.text}>Tenemos 4 tipos de habitaciones disponibles.</Text>
      <Pressable style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Reservar habitación</Text>
      </Pressable>

      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.heading}>Elegí una habitación</Text>
            {habitaciones.map((h) => (
              <Pressable key={h.id} style={styles.option} onPress={() => reservar(h)}>
                <Text style={styles.optionTitle}>{h.nombre}</Text>
                <Text style={styles.optionText}>{h.descripcion}</Text>
                <Text style={styles.price}>${h.precio} / noche</Text>
              </Pressable>
            ))}
            <Pressable onPress={() => setVisible(false)}>
              <Text style={styles.cancel}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    color: '#333',
  },
  button: {
    backgroundColor: '#e36414',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 14,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    paddingBottom: 40,
  },
  option: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  optionText: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    color: '#e36414',
    fontWeight: 'bold',
    marginTop: 4,
  },
  cancel: {
    textAlign: 'center',
    color: '#0f4c5c',
    fontSize: 16,
    marginTop: 6,
  },
});
