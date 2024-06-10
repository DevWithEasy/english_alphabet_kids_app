import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { alphabets } from '../../assets/constants/pageui'
import { useRouter } from 'expo-router'

export default function Words() {
  const router = useRouter()
  return (
    <ScrollView>
      <View
        className=''
      >
        {
          alphabets.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={()=>router.push(`/alphabet/${item.id}`)}
              className='p-2 bg-stone-50 border-b border-blue-600'
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
  )
}