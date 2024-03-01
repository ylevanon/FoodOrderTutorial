import { StyleSheet, Image,Text, View } from 'react-native';
import Colors from '@/src/constants/Colors';




const ProductListItem = ({product}) => {
  console.log(product)
  return    <View style={styles.container}>
  <Image style={styles.image} source={{uri: product.image}} />
  <Text style={styles.title}>{product.name}</Text>
  <Text style={styles.price}>${product.price}</Text>
</View>
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
   },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: Colors.light.tint
  },
  price: {
    color:  Colors.light.tint,
    fontWeight: 'bold'
  }
});


export default ProductListItem;