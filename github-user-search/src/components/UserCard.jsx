const UserCard = ({ users, isLoading, error }) => {
  if (isLoading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Looks like we can't find the users</p>;
  if (!users.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="bg-gray-700 text-white p-4 rounded-md shadow-md">
          <img src={user.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full mx-auto" />
          <p className="text-center mt-2 text-lg font-bold">{user.login}</p>
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-center mt-2 text-blue-400 hover:underline"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
