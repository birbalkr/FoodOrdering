import { StatusBar } from 'expo-status-bar'
import { Platform, Text, View } from 'react-native'

const cart = () => {
    return (
        <View>
            <Text>cart</Text>

            <StatusBar style={Platform.OS === 'iso' ? 'light' : 'light'} />
        </View>
    )
}

export default cart