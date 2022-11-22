import React from "react";
import { ScrollView, Text, SafeAreaView, Button, Linking } from "react-native";
import { Image } from "react-native-elements";

const NewContent = ({ route }) =>
{
    const { element } = route.params;

    return (
        <ScrollView key={element.id}>
            <Image
                source={{
                    uri: element.image_url,
                }}
                style={{ width: "100%", height: 220 }}
            />
            {/* Autori */}
            <SafeAreaView style={wraperAutoriStyle}>
                <Text style={autoriStyle}>{element.nume_tanar}</Text>
                <Text style={autoriStyle}>{element.nume_preot}</Text>
            </SafeAreaView>

            <SafeAreaView style={titleWrapStyle}>
                <Image
                    source={{
                        uri: "http://itinerar-advent2021.aciasi.ro/images/landingPage/gospel_image.png",
                    }}
                    style={iconStyle}
                    containerStyle={containerIconStyle}
                />
                <SafeAreaView>
                    <Text style={titleSectionStyle}>Evanghelia</Text>
                    <Text style={italisSubtitleStyle}>
                        {element.evanghelist}
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
            <Text style={contentTextStyle}>{element.text_evanghelie}</Text>

            {element.path_audio_evanghelie ?.length && (
                <Button
                    onPress={() =>
                    {
                        Linking.openURL(element.path_audio_evanghelie);
                    }}
                    title="Audio"
                ></Button>
            )}

            <SafeAreaView style={titleWrapStyle}>
                <Image
                    source={{
                        uri: "http://itinerar-advent2021.aciasi.ro/images/landingPage/meditatie_icon.png",
                    }}
                    style={iconStyle}
                    containerStyle={containerIconStyle}
                />
                <SafeAreaView>
                    <Text style={titleSectionStyle}>Meditație</Text>
                </SafeAreaView>
            </SafeAreaView>
            <Text style={contentTextStyle}>{element.meditatie}</Text>

            {/* {element.path_audio_meditatie?.length && (
                <Button
                    onPress={() => {
                        Linking.openURL(element.path_audio_meditatie);
                    }}
                    title="Audio"
                ></Button>
            )} */}

            {/* Rugaciune */}
            <SafeAreaView style={titleWrapStyle}>
                <Image
                    source={{
                        uri: "http://itinerar-advent2021.aciasi.ro/images/landingPage/rugaciune_icon.jpg",
                    }}
                    style={iconStyle}
                    containerStyle={containerIconStyle}
                />
                <SafeAreaView>
                    <Text style={titleSectionStyle}>Rugăciune</Text>
                </SafeAreaView>
            </SafeAreaView>
            <Text style={contentTextStyle}>{element.rugaciune_tanar}</Text>

            {element.path_audio_rugaciune ?.length && (
                <Button
                    onPress={() =>
                    {
                        Linking.openURL(element.path_audio_rugaciune);
                    }}
                    title="Audio"
                ></Button>
            )}
            {/* Indemn */}
            <SafeAreaView style={titleWrapStyle}>
                <Image
                    source={{
                        uri: "http://itinerar-advent2021.aciasi.ro/images/landingPage/provocare_icon.png",
                    }}
                    style={iconStyle}
                    containerStyle={containerIconStyle}
                />
                <SafeAreaView>
                    <Text style={titleSectionStyle}>Provocare</Text>
                </SafeAreaView>
            </SafeAreaView>
            <Text style={contentTextStyle}>{element.provocare_tanar}</Text>

            {element.path_audio_provocare ?.length && (
                <Button
                    onPress={() =>
                    {
                        Linking.openURL(element.path_audio_provocare);
                    }}
                    title="Audio"
                ></Button>
            )}

            {element.comments !== undefined && element.comments.length !== 0 && (
                <SafeAreaView>
                    <Text style={comentariiStyle}>Comentarii</Text>
                    {element.comments.map((el, i) =>
                    {
                        return (
                            <SafeAreaView key={i}>
                                <Text style={comentariiNameStyle}>
                                    La data de {el.created_at ?.substr(0, 10)}{" "}
                                    {el.user ?.name} a spus:
                                </Text>
                                <Text style={commentBodyStyle}>{el.body}</Text>
                            </SafeAreaView>
                        );
                    })}
                </SafeAreaView>
            )}
        </ScrollView>
    );
};

export default NewContent;

const comentariiNameStyle = {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
};
const commentBodyStyle = {
    fontStyle: "italic",
    paddingLeft: 20,
    paddingRight: 15,

    paddingBottom: 20,
};
const comentariiStyle = {
    fontWeight: "bold",
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 20,
};
const mainStyle = {};
const iconStyle = {
    height: 50,
};
const containerIconStyle = {
    overflow: "hidden",
    width: 50,
    marginLeft: 5,
};
const titleSectionStyle = {
    fontWeight: "bold",
    marginTop: 15,
    color: "#8657c3",
    marginLeft: 10,
};

const titleWrapStyle = {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 14,
};

const italisSubtitleStyle = {
    fontStyle: "italic",
    marginTop: 2,
    marginLeft: 10,
};
const autoriStyle = {
    textAlign: "right",
    fontStyle: "italic",
    paddingRight: 10,
};
const wraperAutoriStyle = {
    marginTop: 10,
};

const contentTextStyle = {
    paddingLeft: 10,
    paddingRight: 5,
    textAlign: "left",
};
