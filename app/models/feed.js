import Micropost from './micropost';

//feeds are microposts too, no need to define a new model
//the downside of this is that many microposts will be fetched and stored
//2 times :\
export default Micropost.extend({});


