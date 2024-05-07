import React from "react";
import {useWindowDimensions} from "react-native";
import {Canvas, Image, useImage} from "@shopify/react-native-skia"
import {Easing, useSharedValue, withRepeat, withTiming} from "react-native-reanimated";
import {withSequence} from "react-native-reanimated/src";

export default function App() {
    const {width, height} = useWindowDimensions();
    const backgroundImg = useImage(require("./assets/sprites/background-day.png"));
    const baseGroundImg = useImage(require("./assets/sprites/base.png"));
    const pipeTopImg = useImage(require("./assets/sprites/pipe-green-top.png"));
    const pipeBottomImg = useImage(require("./assets/sprites/pipe-green-bottom.png"));
    const birdImg = useImage(require("./assets/sprites/yellowbird-upflap.png"));

    const x = useSharedValue(width);

    useEffect(() => {
        x.value = withRepeat(
            withSequence(
                withTiming(-150, {duration: 3_000, easing: Easing.linear}),
                withTiming(width, {duration: 0})
            ),
            -1
        );
    }, []);

    const pipeOffset = 0;

    return (
        <Canvas style={{width, height}}>
            <Image image={backgroundImg} width={width} height={height} fit="cover"/>
            <Image image={pipeTopImg} width={103} height={640} y={pipeOffset - 320} x={x}/>
            <Image image={pipeBottomImg} width={103} height={640} y={height - 320 + pipeOffset} x={x}/>
            <Image image={baseGroundImg} width={width} height={150} y={height - 75} x={0} fit="cover"/>
            <Image image={birdImg} width={64} height={48} y={height / 2 - 24} x={width / 2 - 32} fit="contain"/>
        </Canvas>
    );
}
