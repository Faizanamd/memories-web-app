import { newMemoRepository, getMemoRepository, postDeleteRepo, getMemoByIdRepository, updateMemoByIdRepository } from "./posts.repository.js";



export const newMemoController = (req, res) => {
    // console.log(req.body);
    const newmemo = {
        ...req.body, image: req.file.filename, timestamp: getCurrentTimeAndDate()
    }
    console.log(newmemo)
    newMemoRepository(newmemo);
    res.send(";dflas")

}
export const getMemoController = async (req, res) => {
    try {
        const memoreis = await getMemoRepository();
        // console.log("memores", memoreis);
        res.send(memoreis);
    } catch (err) {
        console.log(err);
    }
}
export const postDelete = async (req, res) => {
    try {
        const result = await postDeleteRepo(req.params.id);
        // console.log("reslt", result);
        res.send(result);
    } catch (err) {
        console.log(err);
    }
}
export const getMemoByIdController = async (req, res) => {
    try {
        const ans = await getMemoByIdRepository(req.params.id);
        res.send(ans);
    }
    catch (err) {
        console.log(err);
    }
}
export const updateMemoByIdController = async(req, res) => {
    
    try{
        const result= await updateMemoByIdRepository(req.params.id, req.body);
        res.send(result);
    }catch(err){
        console.log(err);
    }
}
function getCurrentTimeAndDate() {
    const currentDate = new Date();

    // Get hours, minutes, day, month, and year
    const hours = (currentDate.getHours());
    const minutes = (currentDate.getMinutes());
    const day = (currentDate.getDate());
    const month = (currentDate.getMonth() + 1); // Months are zero-based
    const year = currentDate.getFullYear();

    // Construct the final formatted string
    const formattedDateTime = `${month}:${hours} ${day}:${minutes}:${year}`;
    console.log(formattedDateTime)
    return formattedDateTime;
}

