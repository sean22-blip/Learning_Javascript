const express = require('express');
const app = express();
const port = 8000;
app.get("/", ( req, res, next) => {
console.log("first middleware");
setTimeout(() => {

    next();
}, 2000);
}
)
app.get("/", ( req, res, next) => {
console.log("second middleware");
setTimeout(() => {

    next();
}, 2000);
}
)
app.get("/", ( req, res, next) => {
console.log("third middleware");
setTimeout(() => {

    next();
}, 2000);
}
)
app.get("/", ( req, res, next) => {
console.log("fourth middleware");
setTimeout(() => {
    console.log("Finished the middleware!");
    res.send("Done!!");
}, 2000);
}
)
app.listen(port, () => {
    console.log(`server is running at ${port}`)
});