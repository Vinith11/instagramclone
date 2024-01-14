import useShowToast  from './useShowToast'
import { auth } from '../firebase/firebase'
import { useSignOut } from 'react-firebase-hooks/auth'
import useAuthStore from '../store/authStore';

function useLogout() {

    const [signOut, loading, error] = useSignOut(auth)
    const showToast = useShowToast();
    const logoutUser = useAuthStore((state) => state.logout)
    
    const handleLogOut = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info');
            logoutUser();            
            
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }

  return {handleLogOut, loading, error}
}

export default useLogout