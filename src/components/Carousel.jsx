import { useEffect, useRef, useState } from 'react';
import { Animated, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { colores, serif } from '../theme';

const imagenes = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80',
];

export default function Carousel() {
  const [actual, setActual] = useState(0);
  const opacidades = useRef(imagenes.map((_, i) => new Animated.Value(i === 0 ? 1 : 0))).current;

  const irA = (nuevo) => {
    const destino = (nuevo + imagenes.length) % imagenes.length;
    if (destino === actual) return;
    const config = { duration: 600, useNativeDriver: Platform.OS !== 'web' };
    Animated.parallel([
      Animated.timing(opacidades[actual], { toValue: 0, ...config }),
      Animated.timing(opacidades[destino], { toValue: 1, ...config }),
    ]).start();
    setActual(destino);
  };

  // Pasa a la siguiente imagen cada 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => irA(actual + 1), 5000);
    return () => clearTimeout(timer);
  }, [actual]);

  return (
    <View style={styles.hero}>
      {imagenes.map((uri, i) => (
        <Animated.Image
          key={uri}
          source={{ uri }}
          style={[StyleSheet.absoluteFill, { opacity: opacidades[i] }]}
          resizeMode="cover"
        />
      ))}
      <View style={styles.overlay}>
        <Text style={styles.heroText}>Tu descanso empieza acá</Text>
      </View>

      <Pressable style={[styles.flecha, styles.izquierda]} onPress={() => irA(actual - 1)}>
        <Text style={styles.flechaText}>‹</Text>
      </Pressable>
      <Pressable style={[styles.flecha, styles.derecha]} onPress={() => irA(actual + 1)}>
        <Text style={styles.flechaText}>›</Text>
      </Pressable>

      <View style={styles.puntos}>
        {imagenes.map((uri, i) => (
          <Pressable key={uri} onPress={() => irA(i)} hitSlop={6}>
            <View style={[styles.punto, i === actual && styles.puntoActivo]} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 340,
    backgroundColor: colores.texto,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 72,
    paddingBottom: 60,
  },
  heroText: {
    fontFamily: serif,
    fontSize: 26,
    color: colores.blanco,
    textAlign: 'center',
  },
  flecha: {
    position: 'absolute',
    top: 120,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  izquierda: {
    left: 16,
  },
  derecha: {
    right: 16,
  },
  flechaText: {
    color: colores.blanco,
    fontSize: 28,
    lineHeight: 30,
  },
  puntos: {
    position: 'absolute',
    bottom: 64,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  punto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  puntoActivo: {
    backgroundColor: colores.blanco,
  },
});
