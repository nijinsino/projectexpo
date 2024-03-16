import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Watermelon = ({ navigation }) => {

  
  return (
   
      
    <ScrollView style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/220px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg' }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>Water Melon</Text>
      {/* Add your long text here */}
      <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Watermelon, scientifically known as Citrullus lanatus, is a refreshing and juicy fruit that belongs to the Cucurbitaceae family, which also includes cucumbers, pumpkins, and squash. Originating from Africa, watermelon is now cultivated in various regions worldwide due to its popularity and adaptability to different climates. This fruit is characterized by its thick rind, usually green with lighter stripes, and its juicy, sweet flesh, which ranges from red to pink in color.

One of the most notable features of watermelon is its high water content, which accounts for about 90% of its weight. This makes watermelon a hydrating and thirst-quenching fruit, particularly appealing during hot summer months. Despite its high water content, watermelon is also rich in essential nutrients, including vitamins A and C, as well as antioxidants like lycopene, which gives the fruit its vibrant red color and may have various health benefits.

Watermelon is a versatile fruit that can be enjoyed in numerous ways. It is commonly consumed fresh, sliced into wedges or cubes, making it a popular snack at picnics, barbecues, and summer gatherings. Its sweet and juicy flesh can also be blended into refreshing smoothies, used in fruit salads, or even grilled for a unique flavor experience. In some cultures, watermelon is also pickled or used to make preserves and jams, adding a burst of sweetness to various dishes and desserts.

Beyond its culinary uses, watermelon holds cultural significance in many societies. It is often associated with summer celebrations and festivals, symbolizing abundance, freshness, and vitality. In some traditions, watermelon seeds are used in games or competitions, adding to the fruit's festive allure. With its refreshing taste, nutritional benefits, and cultural significance, watermelon continues to be a beloved fruit enjoyed by people around the world.</Text>
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
},
imageContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 200, 
  backgroundColor: 'lightgray', // You can add a background color for the image container
},
image: {
  width: '100%',
  height: '100%',
},
textContainer: {
  padding: 20,
},
title: {
  fontSize: 25,
  fontWeight: 'bold',
  textAlign: 'center',
},
});



export default Watermelon;
