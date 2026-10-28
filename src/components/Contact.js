import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviar = () => {
    if (!nombre || !email || !mensaje) {
      Alert.alert('Faltan datos', 'Completá todos los campos.');
      return;
    }
    Alert.alert('Mensaje enviado', `Gracias ${nombre}, te vamos a responder a ${email}.`);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Contacto</Text>
      <Text style={styles.text}>Tel: +54 11 1234-5678</Text>
      <Text style={styles.text}>Email: reservas@miresort.com</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Mensaje"
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
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    fontSize: 15,
  },
  textarea: {
    height: 90,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#0f4c5c',
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
});
