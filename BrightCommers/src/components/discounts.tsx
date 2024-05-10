import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

// Definición de ITEM_WIDTH como constante global
const ITEM_WIDTH = 336; 

const Discounts = () => {
    const flatlistRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    // Data for carousel
    const carouselData = [
        {
            id: "01",
            image: require("../assets/img/promo1.png"),
        },
        {
            id: "02",
            image: require("../assets/img/promo2.png"),
        },
        {
            id: "03",
            image: require("../assets/img/promo3.png"),
        },
    ];

    // Handle Scroll
    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.floor(scrollPosition / ITEM_WIDTH);
        setActiveIndex(index);
    };

    // Auto Scroll
    useEffect(() => {
        let interval = setInterval(() => {
            const newIndex = activeIndex === carouselData.length - 1 ? 0 : activeIndex + 1;
            flatlistRef.current.scrollToIndex({
                index: newIndex,
                animated: true,
            });
            setActiveIndex(newIndex);
        }, 4000);

        return () => clearInterval(interval);
    }, [activeIndex, carouselData.length]);

    //  Display Images // UI
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
            </View>
        );
    };

    // Render Dot Indicators
    const renderDotIndicators = () => {
        return carouselData.map((dot, index) => {
            if (activeIndex === index) {
                return (
                    <View
                        key={index}
                        style={styles.indicatorGreen}
                    ></View>
                );
            } else {
                return (
                    <View
                        key={index}
                        style={styles.indicatorRed}
                    ></View>
                );
            }
        });
    };

    return (
        <View>
            <FlatList
                data={carouselData}
                ref={flatlistRef}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled={true}
                onScroll={handleScroll}
                getItemLayout={(data, index) => ({
                    length: ITEM_WIDTH,
                    offset: ITEM_WIDTH * index,
                    index
                })}
            />
            <View style={styles.indicatorPosition}>
                {renderDotIndicators()}
            </View>
        </View>
    );
};

export default Discounts;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginRight: 4,
        width: ITEM_WIDTH,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        height: undefined,
        aspectRatio: 336 / 172,
        resizeMode: 'contain',
    },
    indicatorGreen: {
        backgroundColor: "green",
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 6,
    },
    indicatorPosition: {
        flexDirection: "row",
        justifyContent: "center",
        top: -8
    }, 
    indicatorRed: {
        backgroundColor: "red",
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 6,
    }
});
