import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import ProfileSettings from "../components/ProfileSettings";

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <nav>
      <Link to="details">Profile Details</Link>
      <Link to="settings">Profile Settings</Link>
    </nav>
    <Routes>
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Routes>
  </div>
);
export default Profile;