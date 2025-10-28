import style from './Layout.module.scss';
import { useContext, type ReactElement } from 'react';
import { ScrollProgress } from '../shared/ScrollProgress/ScrollProgress';
import { Header } from '@/Header/Header';
import { ThemeContext } from '@/ThemeContext/ThemeContext';

export const Layout = ({ children }: { children: ReactElement }) => {
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={theme}>
                <ScrollProgress />
                <Header />
                <div className={style.content}>
                    {children}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem deleniti, natus aliquid minima fugit labore
                        necessitatibus sequi modi veritatis eveniet nobis.
                        Minima reprehenderit numquam illo dicta quod tempora
                        error sit!
                    </p>
                </div>
                <div>Footer</div>
            </div>
        </>
    );
};
