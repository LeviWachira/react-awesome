import React , { Component} from 'react';
import { View, Text, FlatList , StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements';

export default class AppFecth extends Component {

    state = {
        datasource: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch('https://randomuser.me/api/');
        const jason = await response.json();
        this.setState({ datasource: data.jason.results })
    }

    render() {

        return (
            <View>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={datasource}
                    renderItem={({ item }) =>
            
                        <ListItem
                            title={<Text>{item.name.firstname}</Text>}
                            subtitle={<Text>{item.location.city}</Text>}
                            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                        />
                    } />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection : 'row' ,
        fon
    }
})
