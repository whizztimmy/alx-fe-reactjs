const UserCard = ({ userData, isLoading, error }) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Looks like we can't find the user</p>;
  if (!userData) return null;

  return (
    <div>
      <img src={userData.avatar_url} alt="Avatar" width="100" />
      <p>Name: {userData.name || "N/A"}</p>
      <p>Username: {userData.login}</p>
      <p>
        Profile: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </p>
    </div>
  );
};

export default UserCard;
