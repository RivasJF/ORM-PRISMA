import { Router } from "express";
import { deleteUser, getUser, getUsers, patchUser, postUser } from "../controller/user.copntroller.js";

const routs = Router() 

routs.get('/',getUsers)

routs.get('/:id',getUser)//

routs.post('/',postUser)

routs.patch('/:id',patchUser)

routs.delete('/:id',deleteUser)//

export default routs
