import { useGlobalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { alphabets } from '../../assets/constants/pageui'
import ImageBlurBackground from '../../components/ImageBlurBackground'
import playSound from '../../utils/playAudio'

export default function Alphabet() {
  const { q } = useGlobalSearchParams()
  const [title, setTitle] = useState('dfasdf')
  useEffect(() => {
    setTitle(q === 'capital' ? 'Capital Letter' : 'Small Letter')
  }, [q])
  return (
    <ImageBlurBackground
      blurRadius={10}
      title={title}
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
                className='w-6/12 p-2'
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
    </ImageBlurBackground>

  )
}