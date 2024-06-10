import React, { useEffect, useState } from 'react'
import { Image, Platform, ScrollView, Text, View } from 'react-native'
import * as Constants from 'expo-constants';
import { useGlobalSearchParams } from 'expo-router';
import { alphabets } from '../../assets/constants/pageui';

export default function AlphabetDetails() {
    const { id } = useGlobalSearchParams()
    const [alphabet, setAlphabet] = useState({})
    useEffect(() => {
        setAlphabet(alphabets.find(a => a.id == id))
    }, [id])
    console.log(alphabet)
    return (
        <ScrollView
            className='bg-blue-50'
            style={{
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.default.statusBarHeight
            }}
        >
            <View
                className='mx-6 bg-white rounded-xl'
            >
                <Image
                source={alphabet.word_image}
                className='w-[300px] h-[300px] mx-auto'
            />
            </View>
            
            <View
                className='flex-row'
            >
                <Text
                    className='text-[80px] text-red-500 font-bold'
                >
                    {alphabet.capital}
                </Text>
                <Text
                    className='text-[80px] text-blue-500 font-bold'
                >
                    {alphabet.small}
                </Text>
            </View>
        </ScrollView>
    )
}