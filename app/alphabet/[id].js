import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, Platform, Text, TouchableOpacity, View } from 'react-native'
import Constants from 'expo-constants';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { alphabets } from '../../assets/constants/pageui';
import { AntDesign } from '@expo/vector-icons';
import playSound from '../../utils/playAudio';
import { Ionicons } from '@expo/vector-icons';

export default function AlphabetDetails() {
    const router = useRouter()
    const { id } = useGlobalSearchParams()
    const [currentId,setCurrentId] = useState(id)
    const [alphabet, setAlphabet] = useState({})
    useEffect(() => {
        setAlphabet(alphabets.find(a => a.id == id))
    }, [id])

    return (
        <ImageBackground
            source={require('../../assets/image/word_background.jpg')}
            resizeMode='cover'
            blurRadius={5}
            className='flex-1 px-2 bg-blue-50'
            style={{
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <View
                className='h-[350px] flex-row items-center pt-20'
            >
                <View
                    className='px-2 space-y-2'
                >
                    <Text
                        className='w-20 bg-white/40 text-center border border-red-500 text-[60px] text-red-500 font-bold rounded-xl'
                    >
                        {alphabet.capital}
                    </Text>
                    <Text
                        className='w-20 bg-white/40 text-center border border-blue-500 text-[60px] text-blue-500 font-bold rounded-xl'
                    >
                        {alphabet.small}
                    </Text>
                </View>
                <Image
                    source={alphabet.word_image}
                    className='w-[300px] h-[300px] mx-auto'
                />
            </View>
            <View
                className='mt-20 flex-row justify-center'
            >
                <Text
                    className='px-6 text-[80px] bg-sky-300/40 text-white font-bold text-center border border-sky-500 rounded-xl'
                // style={{
                //     color: alphabet.textColor
                // }}
                >
                    {alphabet.word}
                </Text>
            </View>
            <View
                className='mt-10'
            >
                <FlatList
                data={alphabets}
                keyExtractor={(item=>item.id)}
                horizontal={true}
                renderItem={({item})=>
                    <TouchableOpacity
                        onPress={()=>router.replace(`/alphabet/${item.id}`)}
                        className='h-28 w-24 mx-1 px-2 bg-white/50 rounded-xl'
                    >
                        <Text
                            className='text-[70px] text-center font-bold'
                            style={{
                                color : item.textColor? item.textColor : '#ffffff'
                            }}
                        >
                            {item.capital}
                            </Text>
                    </TouchableOpacity>
                }
            />
            </View>
            
            <View
                className={`absolute top-[24px] left-2 w-full p-2 items-start`}
            >
                <TouchableOpacity
                    onPress={() => router.back()}
                    className='p-2 bg-white rounded-xl'
                >
                    <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => playSound(alphabet.audio)}
                className='w-full p-2 absolute bottom-0 items-center'
            >
                <AntDesign name="playcircleo" size={60} color="#ef4444" />
            </TouchableOpacity>
        </ImageBackground>
    )
}