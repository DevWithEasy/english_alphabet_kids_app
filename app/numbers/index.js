import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { number_0_to_100, numberdata } from '../../assets/constants/pageui'
import { useGlobalSearchParams } from 'expo-router'
import playSound from '../../utils/playAudio'

export default function Numbers() {
    const { q } = useGlobalSearchParams()
    const [data, setData] = useState([])

    useEffect(() => {
        setData(
            q === '0_9' ? numberdata : number_0_to_100
        )
    }, [q])

    return (
        <ScrollView
            style={{
                backgroundColor : q === '0_9' ? '' : 'white'
            }}
        >
            <View
                className='flex-row flex-wrap'
            >
                {
                    data.map(item =>
                        <TouchableOpacity
                            key={item.id}
                            onPress={()=>{
                                playSound(item.audio)
                            }}
                            className='w-4/12 p-2'
                        >
                            <View
                                className='py-5 justify-center items-center space-y-5 rounded-xl shadow'
                                style={{
                                    backgroundColor : item.backgroundColor ? item.backgroundColor : '#ffffff'
                                }}
                            >
                                {
                                    item.image ?
                                        <Image
                                            source={item.image}
                                            className='h-24 w-24'
                                        />
                                        :
                                        <Text
                                            className='text-[70px] font-bold text-green-600'
                                            style={{
                                                color : item.textColor ? item.textColor : '#ffffff'
                                            }}
                                        >
                                            {item.number}
                                        </Text>
                                }
                                <Text
                                    className={`${item.image ? 'text-xl' : 'text-md'}`}
                                    style={{
                                        color : item.textColor ? item.textColor : '#000000'
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
    )
}