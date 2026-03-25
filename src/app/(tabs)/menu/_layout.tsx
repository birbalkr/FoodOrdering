import Colors from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable } from "react-native";

export default function MenuStack() {
    return <Stack
        screenOptions={{
            headerRight: () => (
                <Link href="/cart" asChild>
                    <Pressable style={{ marginRight: 15 }}>
                        {({ pressed }) => (
                            <SymbolView
                                name={{ ios: 'info.circle', android: 'shopping_cart', web: 'info' }}
                                size={25}
                                tintColor={Colors.light.tint}
                                style={{ opacity: pressed ? 0.5 : 1 }}
                            />
                        )}
                    </Pressable>
                </Link>
            ),
        }}
    >
        <Stack.Screen name="index" options={{ headerTitle: 'Menu' }} />
    </Stack>;
}