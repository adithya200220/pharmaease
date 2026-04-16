import mongoose from "mongoose"


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://maharjansanam:Sanam123@cluster0.ancm1.mongodb.net/?').then(()=>console.log("DB Connected"));
}