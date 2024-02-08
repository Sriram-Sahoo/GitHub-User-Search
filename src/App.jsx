import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  // const [GitLink, setGitLink] = useState('');
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null);
    } catch (err) {
      setUserData(null);
      setError('User not found');
    }
  //  setGitLink(`https://github.com/${username}`);
  };

  return (
    <>
    <div className='box'>
      <h1>GitHub User Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className='errorMsg' style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div className='datas'>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2 className='NAME'>{userData.login}</h2>
          {/* <h2>Github Link : <Link>{GitLink}</Link></h2> */}
          <p>Followers: {userData.followers}</p>
          <p>Public Repositories: {userData.public_repos}</p>
        </div>
      )}
      </div>
    </>
  )
}

export default App
