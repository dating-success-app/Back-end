const axios = require('axios');
const api = 'http://lsdatify-env.ydjfgvpyxm.us-east-1.elasticbeanstalk.com/api';

const getDatingScore =  (description) => {

    return axios.post( api, {description : description })
         .then(res => {
            //  console.log(res.data, '-- response from getDatingScore')
            return res.data;
          })
          .catch(err => {
              // console.log(err)
              return err.message;
          });
};

module.exports = getDatingScore;