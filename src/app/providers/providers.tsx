
import type { FC } from 'react';
import { Provider } from 'react-wrap-balancer';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({children}) => {
    return (<Provider>{children}</Provider>);
}

export default Providers;
