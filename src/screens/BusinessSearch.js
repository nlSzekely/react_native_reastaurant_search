import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";

// api
import useApi from "../hooks/useApi";
// components
import ResultList from "../components/ResultsList";


export default function BusinessSearch() {
    const [searchText, setSearchText] = React.useState('');
    const [apiCall, results, errorMsg] = useApi();
    function filterResultsByPrice(price) {
        return results.filter((item) => {
            return item.price === price;
        })
    }
    return (
        <>
            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                onSubmit={() => apiCall(searchText)} />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            {/* <Text>{results.length}result</Text> */}
            <ScrollView>
                <ResultList title="Cost Effective" data={filterResultsByPrice(undefined)} />
                <ResultList title="Bit Pricer" data={filterResultsByPrice("$")} />
                <ResultList title="Big Spender!" data={filterResultsByPrice("$$")} />
                <ResultList title="Cost Effective" data={filterResultsByPrice(undefined)} />
                <ResultList title="Bit Pricer" data={filterResultsByPrice("$")} />
                <ResultList title="Big Spender!" data={filterResultsByPrice("$$")} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})




 // filtering by price - by laci
//  const [$, set$] = React.useState([]);
//  const [$$,set$$] = React.useState([]);
//  const [$$$,set$$$] = React.useState([]);
//  useEffect(() => {
//      let $ = [];
//      let $$ = [];
//      let $$$ = [];
//      const filtered = results.filter((item)=>{
//          return item.price;
//      })
//      filtered.forEach((item)=>{
//          switch(item.price){
//              case "$":
//                  $.push(item);
//                  break;
//              case "$$":
//                  $$.push(item);
//                  break;
//              case "$$$":
//                  $$$.push(item);
//                  break;
//              default:
//                  return;
//          }
//      })
//      set$($);
//      set$$($$);
//      set$$$($$$);
//  }, [results])
