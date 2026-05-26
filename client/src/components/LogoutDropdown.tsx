import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router';

export function LogoutDropdown() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/home');
    logout();
  };

  return (
    <div
      className="bg-card-light text-text-light p-4 w-40 cursor-pointer"
      onClick={() => handleLogout()}
    >
      Logout
    </div>
  );
}
