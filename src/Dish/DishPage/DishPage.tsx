import { AuthValueContext } from '@/AuthContext/AuthContext';
import { DishCounter } from '@/DishCounter/DishCounter';
import { Button } from '@/shared/Button/Button';
import { selectDishById } from '@/store/dish/dishes.slice';
import { useAppSelector } from '@/store/store';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';

export const DishPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const isLogin = useContext(AuthValueContext);
    const dish = useAppSelector((state) => selectDishById(state, id));
    return (
        <>
            <Button label="Back" onClick={() => navigate(-1)} />
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
