import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Bittermelon = ({ navigation }) => {

  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bittergourd.jpg/220px-Bittergourd.jpg' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Bitter Melon</Text>
        {/* Add your long text here */}
        <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Bitter melon, scientifically known as Momordica charantia, is a unique and distinctive vegetable popular in many Asian and Indian cuisines for its bitter taste and purported health benefits. Its elongated shape and bumpy exterior give it a striking appearance, while its flavor profile is an acquired taste for many palates. Despite its bitterness, bitter melon is celebrated for its numerous nutritional properties. It is low in calories but rich in vitamins A, C, and K, as well as minerals like potassium and iron, making it a valuable addition to a balanced diet.

In addition to its nutritional content, bitter melon is renowned for its potential health benefits. It is often touted for its ability to help regulate blood sugar levels, making it a staple in traditional medicine practices for managing diabetes. Research suggests that compounds found in bitter melon may help improve insulin sensitivity and reduce glucose absorption in the body, which could contribute to better glycemic control. Moreover, bitter melon contains antioxidants that may help protect cells from damage caused by harmful free radicals, potentially reducing the risk of chronic diseases like heart disease and certain types of cancer.

Despite its bitter taste, bitter melon remains a versatile ingredient in various culinary traditions. It is commonly used in stir-fries, curries, and soups, where its unique flavor adds depth and complexity to dishes. In some cultures, bitter melon is also pickled or stuffed with savory fillings to balance its bitterness. Whether enjoyed for its distinct taste or valued for its potential health benefits, bitter melon continues to be an intriguing and beneficial addition to diverse cuisines and dietary practices around the world.</Text>
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

export default Bittermelon;
