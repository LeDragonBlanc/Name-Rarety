async function Find () {
    var name = document.getElementById('name').value;
    const response = await fetch('https://api.agify.io?name=' + name);
    const json = await response.json();

   document.getElementById('result').innerHTML = 'Il y a ' + json["count"] + ' personnes appelées ' + name + ' dans le monde !';
   document.getElementById('age').innerHTML = "Et la moyenne d'âge de ce prénom est de " + json["age"] + " ans !";
};