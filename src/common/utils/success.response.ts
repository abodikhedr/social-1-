import { Response } from "express"

export const success_response=({
    res,
    statusCode,
    message="done",
    data
}:{
    res:Response,
    statusCode:number,
    message:string,
    data?:any
})=>{
    return res.status(statusCode || 200).json({message,data})
}