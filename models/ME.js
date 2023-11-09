const Me= [{
'id':1,
'username' :'Selma',
'email': 'Iba',
'password': 123450,
'admin' :true

},{
    'id': 2,
    'username': 'Nouamane',
    'email': 'El-Alami',
    'password': 123450,
    'admin': false
}];
exports.find=()=>{return Me;}

exports.findById =()=>{
    for (let i = 0; i < Me.length; i++) {
        const element = Me[i];
        if(element.id===id){
            return element}
        }} 
return null ;