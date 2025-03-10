
import { StyleSheet, Text, View } from 'react-native';
import { Product } from './src/components/product';

const PRODUCT = {
  imageURI: "",
  title: "",
  description: "",
  price: "",
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
  },
});
