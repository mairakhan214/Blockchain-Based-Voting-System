type UserType = {
  name: string;
  email: string;
  password: string;
  citizenshipNumber: string;
  admin: boolean;
  verified: boolean;
};

const users: UserType[] = [
  {
    name: "Admin",
    citizenshipNumber: "9860777906",
    email: "admin@gmail.com",
    password: "$2b$10$6sdkothEwAguhA0FytsGF.gcWPmTDB5hosif6rGX5FFJK8PdBgRHu",
    admin: true,
    verified: true,
  },
];

export default users;
