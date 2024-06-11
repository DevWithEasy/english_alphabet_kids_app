import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ImageBlurBackground from '../components/ImageBlurBackground'
import { shapes } from '../assets/constants/pageui'

export default function Shapes() {
  return (
    <ImageBlurBackground>
      <ScrollView>
        <View
          className='p-2 space-y-2'
        >
          {
            shapes.map(item =>
              <TouchableOpacity
                key={item.id}
                className='px-4 py-2 flex-row justify-between items-center bg-white/50 rounded-xl'
              >
                <Image
                  source={item.image}
                  className='w-24 h-24'
                />
                <Text
                  className='p-1 text-center text-lg border border-white rounded-xl'
                >
                  {item.name}
                </Text>
                <Image
                  source={item.example}
                  className='w-24 h-24'
                />
              </TouchableOpacity>
            )
          }
        </View>
      </ScrollView>
    </ImageBlurBackground>
  )
}