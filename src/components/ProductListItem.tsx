import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import Colors from "@constants/Colors";
import { Product } from "../app/types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

//specify type of props of our component

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  console.log(product);
  return (
    //child must have on press event so View cannot be child of the Link
    //must replace it with Pressable
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image || defaultPizzaImage }}
          //adjust image to have same aspect ratio as container
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    //Share space with your siblings if flex
    flex: 1,
    maxWidth: "50%",
    margin: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: Colors.light.tint,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});

export default ProductListItem;
