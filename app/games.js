import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ImageBlurBackground from '../components/ImageBlurBackground'
import { games } from '../assets/constants/pageui'

export default function Games() {
  return (
    <ImageBlurBackground
      title='Learing Games'
    >
      <ScrollView>
        <View
          className='flex-row flex-wrap'
        >
          {
            games.map(game=>
              <TouchableOpacity
                key={game.id}
                onPress={()=>{}}
                className='w-1/2 h-36 p-1'
              >
                <View
                  className='h-full p-4 bg-white/70 rounded-md items-center space-y-3'
                >
                  <Image
                    source={game.image}
                    className='w-16 h-16'
                  />
                  <Text
                    style={{
                      color: game.textColor
                    }}
                  >
                    {game.name}
                    </Text>
                </View>
              </TouchableOpacity>
            )
          }
        </View>
      </ScrollView>

    </ImageBlurBackground>

  )
}