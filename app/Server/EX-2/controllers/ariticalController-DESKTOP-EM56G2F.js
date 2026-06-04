import { articles } from "../models/data.js";
import express from "express";

const app = express();
app.use(express.json());
const port = 8000;
//Task 2
app.get('/articles', (req, res) => {

    articles.forEach((article) => {
        return res.json(article)
    })
})
app.get('/articles/:id',(req, res) => {
const searchId = Number(req.params.id);
articles.forEach((article) => {
    if(searchId === article.id){
        res.json(article);
    }
})
if(!searchIds){
    res.status(404).json({error: `user is not found!`})
}
})
app.post( '/articles',(req, res)=> {
    const {title, content, journalistId, categoryId} = req.body;
    if(!title || !content || !journalistId || !categoryId){
        res.status(404).json({error: `title content or journalistId or categoryId must be provided!`})
    }
    const newUser = {
        id : journalistId,
        title: title,
        content: content,
        categoryId: categoryId
    }
   articles.push(newUser);
   return res.status(201).json(newUser); 
})
//Task 3
app.put('/articles/:id', (req, res) => {
    const updateId = Number(req.params.id);
    const {title, content, journalistId, categoryId} =  req.body
    articles.forEach((article) => {
        if(!title || !content || !journalistId || !categoryId)
    })  
})
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
