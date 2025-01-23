import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { engToKor } from '@/routes/eng-to-kor';
import { admin } from '@/routes/admin';
import { AppDataSource } from '@/utils/config/DataSource';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

AppDataSource.initialize().then(()=>{
  console.log('DB가 연결되었음');
})
.catch(err => {
  console.error('DB 연결에 실패했음', err);
});

app.use('/eng-to-kor', engToKor);
app.use('/admin', admin);

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
