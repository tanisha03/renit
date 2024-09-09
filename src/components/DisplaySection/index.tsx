import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import UIText from '../UI/Text';

interface Props{
    items: Array<any>;
    title?: string;
    size?: number;
    align?: string;
}

const DisplaySection = (props: Props) => {
  const {items, title, size=80, align='center'} = props;

  return (
    <View style={{marginVertical: 18, marginLeft: 16}}>
      {title ? <UIText style={{color: 'black', fontSize: 18,lineHeight: 24, marginBottom: 8 }}>{title}</UIText> : null}
      <ScrollView horizontal={true}>
        {items.map((item, idx) => (
            <View key={idx} style={{marginRight: 16, alignItems: align}}>
                <Image source={{uri: item.image}} style={{ height:size, width:size, borderRadius: 16, marginBottom: 8 }}/>
                <UIText style={{color: 'black', fontFamily:'Poppins-Bold'}}>{item.header}</UIText>
                {item.subheader ? <UIText style={{color: 'black', fontSize: 12, lineHeight: 14}} weight='regular'>{item.subheader}</UIText> : null}
                {item.pricePerDay ? <UIText style={{color: 'black', fontSize: 12}} weight='regular'>
                  <>
                  <UIText style={{fontWeight: '800', fontSize: 16, lineHeight: 20}}>₹{item.pricePerDay}{' '}</UIText> 
                  per day
                  </>
                </UIText> : null}
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default DisplaySection;