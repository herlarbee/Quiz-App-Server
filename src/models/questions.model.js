// questions-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const questions = new mongooseClient.Schema({
    name: { type: String, required: true },
    questionBody: {type:String, required:true},
    questionOptions: {type:String},
    questionAnswer:{type:String},
    answeredBefore: {type: Boolean, default:false},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('questions', questions);
};
