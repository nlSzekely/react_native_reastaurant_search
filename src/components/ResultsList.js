import React from 'react'
import { View, Text,StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

// components
import ResultItem from "./ResultItem";
function ResultsList(props) {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                data={props.data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>{navigation.navigate("RestaurantDetail",{id:item.id})}}>
                        <ResultItem item={item} />  
                    </TouchableOpacity>
                )
                }}
            />
        </View>
    )
}

export default  ResultsList

const styles = StyleSheet.create({

    title:{
        marginLeft:10,
        fontSize:22,
        fontWeight:"bold"
    }
})