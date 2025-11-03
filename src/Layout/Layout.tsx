import style from './Layout.module.scss';
import { useContext, type ReactElement } from 'react';
import { ScrollProgress } from '../shared/ScrollProgress/ScrollProgress';
import { Header } from '@/Header/Header';
import { ThemeContext } from '@/ThemeContext/ThemeContext';
import { Outlet } from 'react-router';
import { Cart } from '@/Cart/Cart';

export const Layout = () => {
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={theme}>
                <ScrollProgress />
                <Header />
                <Cart />
                <div className={style.content}>
                    <Outlet />
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
