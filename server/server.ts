import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://tapia2:UtjCcd2@40.233.18.66:27017/dbSneakers')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

interface IUser extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', userSchema);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/server', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received data:', { email, password }); // Log de los datos recibidos
  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid email or password' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
