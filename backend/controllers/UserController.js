import UserModel from '../models/User.js'
import bcrypt from 'bcrypt';
const UserController = {
    async register(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const user = await UserModel.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was an error trying to create the user', error });
        }
    }
}

export default UserController;