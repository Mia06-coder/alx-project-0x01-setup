import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 italic mb-1">@{username}</p>
      <p className="mb-1">
        <strong>Email:</strong>{" "}
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
          {email}
        </a>
      </p>
      <p className="mb-1">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="mb-1">
        <strong>Website:</strong>{" "}
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {website}
        </a>
      </p>
      <div className="mb-1">
        <strong>Address:</strong>{" "}
        {`${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`}
      </div>
      <div>
        <strong>Company:</strong> {company.name} —{" "}
        <em>{company.catchPhrase}</em>
      </div>
    </div>
  );
};

export default UserCard;
