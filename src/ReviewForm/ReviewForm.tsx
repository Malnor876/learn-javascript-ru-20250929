import { Button } from '@/shared/Button/Button';
import { Counter } from '@/shared/Counter/Counter';
import { TextInput } from '@/shared/TextInput/TextInput';
import { useReducer } from 'react';
const initialState = {
    name: '',
    text: '',
    rating: 0,
};
export const ReviewForm = () => {
    const [formState, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'NAME':
                return {
                    ...state,
                    name: action.payload,
                };
            case 'TEXT':
                return {
                    ...state,
                    text: action.payload,
                };
            case 'INCREMENT_RATING':
                return {
                    ...state,
                    rating: Math.min(state.rating + 1, 5),
                };
            case 'DECREMENT_RATING':
                return {
                    ...state,
                    rating: Math.max(state.rating - 1, 0),
                };
            case 'RESET':
                return {
                    ...initialState,
                };
            default:
                return state;
        }
    }, initialState);
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <TextInput
                    value={formState.name}
                    label="Имя"
                    onChange={(event) =>
                        dispatch({ type: 'NAME', payload: event })
                    }
                />
            </div>
            <div>
                <TextInput
                    value={formState.text}
                    label="Отзыв"
                    onChange={(event) =>
                        dispatch({ type: 'TEXT', payload: event })
                    }
                />
            </div>
            <div>
                <Counter
                    value={formState.rating}
                    onChange={(event) =>
                        dispatch({
                            type: event.toUpperCase() + '_RATING',
                            payload: event,
                        })
                    }
                />
            </div>
            <div>
                <Button
                    label="Очистить"
                    onClick={() => {
                        dispatch({ type: 'RESET' });
                    }}
                />
            </div>
        </form>
    );
};
