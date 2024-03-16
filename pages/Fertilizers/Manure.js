import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Manure = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://housing.com/news/wp-content/uploads/2022/11/What-is-manure-Manure-types-and-benefits-t.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Manure</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Manure, often considered a humble resource, plays a vital role in enhancing soil fertility and supporting plant growth. Comprised of decomposed organic matter, manure serves as a nutrient-rich fertilizer that supplies essential elements like nitrogen, phosphorus, and potassium to crops and plants. Its benefits extend far beyond mere soil enrichment, encompassing various aspects of agricultural sustainability and productivity.

Firstly, manure acts as a natural source of nutrients, providing plants with the essential elements required for healthy growth. Nitrogen, phosphorus, and potassium are crucial components of plant development, influencing processes such as photosynthesis, root growth, and fruit formation. By incorporating manure into the soil, farmers ensure a steady supply of these nutrients, reducing the reliance on synthetic fertilizers and promoting environmentally-friendly farming practices.

Secondly, manure enhances soil structure and water retention capacity, thereby improving overall soil quality. Organic matter present in manure serves as a binding agent, aggregating soil particles and creating a porous soil structure. This enhanced structure allows for better water infiltration and root penetration, reducing soil erosion and promoting optimal plant growth even during periods of drought or excessive rainfall.

Furthermore, manure fosters the development of beneficial soil microorganisms, including bacteria, fungi, and earthworms, which play critical roles in nutrient cycling and soil health. These microorganisms break down organic matter present in manure, releasing nutrients in a form that plants can readily absorb. Additionally, they help suppress harmful pathogens and diseases, contributing to a balanced and resilient soil ecosystem that supports robust plant growth.

Moreover, manure serves as a sustainable solution for managing organic waste generated from livestock farming and other agricultural activities. Instead of being disposed of as waste, manure is recycled back into the soil, closing the nutrient loop and reducing the environmental impact associated with waste disposal. This cyclical approach to resource management not only minimizes pollution but also reduces the need for chemical fertilizers derived from non-renewable resources.

In conclusion, manure stands as a cornerstone of sustainable agriculture, offering a multitude of benefits that support crop productivity, soil health, and environmental stewardship. By harnessing the power of organic matter, farmers can enrich their soils, nourish their crops, and cultivate a more resilient and sustainable food system for generations to come.</Text>
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
    
export default Manure;
