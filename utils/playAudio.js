import { Audio } from 'expo-av'
async function playSound(url) {
    const { sound } = await Audio.Sound.createAsync(url)
    await sound.playAsync()
}

export default playSound