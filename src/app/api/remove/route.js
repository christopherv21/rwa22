export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  console.log(id);


    // database call goes here
    const { MongoClient } = require('mongodb');
    const url = 'mongodb+srv://b00146996:<pass>@cluster0.gtec765.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url);
    const dbName = 'app'; // database name
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('shopping_cart'); // collection name


   // const findResult = await collection.deleteOne({"_id": ObjectId("$id") });




  // at the end of the process we need to send something back.
  return Response.json({ "data":"valid" })
}

