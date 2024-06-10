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
                name='numbers'
                options={{
                    title: 'Numbers'
                }}
            />
            <Stack.Screen
                name='family'
                options={{
                    title: 'Family Indroduction'
                }}
            />
        </Stack>
    )
}