import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Mosaic = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://www.agrifarming.in/wp-content/uploads/2022/10/Controlling-Mosaic-Viruses-in-Plants1.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Mosaic Viruse</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Mosaic viruses represent a significant threat to agricultural crops and plants worldwide. These viruses are known for their ability to cause distinctive patterns of discoloration and deformities in leaves, stems, and fruits, resembling a mosaic-like appearance. They primarily affect a wide range of plants including tomatoes, peppers, cucumbers, tobacco, and many others. The devastation caused by mosaic viruses stems from their mode of transmission, mechanisms of infection, and the resulting physiological changes in infected plants.

Mosaic viruses are typically transmitted through various means including direct contact between infected and healthy plants, contaminated tools, soil, and particularly through insect vectors such as aphids and whiteflies. Once introduced into a susceptible plant, the virus rapidly replicates within the plant's cells, interfering with its normal physiological processes. As the virus spreads, it causes the characteristic mosaic-like patterns of discoloration and deformities on leaves and other plant parts, severely compromising their ability to photosynthesize and produce nutrients.

The destructive impact of mosaic viruses on crops and plants is multifaceted. Firstly, infected plants experience stunted growth and reduced vigor due to the disruption of vital cellular functions. This ultimately leads to decreased yields and poor quality produce, significantly affecting agricultural productivity and economic viability for farmers. Secondly, mosaic viruses can render plants more susceptible to other diseases and environmental stressors, further exacerbating their decline and susceptibility to secondary infections.

Furthermore, mosaic viruses can also impact the aesthetic appeal of ornamental plants, diminishing their value in landscaping and horticultural settings. The unsightly appearance caused by mosaic symptoms can deter consumers and limit marketability, resulting in financial losses for growers and nurseries. In addition to economic losses, the spread of mosaic viruses can also have ecological consequences by disrupting natural ecosystems and biodiversity, especially in regions where affected plants play vital roles in supporting local flora and fauna.

Efforts to manage mosaic viruses typically involve a combination of preventive measures and control strategies. These may include the use of disease-resistant plant varieties, implementing strict sanitation practices to minimize virus transmission, employing biological controls such as predatory insects to manage vector populations, and utilizing chemical treatments when necessary. Integrated pest management approaches that emphasize cultural practices, crop rotation, and monitoring for early detection of virus symptoms are also crucial for mitigating the impact of mosaic viruses on crops and plants. Ultimately, a coordinated and proactive approach is essential for effectively combating the spread and devastation caused by mosaic viruses in agricultural and horticultural systems.</Text>
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
    

export default Mosaic;
