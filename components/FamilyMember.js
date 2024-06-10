import { View, Text, Image } from 'react-native'
import React from 'react'
import cn from '../utils/cn'

export default function FamilyMember({ image, title, styles, textStyle }) {
    return (
        // <View
        //     className={cn('w-32 m-1 p-2 bg-white rounded-xl items-center space-y-3',styles)}
        // >
        //     <Image
        //         source={image}
        //         className='w-12 h-12'
        //     />
        //     <Text
        //         className={cn(textStyle)}
        //     >
        //         {title}
        //         </Text>
        // </View>
        <View
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
        </View>
    )
}