import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

export default function CartProducts() {
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCartProducts();
    }, []);

    const fetchCartProducts = async () => {
        try {
            const response = await axios.get('http://10.40.13.253:3000/cart'); // Correct endpoint
            console.log('Fetched cart products:', response.data); // Log response for debugging
            setCartProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching cart products:', error);
            Alert.alert('Error', 'Failed to fetch cart products.');
            setLoading(false);
        }
    };

    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            {item.imageUrl && (
                <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={cartProducts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderProduct}
                    ListEmptyComponent={<Text style={styles.emptyText}>No products in cart.</Text>}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    productContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: 'green',
    },
    productImage: {
        width: 200,
        height: 200,
        marginTop: 10,
    },
    emptyText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});
