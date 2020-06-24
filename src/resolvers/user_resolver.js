import { userData, writeToFile } from "../controllers/data_controller";

export const resolvers = {
    Query: {
        getAllUsers: async() => {
            return await userData
        },

    },
    Mutation: {
        updateUserDetails: async(_, args) => {
            const token = args.userToUpdateDetails.token;

            if (!token || token.length === 0) return {
                status: 403,
                body: "No token"
            }

            let updatedUser = {
                first_name: "",
                last_name: "",
                email: "",
                gender: "",
                password: ""
            };

            if (await isAdmin(token) === true) {
                try {
                    userData.map(user => {
                        if (userDetails.email === user.email && userDetails.password === user.password) {

                            Object.keys(updatedUser).map(detail => {
                                if (userDetails.hasOwnProperty(detail)) {
                                    updatedUser[detail] = userDetails[detail];
                                }
                            });

                            user.first_name = updatedUser.first_name;
                            user.last_name = updatedUser.last_name;
                            user.email = updatedUser.email;
                            user.gender = updatedUser.gender;
                            user.password = updatedUser.password;
                        }
                    });

                    return await writeToFile(userData);

                } catch (error) {
                    throw error
                }

            } else {
                return {
                    status: 403,
                    body: "Not admin"
                }
            };




        },
        deleteUser: async(_, args) => {},
    }
}