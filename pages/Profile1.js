import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { auth, collection, getDocs, query, where, db } from './firebase';

const Profile1 = ({ navigation }) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
  
        if (currentUser) {
          const userId = currentUser.uid;
          const userRef = collection(db, 'USERS');
          const q = query(userRef, where("Userid", "==", userId));
          const querySnapshot = await getDocs(q);
  
          if (querySnapshot.empty) {
            alert("No Matching Details Found");
            return;
          }
  
          const fetchedData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setData(fetchedData);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        // Handle the error here (e.g., show an error message to the user)
      }
    };
  
    return (
      <ScrollView style={styles.container}>
        {data.map((item, index) => (
          <View key={index} style={styles.profileCard}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.detailLabel}>Email:</Text>
              <Text style={styles.detailText}>{item.email}</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailLabel}>Age:</Text>
              <Text style={styles.detailText}>{item.age}</Text>
            </View>
            {/* Add more details as needed */}
          </View>
        ))}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detailText: {
    flex: 1,
  },
});

export default Profile1;
