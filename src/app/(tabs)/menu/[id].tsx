import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import Button from "@/components/Button";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<string | null>("M");

  // want to render from string to some JSX elements
  const sizes: string[] = ["S", "M", "L", "XL"];

  const addToCart = () => {
    if (!product) return;
    console.warn(
      "Add to cart, size: ",
      selectedSize,
      "product: ",
      product.name
    );
  };

  const product = products.find((p) => p.id.toString() === id);
  //need to add check if product not found
  if (!product) {
    return (
      <View>
        <Stack.Screen options={{ title: "Product not found" }} />
        <Text style={styles.title}>Product not found for id: {id}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        style={styles.image}
        source={{ uri: product.image || defaultPizzaImage }}
      />
      <Text style={styles.title}>{product.name}</Text>
      {/*we will loop over the sizes comments must go in curly brackets */}
      <Text style={styles.price}>Select Sizes</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
              console.log("Selected size", size);
            }}
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gray" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.title}>Price: ${product.price}</Text>
      <Button text="Add to Cart" onPress={addToCart} />
    </View>
  );
}
//cant send variables to styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  price: { fontSize: 18, fontWeight: "bold", color: Colors.light.tint },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizes: {
    flexDirection: "row",
    //available space between the elements is shared equally
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    //align content both horizontally and vertically
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
