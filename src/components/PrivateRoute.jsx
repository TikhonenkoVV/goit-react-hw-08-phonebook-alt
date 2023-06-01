import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsSignedIn } from 'store/selector';

export const PrivateRoute = ({ el }) => {
    const isSignedIn = useSelector(selectIsSignedIn);

    return isSignedIn ? el : <Navigate to={'auth'} />;
};
