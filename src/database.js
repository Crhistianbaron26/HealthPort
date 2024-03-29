import {connect} from "mongoose";

(async()=>{
    try {
        const db = await connect("mongodb://localhost/healthport") 
        console.log('DB Connected to', db.connection.name)
    } catch (error) {
        console.error(error);
    }

})()
