import { View, Text } from 'react-native'
import React from 'react'
import ImageBlurBackground from '../components/ImageBlurBackground'
import bgImage from '../assets/image/game_bg.jpg'

export default function Games() {
  return (
    <ImageBlurBackground
      image={bgImage}
      blurRadius={5}
    >
          <View>
      <Text>Games</Text>
    </View>
    </ImageBlurBackground>

  )
}