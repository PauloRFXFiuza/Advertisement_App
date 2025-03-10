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

            <View style={styles.about}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{data.description}</Text>
                <Text style={styles.price}>{data.price}</Text>
            </View>

        </View>
    )
}