import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function CartScreen({ navigation }) {
    const [link, setLink] = useState('');
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const handleFetchDetails = async () => {
        if (!link) {
            Alert.alert('Error', 'Please enter a valid product link');
            return;
        }

        try {
            const response = await axios.get('http://10.40.13.88:3000/scrape', {
                params: { url: link },
            });
            setProductDetails(response.data);
        } catch (error) {
            console.error('Error fetching product details:', error);
            Alert.alert('Error', 'Failed to fetch product details: ' + (error.response ? error.response.data : error.message));
        }
    };

    const handleAddToCart = async () => {
        if (!productDetails) {
            Alert.alert('Error', 'No product details to add to the cart');
            return;
        }

        try {
            await axios.post('http://10.40.13.88:3000/add-to-cart', {
                title: productDetails.title,
                price: productDetails.price,
                imageUrl: productDetails.imageUrl,
            });
            Alert.alert('Success', 'Product added to cart successfully');
        } catch (error) {
            console.error('Error adding product to cart:', error);
            Alert.alert('Error', 'Failed to add product to cart: ' + (error.response ? error.response.data : error.message));
        }
    };

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://10.40.13.88:3000/cart');
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
            Alert.alert('Error', 'Failed to fetch cart items: ' + (error.response ? error.response.data : error.message));
        }
    };

    const handleViewCart = () => {
        if (!isCartVisible) {
            fetchCartItems(); // Fetch cart items only when making it visible
        }
        setIsCartVisible(!isCartVisible); // Toggle visibility
    };

    const handleDeleteFromCart = async (id) => {
        try {
            await axios.delete(`http://10.40.13.88:3000/delete-from-cart/${id}`);
            Alert.alert('Success', 'Product removed from cart successfully');
            fetchCartItems(); // Refresh the cart items
        } catch (error) {
            console.error('Error deleting product from cart:', error);
            Alert.alert('Error', 'Failed to delete product from cart: ' + (error.response ? error.response.data : error.message));
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Product Scraper</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter product link"
                    value={link}
                    onChangeText={setLink}
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.button} onPress={handleFetchDetails}>
                    <Text style={styles.buttonText}>Fetch Details</Text>
                </TouchableOpacity>
            </View>
            {productDetails && (
                <View style={styles.productContainer}>
                    <Image source={{ uri: productDetails.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{productDetails.title}</Text>
                    <Text style={styles.price}>{productDetails.price}</Text>
                    <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                        <Ionicons name="cart-outline" size={24} color="white" />
                        <Text style={styles.addToCartText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity style={styles.viewCartButton} onPress={handleViewCart}>
                <Text style={styles.viewCartText}>{isCartVisible ? 'Hide Cart' : 'View Cart'}</Text>
            </TouchableOpacity>
            {isCartVisible && (
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Image source={{ uri: item.imageUrl }} style={styles.cartImage} />
                            <View style={styles.cartItemDetails}>
                                <Text style={styles.cartTitle}>{item.title}</Text>
                                <Text style={styles.cartPrice}>{item.price}</Text>
                            </View>
                            <TouchableOpacity onPress={() => handleDeleteFromCart(item.id)}>
                                <Ionicons name="trash-outline" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4a90e2',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    inputContainer: {
        padding: 20,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4a90e2',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    productContainer: {
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        color: '#4a90e2',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    addToCartButton: {
        flexDirection: 'row',
        backgroundColor: '#4a90e2',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    addToCartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    viewCartButton: {
        backgroundColor: '#34c759',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        margin: 20,
    },
    viewCartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cartImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 15,
    },
    cartItemDetails: {
        flex: 1,
    },
    cartTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartPrice: {
        fontSize: 14,
        color: '#4a90e2',
        marginTop: 5,
    },
});
