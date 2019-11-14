import React, { useState } from './node_modules/react';

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Modal,
} from 'react-native';

const GetInput = props => {
    const [enterGoals, SetEnterGoals] = useState('');

    const goalInputHandle = enterText => {
        SetEnterGoals(enterText);
    };

    const addGoalHandle = () => {
        props.onAddGoal(enterGoals);
        SetEnterGoals('');
    };


    return (
         <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandle}
                    value={enterGoals}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancle} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandle}  />
                    </View>
                </View>
            </View>
          </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        width: '40%',
    }
})

export default GetInput;
