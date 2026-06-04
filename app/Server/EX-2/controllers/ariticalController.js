import { articles } from "../models/data.js";
//Task 2
//Get all articles
export const getAllArticles = (req, res) => {
   res.status(200).json(articles);
}
// By Id
export const getAriticleById = (req, res) => {
    const searchId = Number(req.params.id);
    // const article = articles.find((article) => article.id === searchId); 
    const article = articles.find((article) => article.id === searchId);
    if(!article){
        return res.status(404).json({error: `cannot find the article!`})
    }
    res.json(article);
}
//create article
export const createArticle =  (req, res)=>{
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
}
//update on artical by id
export const updateByID = (req, res)=>{ 
    const updateId = Number(req.params.id);
    if(!updateId){
      return  res.status(404).json({error: `id can not be empty!`})
    }
    if(Object.keys(req.body).length === 0){
       return res.status(404).json({error: `At least one field must be provided!!`});
    }
    const findArticle = articles.find((article) => updateId === article.id);
    if(!findArticle){
      return  res.status(404).json({error: `Article with this id cannot be found!`})
    }
    Object.assign(findArticle, req.body);
    res.status(200).json(findArticle);
}
//Delte by id
export const delById = (req, res) => {
    const delId = Number(req.params.id);
    const delArticle = articles.findIndex((article) => delId === article.id);
    if(delArticle === -1){
        return res.status(404).json({error: `article is not found!`})
    }
articles.splice(delArticle, 1);
return res.status(204).json(`successfully delete`);
}

