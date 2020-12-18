import mongoose from 'mongoose'
const connection =
	'mongodb+srv://dio:angular@angular-cluster.2nphl.mongodb.net/company?retryWrites=true&w=majority'

mongoose
	.connect(connection, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(db => console.log('Database is connected pal'))
	.catch(error => console.log(error))
