import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getUsers=async(req,res)=>{
    try {
        const users = await prisma.users.findMany()
        res.json(users)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getUser=async(req,res)=>{
    try {
        const user = await prisma.users.findFirst({
        where: {
            id:parseInt(req.params.id)
        }
        })
        if(!user){return res.json({message:"user not found"})}
        return res.json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export const postUser=async(req,res)=>{
    try {
        const newUser = await prisma.users.create({
            data:req.body,
        })
        res.json(newUser)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const patchUser=async(req,res)=>{
    try {
        const updateUser = await prisma.users.update({
            where:{
                id:parseInt(req.params.id),
            },
            data:req.body
        })
        return res.json(updateUser)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteUser=async(req,res)=>{
    try {
        const userDel = await prisma.users.delete({
            where:{
                id:parseInt(req.body.id)
            }
        })
    
        if(!userDel){return res.status(404).json({error:"user not found"})}
        return res.json(userDel)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}