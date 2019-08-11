import {
    User,
} from "../db/db";
  
  

const resolvers = {
    Query: {
        user: (_, {id}) => User.getByUserId(userId),
        users: () => User.getAllUsers(['name', 'userId']),
    }
};

export default resolvers;