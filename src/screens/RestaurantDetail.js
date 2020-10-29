import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import yelpApi from "../api/yelpApi";
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function RestaurantDetail(props) {
    const id = props.route.params.id;
    const [restaurant, setRestaurant] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [progress, setProgress] = React.useState(0);



    function getRestaurant(id) {
        yelpApi.get(`/${id}`).then((response) => {
            setRestaurant(response.data);
            setProgress(1)
            setLoading(false);
        }).catch((err) => {
            console.log(err)
        })
    }
    // csak egyszer kerdezze le a serverrol
    React.useState(() => {
        getRestaurant(id)
    }, [])

    if (loading) {
        function moveProgress() {
            if (progress >= 1) {
                return
            } else {
                setTimeout(() => {
                    setProgress(progress + 0.30)
                }, 200)
            }
        }
        moveProgress()
        return (
            <View>
                <ProgressBar progress={progress} color={Colors.blue400} />
            </View>
        )
    }
    console.log(restaurant)
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 20 }}>{restaurant.name}</Text>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: restaurant.photos[0]
                        }}
                        style={styles.image}
                    />
                </View>
                <View  style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: restaurant.photos[1]
                        }}
                        style={styles.image}
                    />
                </View>
                <View  style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: restaurant.photos[2]
                        }}
                        style={styles.image}
                    />
                </View>

            </ScrollView>

        </View>
    )


}


const styles = StyleSheet.create({
    image: {
        height: 400,
        width: 400,
        borderRadius:10
    },
    imageContainer:{
        display:"flex",
        
        alignItems:"center",
        marginVertical:20
    }
})
