import { Link, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, serif } from '../theme';

export const links = [
  { label: 'HOTEL', href: '/hotel' },
  { label: 'HABITACIONES', href: '/habitaciones' },
  { label: 'UBICACIONES', href: '/ubicaciones' },
  { label: 'CONTACTO', href: '/contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View>
      <View style={[styles.topBar, { height: 24 + insets.top }]} />
      <View style={styles.bar}>
        <Link href="/" asChild>
          <Pressable style={styles.logo}>
            <Text style={styles.title}>MiResort</Text>
            <Text style={styles.subtitle}>HOTELES & SPA</Text>
          </Pressable>
        </Link>
        <View style={styles.nav}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} asChild>
              <Pressable>
                <Text style={[styles.link, pathname === l.href && styles.linkActivo]}>
                  {l.label}
                </Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: colores.beige,
  },
  bar: {
    backgroundColor: colores.blanco,
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colores.linea,
  },
  logo: {
    alignItems: 'center',
  },
  title: {
    fontFamily: serif,
    fontSize: 28,
    color: colores.texto,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: colores.texto,
  },
  nav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 14,
    rowGap: 8,
  },
  link: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colores.texto,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  linkActivo: {
    borderBottomColor: colores.arena,
  },
});
