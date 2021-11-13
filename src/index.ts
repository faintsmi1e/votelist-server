import express from 'express';
import router from './router/router'
import cors from 'cors';
import mongoose from 'mongoose';

const DB_URL =
  'mongodb+srv://user:user@cluster0.zreld.mongodb.net/votesDB?retryWrites=true&w=majority';

const port = process.env.PORT || 8080;
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();