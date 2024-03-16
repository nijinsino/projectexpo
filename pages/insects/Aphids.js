import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Aphids = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/colorado-beetle-eats-a-potato-leaves-young-royalty-free-image-542328690-1531259828.jpg?crop=0.738xw:0.558xh;0.221xw,0.183xh&resize=1200:*' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Aphids</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Aphids, tiny insects belonging to the order Hemiptera, pose a significant threat to crops and plants worldwide. These minuscule pests, often no larger than a pinhead, reproduce rapidly and can quickly infest entire fields or gardens. Their destructive capabilities stem from their feeding habits and reproductive strategies.

One of the primary ways aphids wreak havoc on crops and plants is through their voracious appetite for sap. Using their piercing-sucking mouthparts, aphids tap into the vascular systems of plants to extract the nutrient-rich sap. This relentless feeding weakens the plants, stunting growth, reducing yield, and making them more susceptible to diseases and environmental stressors.

Furthermore, aphids excrete a sugary substance known as honeydew as they feed. This honeydew not only attracts ants but also serves as a breeding ground for sooty mold, a fungal disease that further inhibits photosynthesis and plant growth. As a result, plants infested with aphids often exhibit a black, sooty appearance, leading to decreased photosynthetic activity and compromised plant health.

Another significant concern with aphid infestations is their ability to transmit plant viruses. As aphids move from plant to plant, they can pick up viruses from infected plants and transmit them to healthy ones as they feed. This transmission of viruses can result in devastating losses for farmers and gardeners, as infected plants may exhibit symptoms such as stunted growth, leaf discoloration, and reduced fruit quality.

Aphids also possess remarkable reproductive capabilities, with many species capable of rapid reproduction through parthenogenesis, where females can produce offspring without mating. This ability allows aphid populations to explode under favorable environmental conditions, leading to exponential increases in infestation levels and exacerbating the damage inflicted on crops and plants.

In conclusion, aphids represent a formidable threat to agriculture and horticulture due to their destructive feeding habits, transmission of plant viruses, and rapid reproductive rates. Effective management strategies, including biological control methods, insecticides, and cultural practices, are essential for mitigating the damage caused by aphids and safeguarding the health and productivity of crops and plants.</Text>
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
    
export default Aphids;
