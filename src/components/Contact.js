import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import alerta from '../alerta';
import { colores, serif } from '../theme';

const validar = {
  nombre: (v) => {
    if (!v.trim()) return 'Ingresá tu nombre.';
    if (v.trim().length < 2) return 'El nombre es muy corto.';
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(v)) return 'El nombre solo puede tener letras.';
    return '';
  },
  email: (v) => {
    if (!v.trim()) return 'Ingresá tu email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return 'El email no es válido.';
    return '';
  },
  mensaje: (v) => {
    if (!v.trim()) return 'Escribí un mensaje.';
    if (v.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
    return '';
  },
};

const vacio = { nombre: '', email: '', mensaje: '' };

export default function Contact() {
  const [valores, setValores] = useState(vacio);
  const [errores, setErrores] = useState(vacio);
  const [tocados, setTocados] = useState({});

  const cambiar = (campo) => (texto) => {
    setValores({ ...valores, [campo]: texto });
    if (tocados[campo]) {
      setErrores({ ...errores, [campo]: validar[campo](texto) });
    }
  };

  const salir = (campo) => () => {
    setTocados({ ...tocados, [campo]: true });
    setErrores({ ...errores, [campo]: validar[campo](valores[campo]) });
  };

  const enviar = () => {
    const nuevos = {
      nombre: validar.nombre(valores.nombre),
      email: validar.email(valores.email),
      mensaje: validar.mensaje(valores.mensaje),
    };
    setErrores(nuevos);
    setTocados({ nombre: true, email: true, mensaje: true });
    if (nuevos.nombre || nuevos.email || nuevos.mensaje) {
      return;
    }
    alerta('Mensaje enviado', `Gracias ${valores.nombre.trim()}, te vamos a responder a ${valores.email.trim()}.`);
    setValores(vacio);
    setErrores(vacio);
    setTocados({});
  };

  return (
    <View style={styles.section}>
      <Text style={styles.label}>CONTACTO</Text>
      <Text style={styles.heading}>Escribinos</Text>
      <Text style={styles.text}>Tel: +54 11 1234-5678</Text>
      <Text style={styles.text}>Email: reservas@miresort.com</Text>

      <TextInput
        style={[styles.input, !!errores.nombre && styles.inputError]}
        placeholder="Nombre"
        placeholderTextColor={colores.gris}
        value={valores.nombre}
        onChangeText={cambiar('nombre')}
        onBlur={salir('nombre')}
      />
      {errores.nombre ? <Text style={styles.error}>{errores.nombre}</Text> : null}

      <TextInput
        style={[styles.input, !!errores.email && styles.inputError]}
        placeholder="Email"
        placeholderTextColor={colores.gris}
        keyboardType="email-address"
        autoCapitalize="none"
        value={valores.email}
        onChangeText={cambiar('email')}
        onBlur={salir('email')}
      />
      {errores.email ? <Text style={styles.error}>{errores.email}</Text> : null}

      <TextInput
        style={[styles.input, styles.textarea, !!errores.mensaje && styles.inputError]}
        placeholder="Mensaje"
        placeholderTextColor={colores.gris}
        multiline
        value={valores.mensaje}
        onChangeText={cambiar('mensaje')}
        onBlur={salir('mensaje')}
      />
      {errores.mensaje ? <Text style={styles.error}>{errores.mensaje}</Text> : null}

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
  inputError: {
    borderBottomColor: colores.error,
  },
  textarea: {
    height: 90,
    textAlignVertical: 'top',
  },
  error: {
    color: colores.error,
    fontSize: 13,
    marginTop: 4,
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
