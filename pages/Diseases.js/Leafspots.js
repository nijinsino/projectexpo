import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Leafspots = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/%27Cercospora_capsici.jpg/220px-%27Cercospora_capsici.jpg'}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Leafspots</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >Leafspots, often caused by various fungal pathogens, bacteria, or environmental factors, pose significant threats to crops and plants worldwide. These small, circular lesions on leaves may seem inconsequential at first glance, but their impact can be devastating. Firstly, leafspots compromise the plant's ability to carry out photosynthesis effectively. As they multiply and spread across foliage, they obstruct the leaf's surface area, limiting light absorption and reducing the plant's ability to produce energy. This diminished photosynthetic capacity weakens the overall health of the plant, hindering its growth and development.

Secondly, leafspots create entry points for pathogens to infiltrate deeper into the plant tissues. Once established, these pathogens can proliferate rapidly, causing systemic infections that compromise the entire plant's vitality. Through the lesions, pathogens gain access to the inner tissues, where they can disrupt vascular systems, impeding nutrient and water transport throughout the plant. As a result, affected plants may exhibit stunted growth, wilting, and ultimately, yield loss.

Moreover, leafspots weaken the plant's natural defense mechanisms, making it more susceptible to other diseases and environmental stressors. As the plant redirects its resources to combat the infection, its ability to fend off other pathogens or withstand adverse conditions diminishes. This leaves the plant vulnerable to secondary infections and exacerbates its overall decline. Additionally, the spread of leafspot diseases can be exacerbated by environmental conditions conducive to pathogen growth, such as high humidity, warm temperatures, and poor air circulation.

Furthermore, leafspots not only impact the current crop or plant but also have long-term consequences for future growing seasons. Infected plant debris and spores can persist in the soil or nearby plant residues, serving as reservoirs for reinfection in subsequent plantings. Without proper management strategies, such as crop rotation, sanitation practices, and the use of disease-resistant cultivars, leafspot diseases can persist and intensify over time, leading to significant economic losses for farmers and growers.

In conclusion, leafspot diseases represent a formidable challenge for agricultural productivity and plant health. Their destructive nature compromises photosynthetic efficiency, facilitates pathogen invasion, weakens plant defenses, and perpetuates long-term cycles of infection. Effective disease management strategies, coupled with research into resistant cultivars and sustainable agricultural practices, are essential for mitigating the impact of leafspot diseases and safeguarding global food security.</Text>
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
    

export default Leafspots;
