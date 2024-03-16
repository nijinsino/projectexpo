import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Azostobacter = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://krishisevakendra.in/cdn/shop/files/azobacter.webp?v=1699602711&width=600' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Azostobacter</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Azotobacter bacteria are renowned for their versatility and adaptability to diverse environmental conditions. They thrive in soils with pH ranging from acidic to alkaline and can tolerate varying levels of salinity, making them well-suited for different agricultural settings worldwide. Their ability to fix atmospheric nitrogen not only benefits plants directly but also enriches the soil with organic nitrogen, enhancing its fertility over time.

Another intriguing aspect of Azotobacter is its ability to produce various enzymes that play vital roles in nutrient cycling and organic matter decomposition within the soil. These enzymes help break down complex organic compounds into simpler forms that are more readily available for plant uptake, thus contributing to overall soil health and productivity. Additionally, Azotobacter's metabolic activities contribute to the suppression of harmful soil pathogens, thereby promoting plant growth and reducing the need for chemical interventions.

Azotobacter species have been extensively studied for their potential applications in bioremediation – the process of using living organisms to degrade or neutralize pollutants in the environment. These bacteria possess the capacity to metabolize a wide range of organic compounds, including hydrocarbons, pesticides, and heavy metals, thus offering promising solutions for environmental cleanup and restoration efforts in contaminated sites.

In agricultural systems, Azotobacter-based biofertilizers have gained attention as sustainable alternatives to conventional fertilizers. These biofertilizers can be applied to seeds, soil, or plants directly, providing a natural source of nitrogen and other growth-promoting substances. By harnessing the symbiotic relationship between Azotobacter and plants, farmers can improve crop yields, reduce production costs, and mitigate the environmental impacts associated with chemical inputs.

Moreover, ongoing research on Azotobacter continues to unravel its genetic and metabolic capabilities, paving the way for the development of novel biotechnological applications. From biofuel production to bioplastics synthesis, Azotobacter holds promise as a versatile platform for the sustainable production of valuable compounds using renewable resources. As our understanding of these remarkable bacteria deepens, so too does the potential for harnessing their beneficial traits to address pressing challenges in agriculture, environmental management, and biotechnology.</Text>
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
    

export default Azostobacter;
