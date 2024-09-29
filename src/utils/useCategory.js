import { useEffect, useState } from "react";

const useCategory = (restInfo) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
        const category = restInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (item) => {
            return (
                item.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
            }
        );
        setCategories(category);
        }
    }, [restInfo]);

    return categories;
};

export default useCategory;
