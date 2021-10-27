const  express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json({extended: true}));

app.use('/api/auth', require('./Routes/auth.routes'))
app.use('/api/nickname', require('./Routes/link.routes'))
app.use('/api/clicker', require('./Routes/clicker.routes'))
app.use('/delete', require('./Routes/delete.route'))

if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 4000;

async function start(uri, callback){
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        app.listen(PORT, () => console.log(PORT , "port"));
    } catch (e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
}

start();



