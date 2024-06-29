import React, { Children } from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked sweet Potatoes", "Baked Potatoes" ]

const MealsProvider = ({Children}) => {
    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}} >
            {Children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider