import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>MiResort</Text>
      <Text style={styles.subtitle}>Hotel & Spa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0f4c5c',
    paddingTop: 60,
    paddingBottom: 24,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#cde7ea',
    fontSize: 16,
    marginTop: 4,
  },
});
