import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='alphabet/word'
                options={{
                    title: 'Alphabet Word',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='alphabet/index'
                options={{
                    title: 'Alphabet Word',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='alphabet/[id]'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='numbers/index'
                options={{
                    title: 'Numbers',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='family'
                options={{
                    title: 'Family Indroduction',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='shapes'
                options={{
                    title: 'Shape Indroduction',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='games'
                options={{
                    title: 'Games',
                    headerShown: false
                }}
            />
        </Stack>
    )
}