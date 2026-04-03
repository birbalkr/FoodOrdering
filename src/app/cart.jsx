import Button from "@/components/Button";
import CartListItem from "@/components/CartListItem";
import { FlatList, Text, View } from "react-native";
import { useCart } from "../providers/CartProviders";

const cart = () => {
    const { items, total } = useCart();
    return (
        <View style={{ padding: 10 }}>

            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                contentContainerStyle={{ gap: 10 }}
            />


            <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>Total: ${total}</Text>
            <Button text="Checkout" />


        </View>
    )
}

export default cart