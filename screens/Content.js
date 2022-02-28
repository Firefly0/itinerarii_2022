import React from "react";
import { ScrollView } from "react-native";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

const tagsStyles = {
    body: {
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "100px",
    },
};

const Content = ({ route, navigation }) => {
    const { width } = useWindowDimensions();
    const { element } = route.params;
    const source = {
        html: element.content,
    };
    return (
        <ScrollView>
            <RenderHtml
                contentWidth={width}
                source={source}
                tagsStyles={tagsStyles}
            />
        </ScrollView>
    );
};

export default Content;
