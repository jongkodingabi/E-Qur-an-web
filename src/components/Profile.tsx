type ProfileProps = {
  greeting: string;
  name: string;
  avatar: string;
};

function Profile({ greeting, name, avatar }: ProfileProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-left">{greeting}</p>
        <p className="text-left text-2xl font-bold">{name}</p>
      </div>
      <img
        src={avatar}
        alt="Profile Photo"
        className="w-10 h-10 mx-2 rounded-full"
      />
    </div>
  );
}

export default Profile;
