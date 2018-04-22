import mongoose from 'mongoose';

var todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  done: {
    type: Boolean,
    default: false
  },
  alert: {
    type: String,
    enum: ["on", "off"]
  }
});
mongoose.model('Todos', todoSchema);