import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authorization =
    "Bearer phtlgYSmkVobBNtlp2uszCEaB6AP9OIhlQ3TVB9FYqCEnJn0uw";

const NewDays = ({ route, navigation }) =>
{
    const blogInfo = route.params.blogInfo;
    const [intro, setIntro] = useState(null);
    const [items, setItems] = useState([]);
    async function getIntroData()
    {
        const response = await fetch(blogInfo.introPost, {
            headers: {
                authorization: authorization,
            },
        });

        const json = await response.json();
        setIntro(json.intro_post);
    }

    async function getData()
    {
        AsyncStorage.getItem(blogInfo.nameForStoragePurpose).then((data) =>
        {
            if (data)
            {
                setItems(JSON.parse(data));
            }
        });
        const response = await fetch(blogInfo.dataApi, {
            headers: {
                authorization: authorization,
            },
        });
        const json = await response.json();
        setItems(json.data);
        AsyncStorage.setItem(
            blogInfo.nameForStoragePurpose,
            JSON.stringify(json.data)
        );
    }
    useEffect(() =>
    {
        getIntroData();
        getData();
    }, []);
    return (
        <ScrollView>
            {items &&
                items.reverse().map((el, i) =>
                {
                    return (
                        <ListItem
                            bottomDivider
                            containerStyle={{
                                backgroundColor: el.color
                                    ? el.color
                                    : "#963093",
                            }}
                            onPress={() =>
                                navigation.navigate("NewContent", {
                                    title: el.title,
                                    element: el,
                                })
                            }
                            key={i}
                        >
                            <Avatar
                                rounded
                                source={{
                                    uri: el.image_url,
                                }}
                            />
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: "white",
                                        paddingLeft: 10,
                                        fontSize: 20,
                                    }}
                                >
                                    {el.title}
                                </ListItem.Title>
                                <ListItem.Subtitle
                                    style={{ color: "white", paddingLeft: 10 }}
                                >
                                    {el.created_at.slice(0, 10)}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    );
                })}

            {intro && (
                <ListItem
                    bottomDivider
                    containerStyle={{
                        backgroundColor: "#963093",
                    }}
                    onPress={() =>
                        navigation.navigate("Introducere", {
                            title: intro.title,
                            element: intro,
                        })
                    }
                >
                    <Avatar
                        rounded
                        source={{
                            uri: blogInfo.introImgAvatar,
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                color: "white",
                                paddingLeft: 10,
                                fontSize: 20,
                            }}
                        >
                            {intro.title}
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            )}
        </ScrollView>
    );
};

export default NewDays;
