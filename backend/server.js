import express  from "express"; //module js syntax - works asynchronously, to change error-> package -> module assembling
const app = express();

// app.get('/',  (req, res) => {
//     res.send("Server is ready");
// });

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id : 1,
            title : 'A joke',
            content : 'This is a joke'
        },
        {
            id : 2,
            title : '2nd joke',
            content : 'This is a 2 joke'
        },
        {
            id : 3,
            title : '3rd joke',
            content : 'This is a 3 joke'
        },
        {
            id : 4,
            title : '4th joke',
            content : 'This is a 4 joke'
        },
        {
            id : 5,
            title : '5th joke',
            content : 'This is a 5 joke'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});