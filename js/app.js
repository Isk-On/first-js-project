const name = prompt("Здравствуй! Введи свое имя!", "")

const login = prompt("Введите логин");


if (login === "admin") {
  const password = prompt("Введите пароль", "");
  if (password == 123) {
    alert("Пароль правильный");
  }
  if (password !== 123) {
    alert(`${name}, пароль неправильный!`);
  }
}
if(login !== "admin"){
    alert(`${name}, ты ввел неправильный логин!`)
}