import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { numberdata } from '../assets/constants/pageui'

export default function Numbers() {
    return (
        <ScrollView>
            <View
                className='flex-row flex-wrap'
            >
                {
                    numberdata.map(item =>
                        <TouchableOpacity
                            key={item.id}
                            className='w-4/12 p-2'
                        >
                            <View
                                className='py-5 justify-center items-center space-y-5 bg-white rounded-xl'
                            >
                                <Image
                                    source={item.image}
                                    className='h-24 w-24'
                                />
                                <Text
                                className='text-xl'
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