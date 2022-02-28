import React, { useState, useEffect } from "react";
import { ScrollView, Text, Button } from "react-native";
import { Image } from "react-native-elements";
import { Audio } from "expo-av";
import { useWindowDimensions } from "react-native";
import * as FileSystem from "expo-file-system";
import soundComponent from "../soundComponent";

const Introducere = ({ route, navigation }) => {
    const { element } = route.params;

    return (
        <ScrollView
            style={{
                marginBottom: 50,
            }}
        >
            <Image
                source={{
                    uri: "http://itinerar-advent2021.aciasi.ro/images/landingPage/post_intro_img.jpg",
                }}
                style={{ width: "100%", height: 220 }}
            />
            <Text
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 30,
                    paddingBottom: 60,
                }}
            >
                {element.text_evanghelie}
            </Text>
            {/* {soundComponent(
                "http://itinerar-advent2021.aciasi.ro/audio/pr_gaspar_1.mp4"
            )} */}
        </ScrollView>
    );
};

export default Introducere;
