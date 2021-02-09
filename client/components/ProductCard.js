import React from 'react'
import { Card, Title } from 'react-native-paper'
import { Image, Text } from 'react-native'
function ProductCard ({ item }) {
  function convertedRupiah () {
    let rupiah = ''
    const angkarev = (item.price).toString().split('').reverse().join('')
    for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')
  }
  return (
    <Card style={{height: 270, width: 180, marginRight: 15, borderColor: 'black'}}>
      <Image source={{ uri: item.imageUrl }} style={{width: 180, height: 160}}/>
      <Card.Content>
        <Text style={{fontSize: 11, marginTop: 10}}>{item.name}</Text>
        <Text style={{fontSize: 11, fontWeight: 'bold', marginTop: 3}}>{convertedRupiah()}</Text>
      </Card.Content>
    </Card>
  )
}

export default ProductCard