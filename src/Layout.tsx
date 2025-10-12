import type { ReactElement } from 'react';

export const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </>
    );
};
