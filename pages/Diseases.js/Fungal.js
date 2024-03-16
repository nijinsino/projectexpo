import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Fungal = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/keep-your-garden-free-from-fungal-disease/keep_garden-brown_spots.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Fungal</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Fungal pathogens pose a significant threat to crops and plants, causing widespread destruction and economic losses worldwide. These microscopic organisms, belonging to various fungal species, can infiltrate plants through various means, including soil, water, air, and infected plant debris. Once established, fungi unleash a barrage of destructive mechanisms that compromise the health and vitality of crops and plants.

Firstly, fungal infections often manifest as visible symptoms on the plant's surface, including wilting, yellowing of leaves, and the development of lesions or spots. These symptoms disrupt essential physiological processes within the plant, such as photosynthesis and nutrient absorption, leading to stunted growth and reduced yields. As fungal pathogens proliferate, they may also produce toxins that further weaken the plant's defenses and exacerbate damage.

Secondly, fungi have the ability to penetrate plant tissues, gaining access to vital nutrients and resources necessary for their growth and reproduction. Once inside the plant, fungal hyphae can colonize various tissues, including roots, stems, leaves, and fruits, causing tissue necrosis and cell death. This invasion disrupts nutrient transport systems and impairs the plant's ability to absorb water and minerals from the soil, ultimately compromising its overall health and resilience.

Furthermore, fungal pathogens can spread rapidly within agricultural ecosystems, facilitated by factors such as environmental conditions, host susceptibility, and agricultural practices. Spores produced by fungi can be disseminated over long distances by wind, water, insects, and human activities, increasing the likelihood of widespread infection and crop devastation. Moreover, the emergence of new fungal strains and the development of resistance to fungicides pose significant challenges for crop protection and management efforts.

In addition to direct damage inflicted on plants, fungal infections can also have indirect consequences on agricultural productivity and food security. Crop losses resulting from fungal diseases can lead to reduced yields, decreased quality, and increased production costs for farmers, ultimately affecting consumer prices and market stability. Furthermore, the reliance on chemical fungicides to control fungal pathogens can have detrimental effects on environmental and human health, highlighting the need for sustainable and integrated approaches to disease management.

In conclusion, fungal pathogens represent a formidable threat to crops and plants, capable of causing extensive damage and economic losses in agricultural systems worldwide. Effective disease management strategies, including cultural practices, biological control methods, and resistant crop varieties, are essential for mitigating the impact of fungal infections and ensuring the long-term sustainability of agricultural production. Additionally, research efforts aimed at understanding the biology and ecology of fungal pathogens are crucial for developing innovative solutions to combat these destructive organisms and safeguard global food security.</Text>
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
    

export default Fungal;
