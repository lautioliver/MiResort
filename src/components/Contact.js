import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import alerta from '../alerta';
import { colores, serif } from '../theme';

export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviar = () => {
    if (!nombre || !email || !mensaje) {
      alerta('Faltan datos', 'Completá todos los campos.');
      return;
    }
    alerta('Mensaje enviado', `Gracias ${nombre}, te vamos a responder a ${email}.`);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.label}>CONTACTO</Text>
      <Text style={styles.heading}>Escribinos</Text>
      <Text style={styles.text}>Tel: +54 11 1234-5678</Text>
      <Text style={styles.text}>Email: reservas@miresort.com</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor={colores.gris}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colores.gris}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Mensaje"
        placeholderTextColor={colores.gris}
        multiline
        value={mensaje}
        onChangeText={setMensaje}
      />
      <Pressable style={styles.button} onPress={enviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 24,
    paddingBottom: 48,
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
    color: colores.texto,
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colores.arena,
    paddingVertical: 10,
    marginTop: 14,
    fontSize: 15,
    color: colores.texto,
  },
  textarea: {
    height: 90,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: colores.arena,
    padding: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: colores.blanco,
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
});
