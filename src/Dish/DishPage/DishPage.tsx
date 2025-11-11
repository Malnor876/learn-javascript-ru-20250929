import { AuthValueContext } from '@/AuthContext/AuthContext';
import { DishCounter } from '@/DishCounter/DishCounter';
import { selectDishById } from '@/store/dishes.slice';
import { useAppSelector } from '@/store/store';
import { useContext } from 'react';
import { useParams } from 'react-router';

export const DishPage = () => {
    const { id } = useParams();

    const isLogin = useContext(AuthValueContext);
    const dish = useAppSelector((state) => selectDishById(state, id));
    return (
        <>
            <h2>{dish.name}</h2>
            {isLogin && <DishCounter max={20} id={dish.id} />}
            <ul>
                {dish &&
                    dish.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
            </ul>
        </>
    );
};
