import { useEffect, useReducer } from 'react';
import type { Icons } from './Icon';

type svgState = {
    [key in Icons]?: {
        status: 'pending' | 'fulfilled' | undefined;
        element: SVGElement | null;
    };
};
interface svgAction {
    type: 'pending' | 'fulfilled';
    icon: Icons;
    payload: SVGElement | null;
}
const svgReducer = (state: svgState, action: svgAction) => {
    switch (action.type) {
        case 'pending':
            return {
                ...state,
                [action.icon]: {
                    status: 'pending',
                    element: null,
                },
            };
        case 'fulfilled':
            return {
                ...state,
                [action.icon]: {
                    status: 'fulfilled',
                    element: action.payload,
                },
            };
        default:
            return {};
    }
};
const initialState: svgState = {};
//TODO: нужен глобальный кэш svg-элементов и запросов с целью оптимизации
export const useSvgIcon = (icon: Icons) => {
    const [state, dispatch] = useReducer<svgState, [action: svgAction]>(
        svgReducer,
        initialState
    );
    useEffect(() => {
        console.log('effect', state, icon);
        if (state[icon]?.status === undefined) {
            dispatch({
                type: 'pending',
                icon,
                payload: null,
            });
            fetch(`/icons/${icon}.svg`)
                .then((response) => response.text())
                .then((svg) => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(svg, 'image/svg+xml');
                    const svgElement = doc.documentElement;
                    if (svgElement instanceof SVGElement) {
                        dispatch({
                            type: 'fulfilled',
                            icon,
                            payload: svgElement,
                        });
                    }
                });
        }
    }, [icon, state]);
    return state[icon];
};
