import { ImageBackground, Platform, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import bgImage from '../assets/image/gradient_background.jpg'
import cn from '../utils/cn'
import Constant from 'expo-constants'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

export default function ImageBlurBackground({ header = true, title, image, styles, blurRadius, children }) {
    const router = useRouter()
    return (
        <ImageBackground
                source={image ? image : bgImage}
                blurRadius={blurRadius ? blurRadius : 8}
                className={cn('flex-1', styles)}
                style={{
                    paddingTop: Platform.OS === 'ios' ? 0 : Constant.statusBarHeight
                }}
            >
                {header &&
                    <View
                        className='mx-2 mb-1 p-2 flex-row items-center space-x-2 bg-white/50 rounded-xl'
                    >
                        <TouchableOpacity
                            onPress={() => router.back()}
                        >
                            <Ionicons name="arrow-back-outline" size={20} color="black" />
                        </TouchableOpacity>
                        <Text
                            className='text-lg'
                        >
                            {title}
                        </Text>
                    </View>
                }
                {children}
            </ImageBackground>
    )
}