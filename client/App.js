import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ProductCard from './components/ProductCard.js'

export default function App() {

  const [items, setItems] = useState([])
  useEffect (() => {
    fetch("http://192.168.43.35:3000/items")
      .then(res => {
        return res.json()
      })
      .then(items => {
        setItems(items)
      })
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terakhir dilihat 
        <Text style={styles.subtitle}>  Lihat semua</Text>
      </Text>
      <View style={{marginTop: 20, height: 300}}>
        <ScrollView horizontal={true} style={{paddingHorizontal: 20}}>
          {
            items?.map(item => <ProductCard key={item.id} item={item}/>)
          }
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25
  },
  subtitle: {
    color: '#77b300',
    fontWeight: 'bold',
    fontSize: 15
  }
});
