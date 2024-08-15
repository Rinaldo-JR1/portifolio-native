import { StyleSheet, View } from "react-native";
import { styles } from "./Styles";
import { starBuilder } from "../../utils/star-builder/StarBuilder";

interface props {
    stars: number
}

export function StarList({ stars }: props) {
    return <View style={styles.container}>
        {starBuilder(stars)}
    </View>
}
