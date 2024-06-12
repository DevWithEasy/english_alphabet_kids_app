import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import cn from '../utils/cn'
import playSound from '../utils/playAudio'

export default function FamilyMember({ image, title, audio, styles, textStyle }) {
    return (
        <TouchableOpacity
            onPress={()=>playSound(audio)}
            className={cn('w-32 m-1 p-2 rounded-xl items-center space-y-3', styles)}
        >
            <View
                className='w-16 h-16 p-2 items-center bg-white rounded-full'
            >
                <Image
                    source={image}
                    className='w-10 h-10'
                />
            </View>
            <Text
                className={cn('text-xs',textStyle)}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}