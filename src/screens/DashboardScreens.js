import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import {Context} from "../context/BlogContext";

const DashboardScreen = () => {
    const {state, addBlogPost} = useContext(Context)

    return <View>
        <Text>Hi Shiv</Text>
        <FlatList
            data={state}
            renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}
        />
        <Button 
            title="Add"
            onPress={addBlogPost}
        />
    </View>
}

const styles = StyleSheet.create({

})

export default DashboardScreen