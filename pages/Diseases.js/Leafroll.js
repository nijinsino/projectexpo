import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Leafroll = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'http://ucanr.edu/blogs/SalinasValleyAgriculture/blogfiles/31936.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Leaf Roll Disease</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Leaf roll disease is a pervasive and detrimental ailment that affects various crops and plants, causing significant damage to agricultural production worldwide. This disease primarily targets plants belonging to the Solanaceae family, including tomatoes, peppers, and potatoes, among others. The hallmark symptoms of leaf roll disease include the curling and rolling of leaves, stunted growth, and reduced yields. The severity of the disease can vary depending on environmental conditions, plant susceptibility, and the strain of the pathogen involved.

One of the primary ways in which leaf roll disease devastates crops and plants is by compromising their ability to photosynthesize effectively. As the leaves curl and roll, they become distorted and unable to capture sunlight efficiently, which is crucial for the process of photosynthesis. With reduced photosynthetic activity, plants experience diminished energy production and nutrient assimilation, leading to stunted growth and poor overall health. Consequently, affected crops exhibit reduced yields, resulting in economic losses for farmers and threatening food security.

Moreover, leaf roll disease creates an ideal environment for secondary infections and pest infestations to thrive. The curled and distorted leaves provide shelter and protection for pathogens and pests, exacerbating the damage inflicted on plants. Secondary infections can further weaken the plants' immune responses, making them more susceptible to additional diseases and environmental stresses. As a result, farmers may face challenges in controlling the spread of leaf roll disease and preventing further crop losses.

Additionally, leaf roll disease can have profound long-term effects on the soil and ecosystem health. As infected plants deteriorate and decompose, they release pathogens and toxins into the soil, potentially contaminating the environment and disrupting natural ecological processes. Furthermore, the loss of vegetation due to leaf roll disease can lead to soil erosion and degradation, impacting soil fertility and water retention capabilities. These ecological disturbances not only affect agricultural productivity but also jeopardize the sustainability of farming practices and the surrounding ecosystems.

In conclusion, leaf roll disease poses a significant threat to crops and plants, wreaking havoc on agricultural production and ecosystem stability. Its ability to impair photosynthesis, promote secondary infections, and degrade soil health underscores the importance of implementing effective disease management strategies. By employing integrated pest management techniques, breeding resistant cultivars, and promoting cultural practices that enhance plant immunity, farmers can mitigate the impact of leaf roll disease and safeguard their crops against its destructive consequences.</Text>
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
    

export default Leafroll;
