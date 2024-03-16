import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Organic = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://cdn.cdnparenting.com/articles/2021/07/16191322/380433403.webp' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Organic Fertilizers</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Organic fertilizers, derived from natural sources such as compost, manure, and organic waste, play a vital role in promoting plant growth and enhancing soil health. Unlike synthetic fertilizers, organic fertilizers release nutrients slowly, providing a steady supply of essential elements that plants need for optimal growth. One significant benefit of organic fertilizers is their ability to improve soil structure and fertility over time. By adding organic matter to the soil, these fertilizers increase its water retention capacity and aeration, which creates a favorable environment for plant roots to thrive.

Furthermore, organic fertilizers contribute to the development of beneficial microorganisms in the soil, which aid in nutrient uptake by plants. These microorganisms break down organic matter into simpler forms, making nutrients more accessible to plant roots. As a result, plants grown with organic fertilizers often exhibit improved resilience to diseases and pests. Additionally, the gradual release of nutrients from organic fertilizers reduces the risk of nutrient leaching, minimizing environmental pollution and preserving water quality.

Moreover, organic fertilizers enhance soil biodiversity by supporting a diverse array of microbial life, including bacteria, fungi, and earthworms. This biodiversity helps to maintain soil fertility and resilience to environmental stressors, ultimately promoting sustainable agricultural practices. By enriching the soil with organic matter, organic fertilizers also contribute to carbon sequestration, mitigating the effects of climate change by reducing the concentration of greenhouse gases in the atmosphere.

In addition to their environmental benefits, organic fertilizers foster long-term soil health and productivity, ensuring the sustainability of agricultural systems. Unlike synthetic fertilizers, which can degrade soil quality over time, organic fertilizers improve soil structure and fertility, leading to higher yields and better crop quality. Furthermore, organic farming practices that rely on natural fertilizers promote biodiversity and ecosystem resilience, creating a more balanced and sustainable food production system.

Overall, organic fertilizers play a crucial role in supporting plant growth and soil health while minimizing environmental impact. By harnessing the power of natural processes, organic fertilizers provide a sustainable solution to the challenges of modern agriculture, ensuring the long-term viability of food production systems. As the demand for environmentally friendly agricultural practices continues to grow, organic fertilizers offer a promising alternative to conventional chemical-based fertilizers, promoting a healthier and more sustainable future for farming and the environment.</Text>
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
    

export default Organic;
