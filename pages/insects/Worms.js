import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Worms = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://www.lawnstarter.com/blog/wp-content/uploads/2022/09/Agriculture-crops-damager-worm-289144-pixahive-768x1024-2-1-1.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Worms</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Worms, both in their larval and adult stages, can wreak havoc on crops and plants, posing significant challenges to agriculture and gardening. One of the primary ways worms destroy crops and plants is through their voracious appetite for foliage and roots. Caterpillars, the larval stage of many moths and butterflies, are notorious for consuming leaves, stems, and even fruits of various plants. They can strip plants bare, leaving them weakened and vulnerable to other stressors such as diseases and environmental fluctuations.

Another destructive aspect of worms is their ability to burrow into the soil and attack plant roots. Root-feeding worms such as nematodes can cause extensive damage by puncturing roots and feeding on the vital nutrients and moisture that plants rely on for growth and development. As a result, affected plants may exhibit stunted growth, wilting, and eventually die due to the inability to absorb sufficient nutrients and water from the soil.

In addition to direct feeding damage, some worms serve as vectors for plant diseases. Certain species of worms can harbor pathogens within their bodies and transmit them to plants as they feed or move through the soil. This transmission can lead to the spread of diseases such as bacterial wilt, fungal infections, and viral diseases, further exacerbating crop losses and diminishing plant health.

The reproductive capabilities of worms also contribute to their destructive potential. Many worm species reproduce rapidly, leading to population explosions under favorable environmental conditions. As their numbers multiply, the pressure they exert on crops and plants intensifies, amplifying the extent of damage they cause. Furthermore, the resilience of worms to certain control measures, such as pesticides, makes managing their populations a challenging task for farmers and gardeners.

Despite the significant damage they inflict, worms also play essential roles in ecosystem processes such as soil aeration, nutrient cycling, and decomposition. Therefore, achieving a balance between controlling worm populations to mitigate crop damage and preserving their ecological functions remains a complex challenge for agricultural and environmental management. Effective strategies for managing worm damage often involve a combination of cultural practices, biological control methods, and targeted pesticide applications to minimize losses while promoting sustainable agriculture and plant health.</Text>
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
    

export default Worms;
