const express = require('express')

export const videoRouter = express.Router();


videoRouter.get('/videos', function(req,res){
    return res.send({ id: '1', video: 'Some video link'})
})

videoRouter.post('/video', function(req,res){
    console.log(req.body)
    return res.send({ body: req.body, response: 'Success'})
})

module.exports = videoRouter;