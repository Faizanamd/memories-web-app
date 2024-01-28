
import app from './index.js';
import { connnectToMongoose } from './src/config/monogdb.js';
app.listen(8000, ()=>{
    connnectToMongoose();
    console.log("App is listening at port 8000");
})