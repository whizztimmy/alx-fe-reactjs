import { useState } from "react";
import { fetchUserData } from "./services/githubService";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserCard userData={userData} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
