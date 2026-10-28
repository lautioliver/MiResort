import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import ubicaciones from '../ubicaciones';
import { colores, serif } from '../theme';

const abrirMapa = (u) => {
  const busqueda = encodeURIComponent(`${u.direccion}, Argentina`);
  Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${busqueda}`);
};

export default function Ubicaciones() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>UBICACIONES</Text>
      <Text style={styles.heading}>Nuestros hoteles</Text>
      <Text style={styles.intro}>
        MiResort está en {ubicaciones.length} destinos de Argentina. Elegí el que más te guste.
      </Text>

      <View style={styles.grilla}>
        {ubicaciones.map((u) => (
          <View key={u.id} style={styles.card}>
            <Image source={{ uri: u.imagen }} style={styles.imagen} resizeMode="cover" />
            <View style={styles.info}>
              <Text style={styles.ciudad}>{u.ciudad.toUpperCase()}</Text>
              <Text style={styles.nombre}>{u.nombre}</Text>
              <Text style={styles.text}>{u.direccion}</Text>
              <Text style={styles.text}>Tel: {u.telefono}</Text>
              <Pressable style={styles.button} onPress={() => abrirMapa(u)}>
                <Text style={styles.buttonText}>Ver en el mapa</Text>
              </Pressable>
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
    marginBottom: 8,
  },
  intro: {
    fontSize: 15,
    color: colores.texto,
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
    height: 180,
  },
  info: {
    padding: 16,
    gap: 4,
  },
  ciudad: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: colores.gris,
  },
  nombre: {
    fontFamily: serif,
    fontSize: 20,
    color: colores.texto,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: colores.texto,
  },
  button: {
    borderWidth: 1,
    borderColor: colores.arena,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: colores.texto,
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1,
  },
});
