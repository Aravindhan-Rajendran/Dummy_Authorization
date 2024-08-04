import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const nameList = [
  'Time', 'Past', 'Future', 'Dev', 'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue', 'Green', 'Yellow', 'Gold',
  'Demon', 'Demonic', 'Panda', 'Cat', 'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX',
  'Bandit', 'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest', 'Mine', 'Your',
  'Worst', 'Enemy', 'Hostile', 'Force', 'Video', 'Game', 'Donkey', 'Mule', 'Colt', 'Cult',
  'Cultist', 'Magnum', 'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle', 'Geo', 'Genome', 'Germ',
  'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha', 'Gamma', 'Omega', 'Seal', 'Squid', 'Money',
  'Cash', 'Lord', 'King', 'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker',
  'Numb', 'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster', 'Sand',
  'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big', 'Small', 'Short', 'Tall',
  'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken', 'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson',
  'Destiny', 'Deceit', 'Lies', 'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle',
  'Hawker', 'Walker', 'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno',
  'Slice', 'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound', 'Legacy', 'Sharp',
  'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi',
  'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head',
  'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      setUser(currentUser);
    } else {
      setError('No user data found');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const generatePhoneNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    return `+91 ${randomNumber.toString().padStart(10, '0')}`; // Ensure 10-digit number
  };

  const generateName = () => {
    return nameList[Math.floor(Math.random() * nameList.length)];
  };

  // Hardcoded serial number for demonstration purposes
  const serialNumber = 1; // This should ideally come from your user data or be managed elsewhere

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Profile</h2>
      {error && <p style={styles.error}>{error}</p>}
      {user ? (
        <div style={styles.profileInfo}>
          <p style={styles.info}>Serial Number: {serialNumber}</p>
          <p style={styles.info}>ID: {user.id}</p>
          <p style={styles.info}>Username: {user.username}</p>
          <p style={styles.info}>Password: {user.password}</p>
          <p style={styles.info}>Firstname: {generateName()}</p>
          <p style={styles.info}>Lastname: {generateName()}</p>
          <p style={styles.info}>Phone Number: {generatePhoneNumber()}</p>
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  error: {
    color: 'red',
    marginBottom: '20px',
  },
  profileInfo: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  info: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  logoutButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  loading: {
    fontSize: '18px',
    fontStyle: 'italic',
  },
};

export default Profile;
