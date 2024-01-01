export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING(50),
      field: "first_name",
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      field: "last_name",
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      field: "username",
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(70),
      field: "email",
      allowNull: false,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING(256),
      field: "password",
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      field: "city",
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\+387\s\d{2}\s\d{3}-\d{3}$/,
      },
      role: {
        roles: {
          type: DataTypes.STRING,
          field: "role",
          allowNull: false,
          defaultValue: "user",
        },
      },
    },
  });
  return User;
};
