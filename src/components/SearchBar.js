import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet} from "react-native";

const MySearchBar = (props) => {
  
  return (
    <Searchbar
    style={styles.searchBar}
      placeholder="Search"
      onChangeText={(input) => props.setSearchText(input)}
      onEndEditing={()=>{props.onSubmit()}}
      value={props.searchText}
    />
  );
};

export default MySearchBar;

const styles = StyleSheet.create({
    searchBar:{
        marginVertical:10,
        marginHorizontal:10
    }
})