let user1 = { 
    name: prompt("Enter first user name") , 
    age: +prompt("Enter first user age" )
}
let user2 = { 
    name: prompt("Enter second user name") , 
    age: +prompt("Enter second user age" )
}
let str = "dan katta"
let str2 = "bilan "
let str3 = "ni yoshlari teng" 
if( user1.age > user2.age ){
    user1.name = user1.name +" "
    result = user1.name + user2.name + str
    alert( result )
}else if(user1.age == user2.age ){
    user1.name = user1.name +"  "
    result = user1.name + str2 + user2.name +str3
    alert( result )
}else{
    user2.name = user2.name +"  "
    result = user2.name + user1.name + str
    alert( result )
}
