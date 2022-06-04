import autores from "../models/Autor.js"

class autoresController {

static listarAutores = (req, res)=>{

    autores.find((err, autores) => {
        res.status(200).json(autores)
      })
}
static listarAutor = (req,res)=>{
    const id = req.params.id

    autores.findById(id, (err, autores) =>{
        if(err){
            res.status(400).send({message:`${err.message} ID do livro não localizado`})
        }else{
            res.status(200).send(autores)
        }
    })

}
static cadastrarAutores = (req, res)=>{
    let livro = new autores(req.body)

    livro.save((err)=>{
        if(err){
            res.status(500).send({message:`${err.message} - Falha ao cadastrar livro`})
        }else{
            res.status(201).send(livro.toJSON())
        }
    })
}
static atualizarAutor = (req, res) =>{
    const id = req.params.id

    autores.findByIdAndUpdate(id,{$set: req.body}, (err) =>{
        if(!err){
            res.status(200).send({message: 'Autor atualizado com sucesso'})
        }else{
            res.status(500).send({message:err.message})
        }
    })
}
static excluirAutor = (req,res) =>{
    const id = req.params.id

    autores.findByIdAndDelete(id,(err) =>{
        if(!err){
            res.status(200).send({message:'Autores removido com sucesso'})
        }else{
            res.status(500).send({message: err.message})
        }
    })

}
}

export default autoresController