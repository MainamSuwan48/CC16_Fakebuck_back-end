module.exports = (req,res,next) =>{
    res.status(404).json({message:'i think you are lost bro'});
};