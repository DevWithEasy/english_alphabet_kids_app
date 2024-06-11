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
                    className='w-12 h-12'
                />
            </View>
            <Text
                className={cn(textStyle)}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}