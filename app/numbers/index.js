import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { number_0_to_100, numberdata } from '../../assets/constants/pageui'
import { useGlobalSearchParams } from 'expo-router'
import playSound from '../../utils/playAudio'
import hexToRgba from '../../utils/hexToRgba'
import ImageBlurBackground from '../../components/ImageBlurBackground'

export default function Numbers() {
    const { q } = useGlobalSearchParams()
    const [data, setData] = useState([])

    useEffect(() => {
        setData(
            q === '0_9' ? numberdata : number_0_to_100
        )
    }, [q])

    return (
        <ImageBlurBackground
            blurRadius={10}
            title={q === '0_9' ? 'Number Introduce' : 'Number 1-100'}
        >
            <ScrollView>
                <View
                    className='flex-row flex-wrap'
                >
                    {
                        data.map(item =>
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => {
                                    playSound(item.audio)
                                }}
                                className='w-6/12 p-2'
                            >
                                <View
                                    className='py-5 justify-center items-center space-y-5 bg-white/60 rounded-xl shadow'
                                >
                                    {
                                        item.image ?
                                            <Image
                                                source={item.image}
                                                className='h-20 w-20'
                                            />
                                            :
                                            <Text
                                                className='text-[70px] font-bold text-green-600'
                                                style={{
                                                    color: item.textColor ? item.textColor : '#ffffff'
                                                }}
                                            >
                                                {item.number}
                                            </Text>
                                    }
                                    <Text
                                        className={`${item.image ? 'text-xl' : 'text-md'}`}
                                        style={{
                                            color: item.textColor ? item.textColor : '#000000'
                                        }}
                                    >
                                        {item.title}
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