import { ImageBackground } from 'react-native'
import React from 'react'
import bgImage from '../assets/image/gradient_background.jpg'
import cn from '../utils/cn'

export default function ImageBlurBackground({ image, styles, blurRadius,children }) {
    return (
        <ImageBackground
            source={image ? image : bgImage}
            blurRadius={blurRadius ? blurRadius : 8}
            className={cn('flex-1',styles)}
        >
            {children}
        </ImageBackground>
    )
}