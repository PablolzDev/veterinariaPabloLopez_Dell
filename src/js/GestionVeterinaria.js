// Pet List+
const pets = [
  {
    name: "myke",
    age: 2, // 2020
    breed: "bulldog",
    image: "https://th-thumbnailer.cdn-si-edu.com/ZIf6orrEhd8Hr4GAG3MYV2OKot8=/fit-in/1600x0/filters:focal(939x670:940x671)/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler_public%2F5b%2Fc9%2F5bc97061-92f6-4430-8336-c634c91e9628%2F2560px-encontro_dog_institute_40130373460.jpg",
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
    image:"https://www.tiendanimal.es/articulos/wp-content/uploads/2020/11/El-Bulldog-ingl%C3%A9s-c%C3%B3mo-cuidarlo-1200x800.jpg",
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
    image:"https://t1.uc.ltmcdn.com/es/posts/5/0/3/korat_53305_9_600.webp",
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
    image:"https://okdiario.com/img/2020/07/25/curiosidades-sobre-la-inteligencia-de-los-gatos-635x358.jpg",
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
    image:"https://caracol.com.co/resizer/v2/D627YQLQEBC27I5UQZ2Y44ZG5U.jpg?auth=342359cc2a7f8feeda6a0782ffdbaee21c8ee871bcebb97c5e87ef1b43f2483f&width=650&height=488&quality=70&smart=true",
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
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKnS_ibX0BsGFNRmBTv-kzYT4PmtCnD2eyjLxvUHNcQ&s",
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
    image:"https://cdn.shopify.com/s/files/1/1199/8502/files/persian-doll-face.jpg",
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
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKfAKQ39jSv1ypjmMDRkgE4deI52IlsnVvri90v9rEQ&s",
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
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMU98hycoqnv5N_MD7GS5zLv4ge3wO1ApM91m0Svnh7w&s",
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
    image:"https://cdn0.bioenciclopedia.com/es/posts/1/7/1/pez_payaso_171_orig.jpg",
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

// Insercion de Cards
const petss = document.querySelector('#ark');

for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    petss.innerHTML += `
      <div class="col-md-3">
          <div class="card h-100">
              <img src="${pet.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${pet.name}</h5>
                  <p class="card-text">Age: ${pet.age}</p>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer text-center">
                 <a href="#" class="btn btn-primary w-75">Adopta</a>
              </div>
          </div>
    </div>`;
}



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

/*   switch (option) {
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

menu(); */

//Dropdown HTML con forms
const dropdownElementList =
document.querySelectorAll(".dropdown-toggle");
const dropdownList = [...dropdownElementList].map(
(dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl)
);

}