import { Router } from "express";
import { deleteUser, getUser, patchUser, postUser } from "../controller/user.copntroller.js";

const routs = Router() 

routs.get('/',getUser)

routs.post('/',postUser)

routs.patch('/:id',patchUser)

routs.delete('/',deleteUser)


export default routs
