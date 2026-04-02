import CartListItem from "@/components/CartListItem";
import { FlatList, View } from "react-native";
import { useCart } from "../providers/CartProviders";

const cart = () => {
    const { items } = useCart();
    return (
        <View>

            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                contentContainerStyle={{padding:10,gap:10}}
            />

            
        </View>
    )
}

export default cart