const user = 'mernUser';
const passwd = 'Mern123456'
module.exports = {
  mongoURI: `mongodb://${user}:${passwd}@ds011913.mlab.com:11913/mern_shop_db`,
  PORT: process.env.PORT || 5000
}
