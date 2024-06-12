import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { alphabets } from '../../assets/constants/pageui'
import ImageBlurBackground from '../../components/ImageBlurBackground'

export default function Words() {
  const router = useRouter()
  return (
    <ImageBlurBackground
      blurRadius={20}
      title='Alphabet Word'
    >
      <ScrollView>
        <View
          className='space-y-2 p-2'
        >
          {
            alphabets.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => router.push(`/alphabet/${item.id}`)}
                className='px-5 py-2 bg-white/50 rounded-xl'
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