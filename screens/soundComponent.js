// import React, { useState, useEffect } from "react";
// import { ScrollView, Text, Button, Viev, SafeAreaView } from "react-native";
// import { Audio } from "expo-av";
// import * as FileSystem from "expo-file-system";
// import { Icon } from "react-native-elements";

// let sounds = new Audio.Sound();

// const SoundComponent = ({ route, navigation }) => {
//     const { url } = route.params;
//     console.log(url);
//     const [sound, setSound] = useState();
//     const [playing, setplaying] = useState();

//     async function getData() {
//         // fetch(url)
//         //     .then((data) => data.blob())
//         //     .then((myBlob) => {
//         //         console.log(myBlob);
//         //         const aud = new Audio.Sound(myBlob);
//         //         console.log(aud);
//         //         aud.playAsync();
//         //     });
//         // const splitUrl = url.split("/");
//         // const lastItem = splitUrl[splitUrl.length - 1];
//         // const { uri } = await FileSystem.downloadAsync(
//         //     url,
//         //     FileSystem.documentDirectory + lastItem
//         // );
//         // const source = { uri: uri };
//         // const { sound, status } = await Audio.Sound.createAsync(source);
//         // console.log("sound", sound);
//         // setSound(sound);
//         sounds
//             .loadAsync(
//                 {
//                     uri: url,
//                 },
//                 {
//                     shouldPlay: false,
//                     volum: 1,
//                 }
//             )
//             .then((data) => {
//                 console.log(data);
//             });
//         let status = await sounds.getStatusAsync();
//         console.log(status);
//     }

//     async function playSound() {
//         console.log(sounds);
//         sounds.playAsync();
//         // await sounds.playFromPositionAsync().then(() => {
//         //     setplaying(true);
//         // });
//     }

//     function stopSound() {
//         if (sound) {
//             setplaying(false);
//             return sound.stopAsync();
//         }
//     }
//     function pauseSound() {
//         if (sound) {
//             setplaying(false);
//             return sound.pauseAsync();
//         }
//     }
//     React.useEffect(() => {
//         getData();
//     });
//     // React.useEffect(() => {
//     //     return sound
//     //         ? () => {
//     //               console.log("Unloading Sound");
//     //               sound.unloadAsync();
//     //           }
//     //         : undefined;
//     // }, [sound]);

//     return (
//         <SafeAreaView
//             style={{
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 backgroundColor: "#F5F5F5",
//                 justifyContent: "space-around",
//             }}
//         >
//             <Icon
//                 size={30}
//                 name="pause"
//                 type="font-awesome"
//                 onPress={pauseSound}
//             />
//             <Icon
//                 size={30}
//                 name="play"
//                 type="font-awesome"
//                 onPress={playSound}
//             />
//             <Icon
//                 size={30}
//                 name="stop"
//                 type="font-awesome"
//                 onPress={stopSound}
//             />
//         </SafeAreaView>
//     );
// };

// export default SoundComponent;
