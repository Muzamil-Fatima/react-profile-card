function ProfileCard() {
  const profile = [
    {
      name: "Muzamil",
      age: "22",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "Fatima",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "Asma",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "Ayesha",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "Mehmoona",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "Meerab",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "Maryam",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "Rabia",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "sara",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
    {
      name: "zara",
      age: "23",
      location: "Pakistan",
      occupation: "Software Engineer",
      image: "src/images/profile.png",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold m-2">Profile Card Component</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {profile.map((user, index) => (
          <div
            key={index}
            className="min-h-[109px] bg-white shadow-md rounded-lg p-4 border mb-1.5 border-gray-200 text-center 
           hover:ring-4 hover:ring-blue-300 hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-32 h-32  mx-auto  object-cover"
              src={user.image}
              alt={user.name}
            />
            <h2 className="text-xl font-semibold mt-2 mb-1">{user.name}</h2>
            <p className="text-gray-600 mb-2">{user.age}</p>
            <p className="text-gray-600 mb-2">{user.location}</p>
            <p>{user.occupation}</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProfileCard;