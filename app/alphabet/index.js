import { View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { useGlobalSearchParams, useNavigation } from 'expo-router'
import playSound from '../../utils/playAudio'
import { alphabets } from '../../assets/constants/pageui'
import { useLayoutEffect } from 'react'

export default function Alphabet() {
  const { q } = useGlobalSearchParams()
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      title: q === 'capital' ? 'Capital Letter' :'Small Letter',
    });
  }, [navigation]);
  return (
    <ImageBackground
      source={require('../../assets/image/gradient_background.jpg')}
      blurRadius={10}
    >
      <ScrollView>
      <View
        className='flex-row flex-wrap'
      >
        {
          alphabets.map(item =>
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                playSound(item.audio)
              }}
              className='w-4/12 p-2'
            >
              <View
                className='py-7 justify-center items-center space-y-5 bg-white/70 rounded-xl shadow'
              >
                <Image
                  source={q === 'capital' ? item.capital_image : item.small_image}
                  className='h-24 w-24'
                />
              </View>
            </TouchableOpacity>
          )
        }
      </View>

    </ScrollView>
    </ImageBackground>
    
  )
}