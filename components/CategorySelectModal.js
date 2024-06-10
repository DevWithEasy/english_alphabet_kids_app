import { View, Text, Modal, Alert, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { selection } from '../assets/constants/pageui';
import Entypo from '@expo/vector-icons/Entypo';

export default function CategorySelectModal({ data,visible, setVisible }) {
    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent={true}
            onRequestClose={() => {
                setVisible(!visible);
            }}>
            <View
                className='flex-1 justify-center items-center bg-slate-500/50'
            >
                <View
                    className='px-4 pt-2 pb-6 w-11/12 mx-auto bg-white rounded-xl'
                >
                    <Text
                        className='text-center text-lg font-bold'
                    >
                        Select
                    </Text>
                    <View
                        className='w-full flex-row'
                    >
                        {
                            data.map(item =>
                                <TouchableOpacity
                                    key={item.id}
                                    className='w-1/2 p-2'
                                >
                                    <View
                                        className='py-4 items-center space-y-5 rounded-xl'
                                        style={{
                                            backgroundColor: item.backgroundColor
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/abc.png')}
                                            className='w-20 h-20'
                                        />
                                        <Text
                                            className='text-md font-bold'
                                            style={{
                                                color: item.textColor
                                            }}
                                        >
                                            Capital Letter
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                    </View>
                </View>
                <View
                    className='absolute top-0 left-0 w-full p-2 items-end'
                >
                    <TouchableOpacity
                        onPress={()=>setVisible(!visible)}
                        className='p-2 bg-white rounded-xl'
                    >
                        <Entypo name="cross" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}