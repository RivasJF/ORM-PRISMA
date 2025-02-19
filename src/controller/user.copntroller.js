import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getUser=async(req,res)=>{
    const users = await prisma.user.findMany()
    res.json(users)
}

export const postUser=async(req,res)=>{
    const newUser = await prisma.user.create({
        data:req.body,
    })
    res.json(newUser)
}

export const patchUser=async(req,res)=>{
    const updateUser = await prisma.user.update({
        where:{
            id:parseInt(req.params.id),
        },
        data:req.body
    })

    return res.json(updateUser)
}

export const deleteUser=async(req,res)=>{
    const userDel = await prisma.user.delete({
        where:{
            id:parseInt(req.body.id)
        }
    })

    if(!userDel){
        return res.status(404).json({error:"user not found"})
    }

    return res.json(userDel)
}