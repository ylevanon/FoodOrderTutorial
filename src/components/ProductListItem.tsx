import { StyleSheet, Image,Text, View } from 'react-native';
import Colors from '@constants/Colors';
import { Product } from '../app/types';


export const defaultPizzaImage = 
'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

//specify type of props of our component

type ProductListItemProps = {
    product: Product
}

const ProductListItem = ({product} : ProductListItemProps) => {
  console.log(product)
  return    <View style={styles.container}>
  <Image style={styles.image} source={{uri: product.image || defaultPizzaImage }} />
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