import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Booking from './src/components/Booking';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <About />
      <Booking />
      <Contact />
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
