import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Main from "./screens/Main";
import Days from "./screens/Days";
import Content from "./screens/Content";
import NewDays from "./screens/newDays/NewDays";
import Introducere from "./screens/newDays/Introducere";
import NewContent from "./screens/newDays/NewContent";
// import SoundComponent from "./screens/soundComponent";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Itinerarii Spirituale",
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#073F50",
                        },
                    }}
                />
                <Stack.Screen
                    name="Days"
                    component={Days}
                    options={({ route, navigation }) => ({
                        title: route.params.title,
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#073F50",
                        },
                    })}
                />
                <Stack.Screen
                    name="Content"
                    component={Content}
                    options={({ route, navigation }) => ({
                        title: route.params.title,
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#073F50",
                        },
                    })}
                />
                <Stack.Screen
                    name="NewDays"
                    component={NewDays}
                    options={({ route, navigation }) => ({
                        title: route.params.title,
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#073F50",
                        },
                    })}
                />
                <Stack.Screen
                    // Could be used for incheiere too
                    name="Introducere"
                    component={Introducere}
                    options={({ route, navigation }) => ({
                        title: route.params.title,
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#073F50",
                        },
                    })}
                />
                <Stack.Screen
                    name="NewContent"
                    component={NewContent}
                    options={({ route, navigation }) => ({
                        title: route.params.title,
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#073F50",
                        },
                    })}
                />
                {/* <Stack.Screen
                    name="SoundComponent"
                    component={SoundComponent}
                    options={({ route, navigation }) => ({
                        title: "Audio",
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#073F50",
                        },
                    })}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Home: any = () => {
    return (
        <View>
            <Main />
        </View>
    );
};

export default App;
