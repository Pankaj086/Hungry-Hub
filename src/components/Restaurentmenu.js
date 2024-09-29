import React, { useState } from "react";
import Menu from "./Menu";

const Restaurentmenu = (props) => {
    const { categories } = props;
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const clickHandler = (index) => {
        setSelectedCategoryIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index}>
                    <div
                        className="bg-white text-center flex justify-between items-center my-4 py-3 w-6/12 mx-auto rounded-lg px-4 cursor-pointer border-t-[15px] border-gray-100"
                        onClick={() => clickHandler(index)} 
                    >
                        <h2 className="text-xl font-semibold">
                            {category.card.card.title} ({category.card.card.itemCards.length})
                        </h2>
                        <div className="text-base">⏬</div>
                    </div>
                    {selectedCategoryIndex === index && (
                        <Menu selectCategory={category.card.card.itemCards} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Restaurentmenu;
