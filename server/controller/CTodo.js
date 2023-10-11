const { sequelize } = require('../models/index');
const { Todo } = require('../models/Todo');

exports.index = async () => {
  try {
    const todos = await Todo.findAll();
    res.send(todos);
  } catch (err) {
    console.log('error');
  }
};

exports.createTodo = async () => {
  try {
    const todo = await Todo.create({        
        title:,
        done:,
    })
  } catch (err) {
    console.log('error');
  }
};

exports.editTodo = async ()=> {
    
 try{
    await Todo.update(
        {title:,
        done:,},
        {where: {id: ,}}
    )
    res.send('성공')
 }
 catch (err) {
  console.log('error');
}
}

exports.removeTodo = async ()=> {
    try{
        await Todo.delete(
            {where: {id: ,}}
        )
    }
    catch (err) {
     console.log('error');
    }
}