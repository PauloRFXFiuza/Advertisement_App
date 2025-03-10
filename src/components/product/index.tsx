import {View, Image, Text} from "react-native"
import {styles} from "./styles"

type Props = {
    data: {
        imageURI: string
        title: string
        description: string
        price: string
    }
}

export function Product ({data} : Props){
    return (
        <View style={styles.container}>

            <Image 
                source = {{uri: data.imageURI}} 
                style={styles.image}
                resizeMode="contain"
            />

            <View>
                <Text>{data.title}</Text>
                <Text>{data.description}</Text>
            </View>

        </View>
    )
}