import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { familyTree } from '../assets/constants/pageui'
import FamilyMember from '../components/FamilyMember'

export default function Family() {
    return (
        <ScrollView
            className='pt-5 bg-white'
        >
            <View>
                {
                    familyTree.map((family, i) =>
                        <View
                            key={i}
                        >
                            <View
                                className='flex-row justify-center space-x-2 mb-5'
                            >
                                <View
                                    className='flex-row bg-green-200 rounded-xl'
                                >
                                    <FamilyMember
                                        image={family.name.image}
                                        title={family.name.title}
                                    />
                                    <FamilyMember
                                        image={family.spouse.image}
                                        title={family.spouse.title}
                                    />
                                </View>

                            </View>
                            <View
                                className=' flex-row justify-between '
                            >
                                {
                                    family.children.map((child, i) =>
                                        <View
                                            key={i}
                                            className={`w-1/2`}
                                        >
                                            <View
                                                className='flex-row space-x-2 items-center justify-center'
                                            >
                                                <View
                                                    className={`flex-row rounded-xl ${child.name.title === 'Uncle' ? 'bg-lime-200' : 'bg-yellow-200'}`}
                                                >
                                                    <FamilyMember
                                                        image={child.name.image}
                                                        title={child.name.title}
                                                        styles='w-24'
                                                    />
                                                    <FamilyMember
                                                        image={child.spouse.image}
                                                        title={child.spouse.title}
                                                        styles='w-24'
                                                    />
                                                </View>

                                            </View>

                                            <View
                                                className='w-full flex-row flex-wrap justify-center space-x-2 mt-5'
                                            >
                                                {
                                                    child.children.map((children, i) =>
                                                        <FamilyMember
                                                            key={i}
                                                            image={children.image}
                                                            title={children.name}
                                                            styles={`w-auto bg-green-50 ${child.name.title === 'Uncle' ? 'bg-lime-200' : 'bg-yellow-200'}`}
                                                            textStyle='text-xs'
                                                        />
                                                    )
                                                }
                                            </View>

                                        </View>
                                    )
                                }
                            </View>
                        </View>
                    )
                }
            </View>
        </ScrollView>
    )
}