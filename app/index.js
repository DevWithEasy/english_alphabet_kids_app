import * as Constants from 'expo-constants';
import { Link, useRouter } from "expo-router";
import { Image, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { homedata, selection } from "../assets/constants/pageui";
import getGreeting from '../utils/greetings';
import { useState } from 'react';
import CategorySelectModal from '../components/CategorySelectModal';

export default function Page() {
  const [visible,setVisible] = useState(false)
  const [data,setData] = useState([])
  const router = useRouter()
  const handleRoute=(item)=>{
    if (item.path === '/shapes' || item.path === '/games' || item.path === '/family'){
      router.push(item.path)
    }else{
      setVisible(!visible)
      setData(selection[item.title])
    }
  }
  return (
    <ScrollView
      className='bg-white'
      style={{
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.default.statusBarHeight
      }}
    >
      <View
        className='w-32 h-32 mx-auto justify-center items-center rounded-full'
        style={{
          backgroundColor: '#fee2e2'
        }}
      >
        <Image
          source={require('../assets/image/female_baby.png')}
          className='w-24 h-24'
        />
      </View>
      <View
        className='py-5 flex-col items-center justify-center'
      >
        <Text
          className='text-xl text-gray-600'
        >
          {getGreeting()}
        </Text>
        <Text
          className='text-amber-700 text-2xl italic font-extrabold'
        >
          Siku !
        </Text>
      </View>
      <View
        className='flex-row flex-wrap'
      >
        {
          homedata.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={()=>handleRoute(item)}
                className='w-1/2 p-2'
              >
                <View
                  className={`justify-center items-center space-y-4 py-7 rounded-xl`}
                  style={{
                    backgroundColor: item.backgroundColor
                  }}
                >
                  <Image
                    source={item.image}
                    className='w-20 h-20'
                  />
                  <View
                    className='items-center'
                  >
                    <Text
                      className={`text-lg font-bold`}
                      style={{
                        color: item.textColor
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      className='text-gray-500 text-xs'
                    >
                      ({item.subTitle})
                    </Text>
                  </View>

                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
      {
        visible && <CategorySelectModal
          visible={visible}
          setVisible={setVisible}
          data={data}
        />
      }
    </ScrollView>

  );
}