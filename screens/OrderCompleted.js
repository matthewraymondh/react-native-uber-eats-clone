import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white',
    }}>
      <Text>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
    </SafeAreaView>
  );
}
