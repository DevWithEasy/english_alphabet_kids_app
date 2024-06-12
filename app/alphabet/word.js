import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { alphabets } from '../../assets/constants/pageui'
import { useRouter } from 'expo-router'
import playSound from '../../utils/playAudio'
import ImageBlurBackground from '../../components/ImageBlurBackground'

export default function Words() {
  const router = useRouter()
  return (
    <ImageBlurBackground
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
                onPress={() => {
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
                    className='h-20 w-20'
                  />
                  <View>
                    <View
                      className='flex-row'
                    >
                      <Text
                        className='pt-5 text-5xl text-red-500'
                      >
                        {item.capital}
                      </Text>
                      <Text
                        className='pt-5 text-5xl text-blue-500'
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
    </ImageBlurBackground>

  )
}