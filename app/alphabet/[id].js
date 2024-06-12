import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { alphabets } from '../../assets/constants/pageui';
import ImageBlurBackground from '../../components/ImageBlurBackground';
import playSound from '../../utils/playAudio';

export default function AlphabetDetails() {
    const { id } = useGlobalSearchParams()
    const [currentId, setCurrentId] = useState(id)
    const [alphabet, setAlphabet] = useState({})

    useEffect(() => {
        const findAlphabet = alphabets.find(a => a.id == currentId)
        setAlphabet(findAlphabet)
        playSound(findAlphabet.audio)
    }, [currentId])
    
    return (
        <ImageBlurBackground
            title={`${alphabet.capital} for ${alphabet.word}`}
        >
            <ScrollView
                className='flex-1'
            >
                <View
                    className='flex-row items-center'
                >
                    <View
                        className='px-2 space-y-2'
                    >
                        <Text
                            className='w-20 bg-white/40 text-center border border-red-500 text-[50px] text-red-500 font-bold rounded-xl'
                        >
                            {alphabet.capital}
                        </Text>
                        <Text
                            className='w-20 bg-white/40 text-center border border-blue-500 text-[50px] text-blue-500 font-bold rounded-xl'
                        >
                            {alphabet.small}
                        </Text>
                    </View>
                    <Image
                        source={alphabet.word_image}
                        className='w-[200px] h-[200px] mx-auto'
                    />
                </View>
                <View
                    className='mt-10 flex-row justify-center'
                >
                    <Text
                        className='px-6 text-[60px] bg-sky-300/40 text-white font-bold text-center border border-sky-500 rounded-xl'
                    >
                        {alphabet.word}
                    </Text>
                </View>
                <View
                    className='mt-20'
                >
                    <FlatList
                        data={alphabets}
                        keyExtractor={(item => item.id)}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => setCurrentId(item.id)}
                                className='h-20 w-20 mx-1 px-2 bg-white/50 rounded-xl'
                            >
                                <Text
                                    className='text-[50px] text-center font-bold'
                                    style={{
                                        color: item.textColor ? item.textColor : '#ffffff'
                                    }}
                                >
                                    {item.capital}
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </ScrollView>

        </ImageBlurBackground>
    )
}