import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Azospirilium = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://krishisevakendra.in/cdn/shop/files/aceto.webp?v=1699602730&width=600' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Azospirilium</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Azospirillum is a genus of nitrogen-fixing bacteria that plays a crucial role in promoting plant growth and enhancing agricultural productivity. These bacteria are known for their ability to form symbiotic relationships with various plants, especially grasses and cereals. One of the key features of Azospirillum is its capacity to fix atmospheric nitrogen into a form that can be readily utilized by plants, a process that helps reduce the dependence on synthetic nitrogen fertilizers.

One of the notable characteristics of Azospirillum is its versatility in colonizing the rhizosphere, the region of soil surrounding plant roots. These bacteria exhibit chemotaxis, allowing them to move towards plant roots, where they form biofilms and establish a close association with the root surface. This interaction benefits both the bacteria and the plants, as Azospirillum can derive nutrients from root exudates while providing the host plant with fixed nitrogen. This mutualistic relationship contributes to increased nutrient uptake, improved root development, and enhanced resistance to certain environmental stresses.

Moreover, Azospirillum has been found to produce plant growth-promoting substances, including auxins and cytokinins. These phytohormones play a crucial role in regulating various physiological processes in plants, such as cell division, elongation, and differentiation. By promoting the synthesis of these growth regulators, Azospirillum helps stimulate root and shoot development, leading to healthier and more robust plants. Additionally, the bacteria can enhance the availability of essential nutrients, such as phosphorus and iron, by solubilizing mineral compounds in the soil.

In agriculture, Azospirillum has gained attention as a potential biofertilizer and biopesticide, offering an environmentally friendly alternative to chemical inputs. Farmers are increasingly exploring the use of Azospirillum-based products to improve soil fertility, increase crop yields, and reduce the environmental impact associated with traditional farming practices. As research continues, the full potential of Azospirillum in sustainable agriculture is yet to be fully realized, but its unique capabilities make it a promising ally in efforts to promote eco-friendly and efficient farming systems.</Text>
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
    
export default Azospirilium;
