import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://admin:mongodb@3282@cluster0.zgqc2ql.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollections = db.collection('meetups');

    const result = await meetupsCollections.insertOne(data);

    client.close();

    res.status(201).json({ message: '밋업 저장 성공' });
  }
}

export default handler;
