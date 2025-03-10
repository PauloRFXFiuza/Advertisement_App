
import { StyleSheet, Text, View } from 'react-native';
import { Product } from './src/components/product';

const PRODUCT = {
  imageURI: "https://m.media-amazon.com/images/I/61FR1BJ71IL.jpg",
  title: "Teclado Mecânico",
  description: "YINDIAO Teclado mecânico para jogos K68 60% sem fio, Bluetooth 5.0/2.4 GHz, receptor USB-C 2 em 1 de modo duplo, troca a quente, layout compacto dos EUA de 68 teclas, economia de energia, interruptorYINDIAO Teclado mecânico para jogos K68 60% sem fio, Bluetooth 5.0/2.4 GHz, receptor USB-C 2 em 1 de modo duplo, troca a quente, layout compacto dos EUA de 68 teclas, economia de energia, interruptorYINDIAO Teclado mecânico para jogos K68 60% sem fio, Bluetooth 5.0/2.4 GHz, receptor USB-C 2 em 1 de modo duplo, troca a quente, layout compacto dos EUA de 68 teclas, economia de energia, interruptor",
  price: "R$ 244,90",
}

export default function App() {
  return (
    <View style={styles.container}>
        <Product data={PRODUCT} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
});
