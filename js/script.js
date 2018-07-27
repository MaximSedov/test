function myFirstApp(name, age){
    alert("Привет, меня зовут " + name + " и это первый скрипт! Мне " + age + " лет.");
    function showSkills(){
        let skills = ["html","css","js","php" ];
        document.write("Я владею " + skills.length + " навыками:" + "<br>");
        for(let i = 0; i < skills.length; i++){
            //Skills[i] = prompt(skill[i]);
            document.write("Навык " + "<b>" +(i+1)+"</b>" + " - " + skills[i] + "<br>");
        }
    }
    showSkills();
    function checkAge(){
        if (age>=18) {
            alert("Вы можете войти.")
            }else{
                alert("Вы не можете войти.")
            }
    }
    checkAge();
    function calcPow(num){
        document.write("<br>Цифра " +num+ " в квадрате = " + Math.pow(num,2));
    }
    calcPow(4);
}
myFirstApp("Maxim", 18);