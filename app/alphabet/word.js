import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { alphabets } from '../../assets/constants/pageui'
import { useRouter } from 'expo-router'
import playSound from '../../utils/playAudio'

export default function Words() {
  const router = useRouter()
  return (
    <ImageBackground
    source={require('../../assets/image/gradient_background.jpg')}
    blurRadius={20}
  >
    <ScrollView>
      <View
        className='space-y-2 p-2'
      >
        {
          alphabets.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={()=>{
                router.push(`/alphabet/${item.id}`)
                playSound(item.audio)
              }}
              className='p-2 bg-white/50 rounded-xl'
            >
              <View
                className='flex-row items-center space-x-6'
              >
                <Image
                  source={item.word_image}
                  className='h-24 w-24'
                />
                <View>
                  <View
                    className='flex-row'
                  >
                    <Text
                      className='text-5xl text-red-500'
                    >
                      {item.capital}
                    </Text>
                    <Text
                      className='text-5xl text-blue-500'
                    >
                      {item.small}
                    </Text>
                  </View>
                  <Text>{item.word}</Text>
                </View>

              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
    </ImageBackground>
    
  )
}