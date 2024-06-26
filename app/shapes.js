import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ImageBlurBackground from '../components/ImageBlurBackground'
import { shapes } from '../assets/constants/pageui'
import playSound from '../utils/playAudio'

export default function Shapes() {
  return (
    <ImageBlurBackground
      title='Shape Introduce'
    >
      <ScrollView>
        <View
          className='p-2 space-y-2'
        >
          {
            shapes.map(item =>
              <TouchableOpacity
                key={item.id}
                onPress={()=>playSound(item.audio)}
                className='px-4 py-2 flex-row justify-between items-center bg-white/50 rounded-xl'
              >
                <Image
                  source={item.image}
                  className='w-20 h-20'
                />
                <Text
                  className='px-2 py-1 text-center font-bold border border-white rounded'
                >
                  {item.name}
                </Text>
                <Image
                  source={item.example}
                  className='w-20 h-20'
                />
              </TouchableOpacity>
            )
          }
        </View>
      </ScrollView>
    </ImageBlurBackground>
  )
}