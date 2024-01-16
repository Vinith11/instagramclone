import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';

function App() {
  // Get the current authenticated user state from the useAuthState hook
  // authUser: The auth.UserCredential if logged in, or null if not
  const [authUser] = useAuthState(auth);
  return (
    <PageLayout>
        <Routes>
          <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/auth"/>} />
          {/* if auth user is false then render auth page */}
          <Route path="/auth" element={!authUser ? <AuthPage/> : <Navigate to="/"/>} />
          <Route path="/:username" element={<ProfilePage/>} />
        </Routes>
    </PageLayout>
  );
}

export default App;
