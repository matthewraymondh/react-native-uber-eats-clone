import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

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
    image: "https://images.media-allrecipes.com/userphotos/8028733.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "With butter lettuce, tomatto and sauce",
    price: "$8.50",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2020/12/22/chicken-caesar-salad_43.jpeg?w=700&q=90",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
