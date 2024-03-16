import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Nitrates = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://www.jiomart.com/images/product/original/rvqlteupaz/chinpack-organic-vermicompost-fertilizer-organic-manure-for-plants-2-5-kg-product-images-orvqlteupaz-p599026047-3-202303030801.jpg?im=Resize=(420,420)' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Mixture of Nitrates</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Nitrate-based fertilizers are a fundamental component in the world of agriculture, playing a crucial role in enhancing plant growth and ensuring optimal crop yields. These fertilizers typically contain a mixture of nitrates, such as ammonium nitrate, potassium nitrate, and calcium nitrate, among others. The use of nitrates provides plants with essential nitrogen, a primary nutrient necessary for their growth and development. Nitrogen is a key component of chlorophyll, the green pigment responsible for photosynthesis, making it vital for the synthesis of proteins, enzymes, and other cellular components.

One of the significant benefits of using nitrate-based fertilizers lies in their immediate availability to plants. Unlike organic forms of nitrogen, which must be broken down by soil microorganisms before plants can absorb them, nitrates are readily soluble in water and can be taken up by plant roots almost instantly. This rapid availability ensures that plants have a consistent supply of nitrogen, promoting robust growth and healthy development throughout the growing season. Additionally, nitrate fertilizers are highly efficient in delivering nitrogen to plants, minimizing nutrient loss through leaching or volatilization.

Furthermore, the controlled application of nitrate-based fertilizers allows for precise nutrient management, enabling farmers to tailor their fertilizer regimes to the specific needs of different crops and soil conditions. By optimizing the nitrogen supply, farmers can enhance the overall productivity and quality of their crops while minimizing environmental impact. Properly balanced nitrogen levels contribute to improved crop yields, enhanced nutrient uptake efficiency, and reduced risk of nitrogen runoff, which can contaminate water sources and harm ecosystems.

In conclusion, the strategic use of nitrate-based fertilizers offers numerous benefits for plant growth, agricultural productivity, and environmental sustainability. By providing a readily available source of nitrogen, these fertilizers support healthy plant development, increase crop yields, and enable farmers to optimize nutrient management practices. As global demand for food continues to rise, the responsible use of nitrate fertilizers will remain integral to meeting the challenges of modern agriculture while preserving the health of our planet's ecosystems.</Text>
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
    
export default Nitrates;
