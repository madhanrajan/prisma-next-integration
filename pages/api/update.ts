

import {prisma} from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    const {title, content, id} = req.body;
    try{
        if(req.method === "UPDATE"){
            console.log("update");
            await prisma.note.update({
            where: {id: Number(id)},
            data: {
                title: title,
                content: content
            }
    })    
        }
    }catch (error){
        console.log(error);
    }
}