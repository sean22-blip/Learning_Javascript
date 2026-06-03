import { articles } from "../models/data.js";
import express from "express";

const app = express();
app.use(express.json());
const port = 8000;
//Task 2
//Get all articles
app.get('/articles', (req, res) => {
   res.status(200).json(articles);
})
// By Id
app.get('/articles/:id',(req, res) => {
    const searchId = Number(req.params.id);
    // const article = articles.find((article) => article.id === searchId); 
    const article = articles.find((article) => article.id === searchId);
    if(!article){
        return res.status(404).json({error: `cannot find the article!`})
    }
    res.json(article);
})
//create article
app.post('/articles', (req, res)=>{
    const {title, content, journalistId, categoryId} = req.body;
    if(!title || !content || !journalistId || !categoryId){
        return res.status(400).json({error: `All field must be provided!`});
    }

    let newUser = {
        id: (articles.length + 1),
        title: title,
        content: content,
        journalistId: journalistId,
        categoryId: categoryId
    }
    articles.push(newUser);
    return res.status(201).json(newUser);

})
//update on artical by id
app.put('articles',(req, res)=>{    
    
})

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
