import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ResultItem(props) {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: props.item.image_url
                }}
                style={styles.image}
            />
            <Text style={styles.name}>{props.item.name}</Text>
            <Text style={styles.rating}>{props.item.rating} Stars, {props.item.review_count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginVertical:10
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5
    },
    name: {
        fontWeight: "bold"
    }
})
