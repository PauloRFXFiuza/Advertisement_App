
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { useRef } from "react" 
import { StyleSheet, Text, View, Share, Button } from 'react-native'
import { Product } from './src/components/product'
import { captureRef } from "react-native-view-shot"

const PRODUCT = {
  imageURI: "https://m.media-amazon.com/images/I/61FR1BJ71IL.jpg",
  title: "Teclado Mecânico",
  description: "YINDIAO Teclado mecânico para jogos K68 60% sem fio, Bluetooth 5.0/2.4 GHz, receptor USB-C 2 em 1 de modo duplo, troca a quente, layout compacto dos EUA de 68 teclas, economia de energia, interruptorYINDIAO Teclado mecânico para jogos K68 60% sem fio, Bluetooth 5.0/2.4 GHz, receptor USB-C 2 em 1 de modo duplo, troca a quente, layout compacto dos EUA de 68 teclas, economia de energia, interruptorYINDIAO Teclado mecânico para jogos K68 60% sem fio, Bluetooth 5.0/2.4 GHz, receptor USB-C 2 em 1 de modo duplo, troca a quente, layout compacto dos EUA de 68 teclas, economia de energia, interruptor",
  price: "R$ 244,90",
}

export default function App() {
  const productRef = useRef<View>(null);

  async function save() {
    try {
      const productURI = await captureRef(productRef, {
        quality: 1,
        format: "png",
        result: "tmpfile",
      });

      console.log("Imagem capturada de:", productURI);

      const newPath = FileSystem.documentDirectory + "product.png";

      await FileSystem.moveAsync({
        from: productURI,
        to: newPath,
      });

      console.log("Imagem movida para:", newPath);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(newPath);
      } else {
        console.log("Compartilhamento não disponível");
      }

    } catch (error) {
      console.log("Erro ao capturar imagem:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>

      {/* Envolvendo o componente Product dentro da View referenciada */}
      <View ref={productRef} collapsable={false} style={styles.captureArea}>
        <Product data={PRODUCT} />
      </View>

      <Button title="Salvar" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C7C7C7",
  },
  captureArea: {
    backgroundColor: "white", // Garante fundo branco na captura
    padding: 10, // Adiciona um espaçamento para não cortar nada
    borderRadius: 10, // Bordas arredondadas (opcional)
  },
});