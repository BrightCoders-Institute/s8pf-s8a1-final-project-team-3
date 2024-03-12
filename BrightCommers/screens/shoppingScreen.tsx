import React from 'react';
import { View, StatusBar, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Greeting from "../src/components/greeting";
import SearchBar from "../src/components/searchBar";

const ShoppingScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Greeting />
            <SearchBar />

            <View style={styles.row}>
                <Text style={styles.title}>
                    Shopping cart
                </Text>
            </View>
            <View style={styles.itemContainer}>
                <ImageBackground
                    source={{ uri: "https://s3-alpha-sig.figma.com/img/3220/1422/b0f1ddfcd408decfa7e5d738ff8f6fe3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKNYbwh3vJBcbr2FOwQ41H71PuwJonXeQD5EobZdsEQ1b45qn0TfGId69uGLM8QVnl2QUBTulnIGwGxblXFmB-E8J5VmqyDDl43-90B-vQDnESBYBtiWrJh7g3z9Qg6ZksE2gY6a8SKDnLjOLhmhIgrZx5gOdr0AIAHAI4hkt2I0cy9DqnZtXeqGmquee3FJYo7v69dNxCVBqzd~8y8059XhW40QyilqMD90XrIplGH1rrLdfy1hLjzxWavUi9Q3MaiID2KtNZRgX01b0l6v78~X8zqE-KGLlQAUjlKUc36~4ABrYd3ykF8j0KY5aE~Ml3qxUC6es4FOJ2FpxJqH9g__" }}
                    resizeMode='contain'
                    style={styles.itemPhoto}>
                </ImageBackground>
                <View style={styles.textContainer}>
                    <Text style={styles.titles}>{"Wireless Dualsense controller Playstation 5 Cosmic White"}</Text>
                    <View style={styles.secondContainer}>
                        <Text style={styles.price}>{"$60"}</Text>
                        <Text style={styles.shipping}>{"Free Shipping"}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.yellowButton}>
                <Text style={styles.buttonText}>Select payment</Text>
            </TouchableOpacity>
            


            <View style={styles.row}>
                <Text style={styles.title}>
                    Purchased
                </Text>
            </View>
            <View style={styles.itemContainer}>
                <ImageBackground
                    source={{ uri: "https://s3-alpha-sig.figma.com/img/3220/1422/b0f1ddfcd408decfa7e5d738ff8f6fe3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKNYbwh3vJBcbr2FOwQ41H71PuwJonXeQD5EobZdsEQ1b45qn0TfGId69uGLM8QVnl2QUBTulnIGwGxblXFmB-E8J5VmqyDDl43-90B-vQDnESBYBtiWrJh7g3z9Qg6ZksE2gY6a8SKDnLjOLhmhIgrZx5gOdr0AIAHAI4hkt2I0cy9DqnZtXeqGmquee3FJYo7v69dNxCVBqzd~8y8059XhW40QyilqMD90XrIplGH1rrLdfy1hLjzxWavUi9Q3MaiID2KtNZRgX01b0l6v78~X8zqE-KGLlQAUjlKUc36~4ABrYd3ykF8j0KY5aE~Ml3qxUC6es4FOJ2FpxJqH9g__" }}
                    resizeMode='contain'
                    style={styles.itemPhoto}>
                </ImageBackground>
                <View style={styles.textContainer}>
                    <Text style={styles.titles}>{"Wireless Dualsense controller Playstation 5 Cosmic White"}</Text>
                    <View style={styles.secondContainer}>
                        <Text style={styles.price}>{"$60"}</Text>
                        <Text style={styles.shipping}>{"Free Shipping"}</Text>
                    </View>
                </View>
            </View>



            <View style={styles.row}>
                <Text style={styles.title}>
                    Previous purchases
                </Text>
            </View>
            <View style={styles.itemContainer}>
                <ImageBackground
                    source={{ uri: "https://s3-alpha-sig.figma.com/img/3220/1422/b0f1ddfcd408decfa7e5d738ff8f6fe3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKNYbwh3vJBcbr2FOwQ41H71PuwJonXeQD5EobZdsEQ1b45qn0TfGId69uGLM8QVnl2QUBTulnIGwGxblXFmB-E8J5VmqyDDl43-90B-vQDnESBYBtiWrJh7g3z9Qg6ZksE2gY6a8SKDnLjOLhmhIgrZx5gOdr0AIAHAI4hkt2I0cy9DqnZtXeqGmquee3FJYo7v69dNxCVBqzd~8y8059XhW40QyilqMD90XrIplGH1rrLdfy1hLjzxWavUi9Q3MaiID2KtNZRgX01b0l6v78~X8zqE-KGLlQAUjlKUc36~4ABrYd3ykF8j0KY5aE~Ml3qxUC6es4FOJ2FpxJqH9g__" }}
                    resizeMode='contain'
                    style={styles.itemPhoto}>
                </ImageBackground>
                <View style={styles.textContainer}>
                    <Text style={styles.titles}>{"Wireless Dualsense controller Playstation 5 Cosmic White"}</Text>
                    <View style={styles.secondContainer}>
                        <Text style={styles.price}>{"$60"}</Text>
                        <Text style={styles.shipping}>{"Free Shipping"}</Text>
                    </View>
                </View>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 16,
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    action: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#0139A6',
    },
    container: {
        padding: 20,
        backgroundColor: 'white',
    },
    itemContainer: {
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 0.1,
    },
    itemPhoto: {
        height: 100,
        width: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column', // Cambiar la dirección del flujo del texto
        paddingHorizontal: 10,
    },
    titles: {
        fontSize: 16,
    },
    specifications: {
        fontWeight: 'bold',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 23,
        color: '#3ac430',
    },
    shipping: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0139a6',
    },
    rankingDecoration: {
        fontWeight: 'bold',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FBEDB7',
        borderRadius: 10,
        marginBottom: 10,
        width: 60,
        height: 30,
        columnGap: 5,
    },
    secondContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    yellowButton: {
        backgroundColor: '#FFD700', // Amarillo
        borderRadius: 30,
        paddingVertical: 6,
        height: 40,
        width: 200,
        marginLeft: 180,
        marginTop: 20,
      },
      buttonText: {
        color: '#000000', // Negro
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});

export default ShoppingScreen;
