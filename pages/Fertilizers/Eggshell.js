import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Eggshell = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://cdn.shopify.com/s/files/1/0663/9613/files/caroline-attwood-K9pO8lHUelE-unsplash_grande.jpg?v=1596628516' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Egg Shells</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Eggshells are not just waste; they possess valuable properties that can benefit crops and plants in various ways. One of the key benefits of eggshells is their calcium content. Calcium is an essential nutrient for plants, aiding in cell wall formation, root development, and overall plant structure. When eggshells are crushed and added to soil, they gradually release calcium, enriching the soil and making it more conducive to plant growth.

In addition to calcium, eggshells contain other minerals like magnesium, potassium, and phosphorus, which are also beneficial to plant health. These minerals contribute to soil fertility and help maintain the pH balance of the soil, creating optimal conditions for plant growth. Eggshells act as a natural fertilizer, providing plants with the nutrients they need to thrive without the use of synthetic chemicals.

Eggshells can also deter certain pests and protect plants from damage. Crushed eggshells sprinkled around the base of plants create a barrier that deters slugs, snails, and other soft-bodied pests from reaching the plants. The sharp edges of the crushed eggshells irritate the pests and discourage them from crawling over them, effectively protecting the plants from potential harm.

Moreover, eggshells can improve soil structure and drainage. When added to compost or soil, eggshells help to aerate the soil and prevent compaction, allowing water and nutrients to penetrate more easily to the plant roots. This improved soil structure promotes healthy root development and reduces the risk of waterlogging, which can lead to root rot and other issues.

Another benefit of using eggshells in gardening is their ability to deter certain types of fungal diseases. Eggshells contain chitin, a substance that inhibits the growth of fungal pathogens in the soil. By incorporating eggshells into the soil, gardeners can help prevent diseases like damping-off, which can devastate young seedlings and affect plant health.

Overall, eggshells are a valuable resource in gardening and agriculture, offering numerous benefits to crops and plants. From providing essential nutrients like calcium to deterring pests and improving soil structure, eggshells contribute to healthier, more productive gardens and farms while reducing the reliance on synthetic fertilizers and pesticides. By recycling eggshells and incorporating them into soil management practices, gardeners can harness their natural properties to foster robust plant growth and sustainability.</Text>
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
    
export default Eggshell;
