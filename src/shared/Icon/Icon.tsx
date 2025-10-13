import { useRef } from 'react';
import './Icon.scss';
import { useSvgIcon } from './useSvgIcon';

interface IconProps {
    icon: Icons;
}
export type Icons = 'star';
export const Icon = ({ icon }: IconProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const iconElement = useSvgIcon(icon);
    if (
        iconElement &&
        iconElement.status === 'fulfilled' &&
        iconElement.element &&
        ref.current &&
        ref.current instanceof HTMLElement
    ) {
        ref.current.appendChild(iconElement.element);
    }
    return <div ref={ref} className="icon"></div>;
};
