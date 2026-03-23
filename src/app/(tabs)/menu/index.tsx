import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';
import { FlatList } from 'react-native';

export default function TabOneScreen() {
  return (
    // {/* <ProductListItem product={products[0]}/> */}
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ padding: 10, gap: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );

}
