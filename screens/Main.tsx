import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { View } from "react-native";
import blogs from "../constants/blogs";
import { useNavigation } from "@react-navigation/native";

const blogsStartWith2021 = [
    {
        title: "Suflet îmbrățișat de Cristos!",
        subtitle: "Itinerar pentru Postul Mare 2022",
        dataApi: "https://www.itinerar-postulmare2022.aciasi.ro/api/posts",
        avatar: "https://itinerar-postulmare2022.aciasi.ro/images/landingPage/img/landing-bg.jpg",
        introPost:
            "https://www.itinerar-postulmare2022.aciasi.ro/api/get-intro-post",
        introImgAvatar:
            "http://itinerar-postulmare2022.ro/images/landingPage/post_intro_img.jpg",
        nameForStoragePurpose: "2022Post",
    },
    {
        title: "Pășind cu iubire pe calea speranței",
        subtitle: "Advent 2021",
        dataApi: "https://www.itinerar-advent2021.aciasi.ro/api/posts",
        avatar: "http://itinerar-advent2021.aciasi.ro/images/landingPage/post_intro_img.jpg",
        introPost:
            "https://www.itinerar-advent2021.aciasi.ro/api/get-intro-post",
        introImgAvatar:
            "http://itinerar-advent2021.aciasi.ro/images/landingPage/post_intro_img.jpg",
        nameForStoragePurpose: "2021",
    },
];

const Main = ({}) => {
    const navigation = useNavigation();
    return (
        <View>
            {blogsStartWith2021.map((blog) => {
                return (
                    <ListItem
                        containerStyle={{
                            backgroundColor: "#963093",
                        }}
                        bottomDivider
                        onPress={() =>
                            navigation.navigate("NewDays", {
                                title: blog.title,
                                blogInfo: blog,
                            })
                        }
                    >
                        <Avatar
                            rounded
                            source={{
                                uri: blog.avatar,
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
                                {blog.title}
                            </ListItem.Title>
                            <ListItem.Subtitle
                                style={{ color: "white", paddingLeft: 10 }}
                            >
                                {blog.subtitle}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                );
            })}

            {/* items till december 2021 - new blog with api is up this point */}
            {blogs[0] &&
                blogs.map((el) => {
                    return (
                        <ListItem
                            key={el.id}
                            containerStyle={{
                                backgroundColor: el.listItemColor,
                            }}
                            bottomDivider
                            onPress={() =>
                                navigation.navigate("Days", {
                                    title: el.text,
                                    element: el,
                                })
                            }
                        >
                            <Avatar rounded source={{ uri: el.uri }} />
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: "white",
                                        paddingLeft: 10,
                                        fontSize: 20,
                                        // width: "100%",
                                    }}
                                >
                                    {el.text}
                                </ListItem.Title>
                                <ListItem.Subtitle
                                    style={{ color: "white", paddingLeft: 10 }}
                                >
                                    {el.subtext}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    );
                })}
        </View>
    );
};

export default Main;
