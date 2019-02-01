// dokcer ps
// docker exec -it 48b0eda431a8 mongo -u walefe -p 123456 --authenticationDatabase herois

//databases 
show dbs

//mudando o contexto para um database 
use herois

//mostrar tables (colecoes)
show collections 

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

db.herois.find()
db.herois.pretty()

for(let i=0; i<= 50000; i ++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Velocidade',
        dataNascimento: '1998-01-01'
    })
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({nome: -1})
db.herois.find({}, {poder:1 , _id:0})

// create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

// read
db.herois.find()

//update
db.herois.update({_id: ObjectId("5c28d5cb89d90cb10979e6d7") }, 
                    {nome: 'Mulher maravilha'})

db.herois.update({_id: ObjectId("5c28d64989d90cb10979eabf") }, 
                {$set: {name: 'Lanterna Verde'}})

db.herois.update({poder: 'Velocidade'},
                 { $set: {poder: 'super força'}})

// delete
db.herois.remove({})