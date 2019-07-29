const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let Current_PASSWORD = prompt('enter your password');
if(Current_PASSWORD === null){
message = 'Отменено пользователем';
}
else if (
  Current_PASSWORD == ADMIN_PASSWORD
) 
 { message = 'Добро пожаловать!';
}
else{
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

