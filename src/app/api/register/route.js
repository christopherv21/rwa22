export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')
  const dob = searchParams.get('dob')
  const firstname = searchParams.get('firstname')
  const surname = searchParams.get('surname')

  console.log(email);
  console.log(pass);
  console.log(dob);
  console.log(firstname);
  console.log(surname);

  const { MongoClient } = require('mongodb');
  const url = 'mongodb+srv://b00146996:SGbI5kZ3CyYx4Ktp@cluster0.gtec765.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(url);
  const dbName = 'app'; // database name
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('login'); // collection name
  const findResult = await collection.insertOne({"username": email, "pass": pass, "dob": dob});
  
 
    
  // at the end of the process we need to send something back.
  return Response.json({ "data":"valid" })
}

