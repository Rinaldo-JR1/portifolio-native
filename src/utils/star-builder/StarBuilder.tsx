import { FontAwesome } from "@expo/vector-icons/";

export const starBuilder = (stars: number, iconSize?: number) => {
    const max = 5;
    const decimalPart = stars % 1;
    const integerPart = Math.floor(stars);
    const starsArray = [];
    for (let i = 0; i < max; i++) {
        if (i < integerPart) {
            starsArray.push(
                <FontAwesome key={i} name="star" size={iconSize || 25} color={"gold"} />
            );
        } else if (i === integerPart && decimalPart > 0) {
            starsArray.push(
                <FontAwesome
                    key={i}
                    name="star-half-o"
                    size={iconSize || 25}
                    color={"gold"}

                />
            );
        } else {
            starsArray.push(
                <FontAwesome
                    key={i}
                    name="star-o"
                    size={iconSize || 25}
                    color={"gold"}
                />
            );
        }
    }
    return starsArray;
};