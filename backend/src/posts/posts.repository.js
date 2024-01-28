import PostModel from "./post.schema.js"

export const newMemoRepository = async (newmemo) => {

    try {
        const newdata = new PostModel(newmemo);
        await newdata.save();
        // console.log(newdata);
        return newdata;

    } catch (err) {
        console.log("something went wrong at repository");
        console.log(err);
    }


}
export const getMemoRepository = async () => {
    try {
        const memoreis = await PostModel.find({});
        // console.log(memoreis);
        return memoreis;
    } catch (err) {
        console.log("something went wrong at repository");
        console.log(err);
    }
}

export const postDeleteRepo = async (id) => {
    try {
        const result = await PostModel.findByIdAndDelete({ _id: id });
        // console.log("repo result", result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const getMemoByIdRepository = async (id) => {
    try {
        const res = await PostModel.findById({ _id: id });
        // console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const updateMemoByIdRepository = async (id, data) => {
    try {
        const updatedMemo = await PostModel.findByIdAndUpdate(
            id,
            data,
            { new: true } 
        );
        console.log(updatedMemo);
        return updatedMemo;


       
    } catch (err) {
        
        console.error('Error updating memo:', err);
        throw err; 
    }
};