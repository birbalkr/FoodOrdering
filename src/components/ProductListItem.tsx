import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types';

export const defaultImage='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
}

const product = products[0];
const ProductListItem = ({ product }:ProductListItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image || defaultImage }} style={styles.image} />
            <Text style={styles.title} >{product.name}</Text>
            <Text style={styles.price}>$ {product.price}</Text>
        </View>
    )
}

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,

    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold'

    }
});
