import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { APIKEY } from "../apikeys";
import { useWindowDimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Days = ({ route, navigation }) => {
    const { width } = useWindowDimensions();
    const { element } = route.params;
    const id = element.id;
    const [items, setItems] = useState([]);
    async function getData() {
        AsyncStorage.getItem(id).then((data: any) => {
            if (data) {
                setItems(JSON.parse(data));
            }
        });
        const response = await fetch(
            `https://www.googleapis.com/blogger/v3/blogs/${element.id}/posts?key=${APIKEY}&maxResults=50`
        );
        const json = await response.json();
        setItems(json.items);
        AsyncStorage.setItem(id, JSON.stringify(json.items));
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <ScrollView>
            {items &&
                items.map((el, i) => {
                    return (
                        <ListItem
                            key={i}
                            bottomDivider
                            containerStyle={{
                                backgroundColor: element.listItemColor,
                            }}
                            onPress={() =>
                                navigation.navigate("Content", {
                                    title: el.title,
                                    element: el,
                                })
                            }
                        >
                            <ListItem.Content>
                                <ListItem.Title>{el.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    );
                })}
        </ScrollView>
    );
};

export default Days;
