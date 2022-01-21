import express, { json }  from "express";
import { router } from './routes/routes.user';

const app = express()
const port = 3333;

app.use(json())
app.use(router);


app.listen(port, () => console.log("server is running on port", port));

