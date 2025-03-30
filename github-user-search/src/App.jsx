import { useState } from "react";
import { fetchUserData } from "./services/githubService";
import Search from "./components/Search";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(searchParams);
      setUsers(data);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-center text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <UserCard users={users} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
