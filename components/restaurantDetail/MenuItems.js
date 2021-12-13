import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomatto and sauce",
    price: "$13.50",
    image:
      "https://piknikdong.com/wp-content/uploads/2020/07/Resep-Lasagna.jpg",
  },
  {
    title: "Fetuchini Carbonara",
    description: "With butter lettuce, tomatto and sauce",
    price: "$15.50",
    image:
      "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/pasta-dishes/carbonara-pasta/main-header.jpg",
  },
  {
    title: "Wagyu Tenderloin Steak",
    description: "With butter lettuce, tomatto and sauce",
    price: "$22.50",
    image:
      "https://s1.bukalapak.com/img/66752451421/large/Jual_200Gr_Beef_Tenderloin_Steak_Daging_Sapi_Wagyu_Meltique_.jpg",
  },
  {
    title: "Chicken Mozarella",
    description: "With butter lettuce, tomatto and sauce",
    price: "$18.20",
    image:
      "https://images.media-allrecipes.com/userphotos/8028733.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "With butter lettuce, tomatto and sauce",
    price: "$8.50",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2020/12/22/chicken-caesar-salad_43.jpeg?w=700&q=90",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) => 
    Boolean(cartItems.find((item) => item.title == food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
    }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
