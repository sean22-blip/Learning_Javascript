import { journalists } from "../models/data.js";




export const getAlljournalist = (req, res) => {
    res.status(200).json(journalists);
}

export const getJournalistById = (req, res) => {
const getId = Number(req.params.id);
const journalist = journalists.find((journalist) => getId === journalist.id )
if(!getId){
 return res.status(404).json({error: `id can not be empty!`})
}
res.status(200).json(journalist);
}

export const createNewJournalist = (req, res) => {
const {name, email} = req.body
if(!name || !email ){
    return res.status(404).json({errro: `name or email cannot be empty!`});
}
const newJournalist = {
    id: (journalists.length) + 1,
    name: name,
    email: email
};
journalists.push(newJournalist);
res.status(200).json(newJournalist)
}
export const updateJournalistById = (req, res) => {
const updateId = Number(req.params.id);
if(!updateId){
    return res.status(404).json({error: `id must be provided!`})
}
const findJournalist = journalists.find((journalist) => updateId === journalist.id)
if(!findJournalist){
    return res.status(404).json({error: `cannot find the matching id!`})
}
if(Object.keys(req.body).length === 0){
    return res.status(404).json({error: `one field must be provided!`});
}
Object.assign(findJournalist, req.body);
res.status(200).json(findJournalist)
}
export const delJournalistById = (req, res) => {
const id = Number(req.params.id);
if(!id){
    return req.status(404).json({error: `id must be provided!`})
}
const findJournalist = journalists.findIndex((journalist) => id === journalist.id);
const getName = journalists.find((journalist) => journalist.id === id );
if(findJournalist === -1){
    return res.status(404).json({erorr: `cannot find the journalist with this id!`})
}
journalists.splice(findJournalist, 1);
return req.json(`successfully deleted ${getName.name}`)
}
 