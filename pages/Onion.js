import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Onion = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/ARS_red_onion.jpg/220px-ARS_red_onion.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Onion</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Onions, scientifically known as Allium cepa, are versatile vegetables cherished for their pungent flavor and culinary applications across the globe. Whether raw, cooked, or pickled, onions add depth and complexity to a variety of dishes, ranging from salads and sandwiches to soups and stews. Their distinct taste and aroma make them a staple ingredient in cuisines worldwide, serving as a fundamental component in countless recipes.

Beyond their culinary allure, onions boast numerous health benefits. Rich in antioxidants, particularly flavonoids and sulfur compounds, onions possess anti-inflammatory properties that may help reduce the risk of chronic diseases such as heart disease, diabetes, and certain cancers. Additionally, onions are a good source of vitamins C and B6, as well as dietary fiber, contributing to overall health and well-being.

Planting onions requires attention to detail and proper technique. Typically grown from onion sets (small bulbs) or seeds, onions thrive in well-drained, fertile soil with plenty of sunlight. To plant onions, prepare the soil by removing any debris and incorporating compost or organic matter to enhance nutrient content. Plant onion sets or seeds in rows, spacing them adequately to allow room for bulb development. Regular watering and weed control are essential throughout the growing season to ensure optimal growth and yield.

Harvesting onions involves careful timing and consideration of environmental factors. Onions are ready for harvest when their tops begin to yellow and flop over. To harvest, gently loosen the soil around the bulbs and carefully lift them from the ground. Once harvested, onions can be stored in a cool, dry place for several weeks or longer, extending their shelf life and culinary utility. With proper care and cultivation, onions reward gardeners and chefs alike with their distinct flavor and nutritional value.</Text>
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
    

export default Onion;
