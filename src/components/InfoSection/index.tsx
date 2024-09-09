import { View } from 'react-native'
import React from 'react'
import { Button } from '@ant-design/react-native'
import UIText from '../UI/Text'

const InfoSection = () => {
  return (
    <View style={{backgroundColor:'#ABD2F6', borderWidth: 1, borderColor: '#118EE9', padding: 16, marginHorizontal: 16, borderRadius: 8}}>
      <UIText style={{color: 'black', fontSize: 16, lineHeight: 20, marginBottom: 6}}>Don't see what you need?</UIText>
      <UIText style={{color: 'black',  fontSize: 14, lineHeight: 18, marginBottom: 16}} weight='regular'>Request a product and we will do our best to get it on rent for you!</UIText>
      <Button type="primary" style={{height: 40}}>
        <UIText style={{color: 'white'}}>{'Unavilablity Form >'}</UIText>
      </Button>
    </View>
  )
}

export default InfoSection