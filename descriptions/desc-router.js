const router = require('express').Router();

//

const getDatingScore = require('./desc-model');


router.post('/description', async (req, res) => { 
    const { description } = req.body;
    const predictedScore = description;
    
    const score = await getDatingScore(predictedScore);

    try {
        if(score){
            res.status(200).json({...score});
        } else {
            res.status(400).json({ message: 'Please submit a valid description'});
        }
    } catch(err) {
        res.status(500).json({ message: 'Error submmiting description'});
    }
});

module.exports = router;