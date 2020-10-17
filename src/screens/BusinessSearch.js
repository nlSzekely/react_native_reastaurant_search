import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

// api
import useApi from "../hooks/useApi";



export default function BusinessSearch() {
    const [searchText, setSearchText] = React.useState('');
    const [apiCall,results,errorMsg] = useApi();

    return (
        <View>
            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                onSubmit={()=>apiCall(searchText)} />
            {errorMsg?<Text>{errorMsg}</Text>:null}
            <Text>{results.length}result</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
