import React from "react";
import {useWindowDimensions} from "react-native";
import {Canvas, Image, useImage} from "@shopify/react-native-skia"

export default function App() {
    const {width, height} = useWindowDimensions();
    const backgroundImg = useImage(require("./assets/sprites/background-day.png"));
    const baseGroundImg = useImage(require("./assets/sprites/base.png"));
    const pipeTopImg = useImage(require("./assets/sprites/pipe-green-top.png"));
    const pipeBottomImg = useImage(require("./assets/sprites/pipe-green-bottom.png"));
    const birdImg = useImage(require("./assets/sprites/yellowbird-upflap.png"));

    const pipeOffset = 0;

    return (
        <Canvas style={{width, height}}>
            <Image image={backgroundImg} width={width} height={height} fit="cover"/>
            <Image image={pipeTopImg} width={103} height={640} y={pipeOffset - 320} x={width / 2}/>
            <Image image={pipeBottomImg} width={103} height={640} y={height - 320 + pipeOffset} x={width / 2}/>
            <Image image={baseGroundImg} width={width} height={150} y={height - 75} x={0} fit="cover" />
            <Image image={birdImg} width={64} height={48} y={height / 2 - 24} x={width / 2 - 32} fit="contain"/>
        </Canvas>
    );
}
