import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Leafhopper = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://www.planetnatural.com/wp-content/uploads/2012/12/leafhopper-control-1.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Leafhopper</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Leafhoppers are small, wedge-shaped insects belonging to the family Cicadellidae, known for their ability to wreak havoc on crops and plants. Despite their diminutive size, leafhoppers pose a significant threat to agricultural production worldwide. These pests feed on plant sap by piercing the leaves and stems with their sharp mouthparts, causing damage that can lead to stunted growth, reduced yields, and even plant death.

One of the primary ways leafhoppers damage crops and plants is by transmitting harmful pathogens. Many species of leafhoppers are vectors for plant diseases such as aster yellows, phytoplasma, and various viruses. As they feed on infected plants, they acquire the pathogens and spread them to healthy plants as they move from one host to another. This transmission can result in widespread infection and devastation within crop fields and gardens.

Leafhoppers also cause direct damage to plants through their feeding behavior. As they puncture plant tissues to extract sap, they create small wounds that weaken the plant's structure and impair its ability to photosynthesize effectively. This can lead to yellowing of leaves, wilting, and ultimately, the death of affected plant tissues. In severe cases, heavy infestations of leafhoppers can defoliate entire plants, leaving them vulnerable to further stress and secondary infections.

Furthermore, leafhoppers reproduce rapidly, with multiple generations emerging throughout the growing season. This rapid reproduction allows leafhopper populations to escalate quickly, especially under favorable environmental conditions. As their numbers increase, so does the extent of damage they inflict on crops and plants. Farmers and gardeners often struggle to keep leafhopper populations in check, leading to the widespread use of chemical pesticides that can have negative impacts on the environment and non-target organisms.

Efforts to manage leafhopper infestations often involve a combination of cultural, biological, and chemical control methods. These may include the use of insect-resistant crop varieties, the introduction of natural predators and parasitoids, and targeted applications of insecticides. Integrated pest management (IPM) strategies aim to minimize the reliance on chemical pesticides while effectively managing leafhopper populations and mitigating the damage they cause. Despite these efforts, leafhoppers remain a persistent threat to agricultural sustainability and food security globally, highlighting the ongoing need for innovative solutions to combat these destructive pests.</Text>
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
    

export default Leafhopper;
