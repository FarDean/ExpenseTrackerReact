// @desc get all transactions
// @route GET /api/v1/transaction
// access public
exports.getTransactions =(req,res,next)=>{
    res.send('GET transaction');
}

// @desc add transaction
// @route POST /api/v1/transaction
// @access public
exports.addTransactions =(req,res,next)=>{
    res.send('POST transaction');
}

// @desc Delete transactions
// @route DELETE /api/v1/transaction
// access public
exports.deleteTransactions =(req,res,next)=>{
    res.send('DELETE transaction');
}