import React, { useState } from './node_modules/react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


const GetItem = props => {

    const removeGoalHandle = () => {
        props.onDelete(props.id);
    }

    return (
        <TouchableOpacity onPress={removeGoalHandle}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default GetItem;
