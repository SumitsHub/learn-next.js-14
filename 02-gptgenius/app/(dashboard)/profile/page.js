import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return <UserProfile routing="hash" />;
};
export default ProfilePage;
