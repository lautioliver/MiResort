import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Booking from './src/components/Booking';

export default function App() {
  const scrollRef = useRef(null);
  const posiciones = useRef({});

  const guardarPosicion = (seccion) => (e) => {
    posiciones.current[seccion] = e.nativeEvent.layout.y;
  };

  const irA = (seccion) => {
    scrollRef.current?.scrollTo({ y: posiciones.current[seccion] - 20, animated: true });
  };

  return (
    <ScrollView ref={scrollRef} style={styles.container}>
      <Header onNavigate={irA} />
      <View onLayout={guardarPosicion('booking')}>
        <Booking />
      </View>
      <View onLayout={guardarPosicion('about')}>
        <About />
      </View>
      <View onLayout={guardarPosicion('contact')}>
        <Contact />
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
