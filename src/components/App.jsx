import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from './home/Home';
import Login from './login/Login';
import Loader from './loader/Loader';
import Page404 from './page404/Page404';
import Register from './register/Register';
import Contacts from './contacts/Contacts';
import SharedLayout from './sharedLayout/SharedLayout';
import PrivateRoute from './privateRoute/PrivateRoute';
import { checkUser } from '../redux/reducers/auth/operations';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import { selectIsRefreshing } from '../redux/reducers/auth/selectors';

export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<SharedLayout />}>
          <Route path="/goit-react-hw-08-phonebook" element={<Home />}>
            <Route
              path="login"
              element={
                <ProtectedRoute
                  element={<Login />}
                  redirect="/goit-react-hw-08-phonebook/contacts"
                />
              }
            />
            <Route
              path="register"
              element={
                <ProtectedRoute
                  element={<Register />}
                  redirect="/goit-react-hw-08-phonebook/contacts"
                />
              }
            />
          </Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute
                element={<Contacts />}
                redirect="/goit-react-hw-08-phonebook"
              />
            }
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
