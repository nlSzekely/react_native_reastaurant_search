import React from 'react'
import { View, Text,StyleSheet, FlatList } from 'react-native';

// components
import ResultItem from "./ResultItem";

export default function ResultsList(props) {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                data={props.data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>{
                return <ResultItem item={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    title:{
        marginLeft:10,
        fontSize:22,
        fontWeight:"bold"
    }
})