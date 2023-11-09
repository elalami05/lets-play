const users = [{
    'id': 1,
    'username': 'Selma Iba',
    'email': 'Selma-Iba',
    'password': 123450,
    'isAdmin': true,
    'score' :10

}, {
    'id': 2,
    'username': 'Nouamane',
    'email': 'El-Alami',
    'password': 123450,
    'isAdmin': false,
    'score': 30
}];

exports.find = () => {
    return users;
}

exports.findExceptAdmin = () => {
    const usersExceptAdmin = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (!user.isAdmin) {
            usersExceptAdmin.push(user);
        }
    }
    return usersExceptAdmin;
}


const getNewId = () => {
    if (users.length > 0) {
        return users[users.length - 1].id + 1;
    }
    return 1;
}

exports.create = (user) => {
    user.id = getNewId();
    user.isAdmin = false;
     users.push(user);
    return user;
}
exports.createe=(data)=>{
 const newUser={
     'id': users.length +1,
     'username': data.username,
     'email': data.email,
     'password': data.password,
     'isAdmin': data.isAdmin,
     'score': data.score
 }   
 users.push(newUser);
 return newUser;
}

exports.findByEmail = (email) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email) {
            return user;
        }
    }
    return null;
}

exports.findById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === parseInt(id)) {
            return user;
        }
    }
    return null;
}

exports.updateById = (id, data) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === parseInt(id)) {
            user.username = data.username;
            user.email= data.email;
           
            return;
        }
        else{'no user found'}
    }
}

exports.deleteById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id ===  parseInt (id)) {
            users.splice(i, 1);
            
        }
    }
}

exports.resetScoreById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.score = 0;
            return;
        }
    }
}

exports.incrementScoreById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.score++;
            return;
        }
    }
}

exports.decrementScoreById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.score--;
            return;
        }
    }
}

 