import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Hispid = ({ navigation }) => {

  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Hispid_beetle.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Hispid Beetle</Text>
            {/* Add your long text here */}
            <Text style={{top:20,fontSize:19,alignItems:'center',fontWeight:'400'}} >The hispid beetle, scientifically known as Aulacophora indica, is a notorious pest that poses a significant threat to crops and plants. Originating from South Asia, this beetle has spread to various regions worldwide, inflicting damage on a wide range of agricultural produce. Its destructive feeding habits make it a formidable adversary for farmers and gardeners alike.

Firstly, the hispid beetle is particularly damaging due to its voracious appetite and broad dietary preferences. It feeds on a variety of plants, including but not limited to beans, cucumbers, melons, and various leafy greens. This indiscriminate feeding behavior makes it difficult for farmers to protect their crops effectively.

Secondly, the hispid beetle inflicts damage not only through consumption but also through its reproductive cycle. Adult beetles lay eggs in the soil near the host plants, where the larvae hatch and begin feeding on the roots. This damages the plant's ability to absorb nutrients and water, weakening its overall health and productivity.

Furthermore, the rapid reproduction rate of the hispid beetle exacerbates the problem. Female beetles can lay hundreds of eggs during their lifetime, leading to exponential population growth in infested areas. This makes it challenging for farmers to control the beetle population and mitigate its impact on crops and plants.

In addition to direct feeding damage, hispid beetles can also transmit plant diseases, further compromising crop health. As they move from plant to plant, they can introduce pathogens that cause diseases such as bacterial wilt and fungal infections. These secondary infections can devastate entire fields and exacerbate the economic losses incurred by farmers.

Efforts to control hispid beetle populations often involve the use of chemical pesticides, which can have negative environmental consequences and may not always be effective in the long term. Integrated pest management strategies that combine cultural, biological, and chemical control methods are increasingly being employed to manage hispid beetle infestations while minimizing environmental impact. Despite these efforts, the hispid beetle remains a persistent threat to agricultural production and requires ongoing vigilance and research to develop sustainable management solutions.</Text>
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
    

export default Hispid;
