const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://admin:PASSWORD-AQUI@cluster0.e5rlk.mongodb.net/test?authSource=admin&replicaSet=atlas-ebtcxk-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

MongoClient.connect(uri, {useUnifiedTopology:true})
	.then(client => {
		console.log("connected!");

		const db = client.db("Prueba");
		const collection = db.collection("Preguntas");

		data = {name: "pregunta 1", A: 0, B: 0, C: 0};

		collection.insertOne(data)
			.then(result => {
				//console.log(result);
			})
			.catch(error => {
				console.error(error);
			});

		for (i = 0; i < 100; i++) {
			collection.findOneAndUpdate(
					{ name: "pregunta 1" },
					{ $inc: {A: 1, B: 1, C: 1} },
					{ upsert: true }
				)
				.then(result => {
					//console.log(result);
					console.log("exito!");
				})
				.catch(error => {
					console.error(error);
				});
		}
	});