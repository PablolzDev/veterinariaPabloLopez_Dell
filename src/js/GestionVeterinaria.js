// Pet List+
const pets = [
  {
    name: "myke",
    age: 2, // 2020
    breed: "bulldog",
    species: "dog",
    weight: 30.2,
    status: "critical",
    owner: {
      name: "juan carlos",
      document: "102030",
      phone: "320602789",
      email: "juan.carlos@gmail.com",
    },
  },
  {
    name: "ramona",
    age: 6, // 2016
    breed: "bulldog",
    species: "dog",
    weight: 25.5,
    status: "stable",
    owner: {
      name: "maria jose",
      document: "405060",
      phone: "320715092",
      email: "mariajose1@gmail.com",
    },
  },
  {
    name: "thor",
    age: 10, // 2012
    breed: "britishShorthair",
    species: "cat",
    weight: 6.8,
    status: "stable",
    owner: {
      name: "julian garces",
      document: "708090",
      phone: "302871275",
      email: "julianG@gmail.com",
    },
  },
  {
    name: "bella",
    age: 5, // 2017
    breed: "birmano",
    species: "cat",
    weight: 4.2,
    status: "stable",
    owner: {
      name: "valeria gomez",
      document: "142356",
      phone: "300987652",
      email: "val_gomez@gmail.com",
    },
  },
  {
    name: "pirulo",
    age: 1, // 2021
    breed: "chihuahua",
    species: "dog",
    weight: 2.1,
    status: "critical",
    owner: {
      name: "carolina osorio",
      document: "102588",
      phone: "3052946001",
      email: "caroosoa@gmail.com",
    },
  },
  {
    name: "firulais",
    age: 4, // 2018
    breed: "chihuahua",
    species: "Dog",
    weight: 3.5,
    status: "stable",
    owner: {
      name: "laura guzman",
      document: "978067",
      phone: "305156722",
      email: "laura.guzman@gmail.com",
    },
  },
  {
    name: "mishi",
    age: 2, // 2020
    breed: "persian",
    species: "Cat",
    weight: 5.2,
    status: "stable",
    owner: {
      name: "santiago pineda",
      document: "876543",
      phone: " 3026637604",
      email: "santiagopineda@gmail.com",
    },
  },
  {
    name: "rocky",
    age: 5, // 2017
    breed: "boxer",
    species: "Dog",
    weight: 28.7,
    status: "critical",
    owner: {
      name: "carolina bustamante",
      document: "456789",
      phone: "3113506770",
      email: "caritoB11@gmail.com",
    },
  },
  {
    name: "plumita",
    age: 1, // 2021
    breed: "canary",
    species: "Bird",
    weight: 0.1,
    status: "stable",
    owner: {
      name: "juan jose",
      document: "234567",
      phone: "3022260938",
      email: "juanjose09@ejemplo.com",
    },
  },
  {
    name: "nemo",
    age: 0, // 2022
    breed: "clownfish",
    species: "Fish",
    weight: 0.05,
    status: "stable",
    owner: {
      name: "santiago",
      document: "98765432",
      phone: "3105081589",
      email: "mari.Luci@gmail.com",
    },
  },
];

//Registro de mascotas
function registerPet() {
  const name = prompt("Enter pet name");
  // Solicita al usuario que ingrese la fecha de nacimiento de la mascota en formato YYYY-MM-DD
  const birthDate = prompt("Enter birth date (YYYY-MM-DD)");
  // Obtiene la fecha actual
  const today = new Date();
  // Extrae el año, mes y día de la fecha de nacimiento ingresada por el usuario
  const birthYear = parseInt(birthDate.substring(0, 4));
  const birthMonth = parseInt(birthDate.substring(5, 7)) - 1;
  const birthDay = parseInt(birthDate.substring(8, 10));
  // Calcula la edad de la mascota basándose en la fecha de nacimiento
  let age = today.getFullYear() - birthYear;

  // Si la mascota aún no ha cumplido años en el año actual, se resta 1 a la edad
  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }

  const breed = prompt("Enter breed");
  const species = prompt("Enter species");
  const weight = prompt("Enter weight");
  const status = prompt("Enter status");
  const ownerName = prompt("Enter owner name");
  const ownerDocument = prompt("Enter owner document");
  const ownerPhone = prompt("Enter owner phone");
  const ownerEmail = prompt("Enter owner email");

  // Crea un objeto para el dueño de la mascota con los datos ingresados por el usuario
  const owner = {
    name: ownerName,
    document: ownerDocument,
    phone: ownerPhone,
    email: ownerEmail,
  };

  // Crea un objeto para la nueva mascota con los datos ingresados por el usuario y la edad calculada
  const newPet = {
    name: name,
    age: age,
    breed: breed,
    species: species,
    weight: parseFloat(weight),
    status: status,
    owner: owner, // Asigna el objeto del dueño a la propiedad owner de la mascota
  };

  pets.push(newPet);
  console.table(pets);
  return pets;
}

function listar() {
  //muestra todas las mascotas
  console.groupCollapsed("pets");
  for (let i = 0; i < pets.length; i++) {
    console.table(pets[i]);
  }
  console.groupEnd(pets);

  //muestra a los dueños
  console.groupCollapsed("owners");
  pets.forEach((pets) => {
    console.table(pets.owner);
  });
  console.groupEnd();

  console.error("Buscar una mascota por su nombre");

  let search = prompt("Ingrese el nombre de la mascota");

  // Validar que la entrada no sea solo espacios en blanco
  if (!search.trim()) {
    console.log("Por favor, ingrese un nombre válido.");
  } else {
    // Realizar la búsqueda en el array solo si la entrada es válida
    if (pets.some((pet) => pet.name === search)) {
      console.log(`El valor "${search}" está en el array.`);
    } else {
      console.log(`El valor "${search}" no está en el array.`);
    }
  }
}

// Función para listar las mascotas que pertenecen a un dueño específico
function listarMascotasPorDueño() {
  let ownerName = prompt("Ingrese el nombre del dueño");

  // Filtra el array de mascotas para obtener solo las mascotas que pertenecen al dueño ingresado por el usuario
  // Se tiliza toLowerCase() para hacer la comparación de nombres sin tener en cuenta las mayúsculas y minúsculas
  let petsOfOwner = pets.filter(
    (pet) => pet.owner.name.toLowerCase() === ownerName.toLowerCase()
  );

  // Si se encontraron mascotas para el dueño ingresado por el usuario
  if (petsOfOwner.length > 0) {
    // Recorre cada mascota encontrada
    petsOfOwner.forEach((pet) => {
      // Imprime en la consola el nombre, la especie y el nombre del dueño de la mascota
      console.log(
        `Nombre: ${pet.name}, Especie: ${pet.species}, Dueño: ${pet.owner.name}`
      );
    });
  } else {
    // Si no se encontraron mascotas para el dueño ingresado por el usuario, imprime un mensaje en la consola
    console.log(`No hay mascotas para el dueño con nombre ${ownerName}`);
  }
}
// Función para actualizar la información de una mascota
function updatePet() {
  let petName = prompt("Ingrese el nombre de la mascota que desea actualizar");

  // Busca en el array de mascotas la mascota con el nombre ingresado por el usuario
  // Se utiliza toLowerCase() para hacer la comparación de nombres sin tener en cuenta las mayúsculas y minúsculas
  let pet = pets.find((p) => p.name.toLowerCase() === petName.toLowerCase());

  // Si se encontró la mascota
  if (pet) {
    let newAge = prompt("Ingrese la nueva edad de la mascota");
    let newWeight = prompt("Ingrese el nuevo peso de la mascota");
    let newStatus = prompt("Ingrese el nuevo estado de la mascota");

    // Actualiza la edad, peso y estado de la mascota con los nuevos valores ingresados por el usuario
    pet.age = new Date(newAge);
    pet.weight = parseFloat(newWeight);
    pet.status = newStatus;

    console.log(`La mascota ${petName} ha sido actualizada.`);
  } else {
    console.log(`No se encontró una mascota con el nombre ${petName}`);
  }
}
// Función para eliminar una mascota
function deletePet() {
  let petName = prompt("Ingrese el nombre de la mascota que desea eliminar");
  // Busca en el array de mascotas la mascota con el nombre ingresado por el usuario y obtiene su índice
  let petIndex = pets.findIndex(
    (p) => p.name.toLowerCase() === petName.toLowerCase()
  );

  // Si se encontró la mascota
  if (petIndex !== -1) {
    // Elimina la mascota del array de mascotas utilizando el método splice()
    pets.splice(petIndex, 1);
    console.log(`La mascota ${petName} ha sido eliminada.`);
  } else {
    console.log(`No se encontró una mascota con el nombre ${petName}`);
  }
}

function menu() {
  let option = prompt(
    "Ingrese una opción: \n1. Agregar una nueva mascota \n2. Actualizar mascota \n3. Eliminar mascota \n4. Listar todas las mascotas \n5. Listar mascotas por dueño"
  );

  switch (option) {
    case "1":
      registerPet();
      break;
    case "2":
      updatePet();
      break;
    case "3":
      deletePet();
      break;
    case "4":
      listar();
      break;
    case "5":
      listarMascotasPorDueño();
      break;
    default:
      console.log("Opción no válida");
      break;
  }
}

menu();
