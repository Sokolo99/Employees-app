import { useCurrentQuery } from '../../app/services/auth';

function Auth({ children }: { children: JSX.Element }) {
    const {isLoading} = useCurrentQuery();

    if (isLoading) {
        return <span>Загрузка...</span>;
    }
    return children;
}

export default Auth;