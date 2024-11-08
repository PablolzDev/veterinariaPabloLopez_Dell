// Pet List
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
    image: "https://www.tiendanimal.es/articulos/wp-content/uploads/2020/11/El-Bulldog-ingl%C3%A9s-c%C3%B3mo-cuidarlo-1200x800.jpg",
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
    image: "https://t1.uc.ltmcdn.com/es/posts/5/0/3/korat_53305_9_600.webp",
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
    image: "https://okdiario.com/img/2020/07/25/curiosidades-sobre-la-inteligencia-de-los-gatos-635x358.jpg",
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
    image: "https://caracol.com.co/resizer/v2/D627YQLQEBC27I5UQZ2Y44ZG5U.jpg?auth=342359cc2a7f8feeda6a0782ffdbaee21c8ee871bcebb97c5e87ef1b43f2483f&width=650&height=488&quality=70&smart=true",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKnS_ibX0BsGFNRmBTv-kzYT4PmtCnD2eyjLxvUHNcQ&s",
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
    image: "https://cdn.shopify.com/s/files/1/1199/8502/files/persian-doll-face.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKfAKQ39jSv1ypjmMDRkgE4deI52IlsnVvri90v9rEQ&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMU98hycoqnv5N_MD7GS5zLv4ge3wO1ApM91m0Svnh7w&s",
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
    image: "https://cdn0.bioenciclopedia.com/es/posts/1/7/1/pez_payaso_171_orig.jpg",
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
  {
    name: "Mario antonio",
    age: 0, // 2022
    breed: "clownfish",
    image: "https://cdn0.bioenciclopedia.com/es/posts/1/7/1/pez_payaso_171_orig.jpg",
    species: "Fish",
    weight: 0.05,
    status: "stable",
    owner: {
      name: "santiago",
      document: "98765432",
      phone: "3105081589",
      email: "mari.Luci@gmail.com",
    },
  }
];

// Insert Cards
const petsDom = document.querySelector('#ark');

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  petsDom.innerHTML += `
    <div class="col-md-3">
      <div class="card h-100">
        <img src="${pet.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pet.name}</h5>
          <p class="card-text">Age: ${pet.age}</p>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer text-center">
          <a href="#" class="btn btn-primary w-75">Adopt</a>
        </div>
      </div>
    </div>`;
}

// Pet Registration
function registerPet(pets) {
  const name = prompt("Enter pet name");
  const birthDate = prompt("Enter birth date (YYYY-MM-DD)");
  const today = new Date();
  const birthYear = parseInt(birthDate.substring(0, 4));
  const birthMonth = parseInt(birthDate.substring(5, 7)) - 1;
  const birthDay = parseInt(birthDate.substring(8, 10));
  let age = today.getFullYear() - birthYear;
  if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
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

  const owner = {
    name: ownerName,
    document: ownerDocument,
    phone: ownerPhone,
    email: ownerEmail,
  };

  const newPet = {
    name,
    age,
    breed,
    species,
    weight: parseFloat(weight),
    status,
    owner,
  };

  pets.push(newPet);
  console.table(pets);
  return pets;
}

// List Pets
function listar() {
  console.groupCollapsed("pets");
  for (let i = 0; i < pets.length; i++) {
    console.table(pets[i]);
  }
  console.groupEnd(pets);

  console.groupCollapsed("owners");
  pets.forEach((pets) => {
    console.table(pets.owner);
  });
  console.groupEnd();

  console.error("Search for a pet by name");

  let search = prompt("Enter the pet name");
  if (!search.trim()) {
    console.log("Please enter a valid name.");
  } else {
    if (pets.some((pet) => pet.name === search)) {
      console.log(`The value "${search}" is in the array.`);
    } else {
      console.log(`The value "${search}" is not in the array.`);
    }
  }
}

// List Pets by Owner
function listarMascotasPorDueño() {
  let ownerName = prompt("Enter the owner's name");
  let petsOfOwner = pets.filter(
    (pet) => pet.owner.name.toLowerCase() === ownerName.toLowerCase()
  );
  if (petsOfOwner.length > 0) {
    petsOfOwner.forEach((pet) => {
      console.log(
        `Name: ${pet.name}, Species: ${pet.species}, Owner: ${pet.owner.name}`
      );
    });
  } else {
    console.log(`There are no pets for the owner named ${ownerName}`);
  }
}

// Update Pet
function updatePet(pets) {
  let petName = prompt("Enter the name of the pet you want to update");
  let pet = pets.find((p) => p.name.toLowerCase() === petName.toLowerCase());
  if (pet) {
    let newAge = prompt("Enter the new age of the pet");
    let newWeight = prompt("Enter the new weight of the pet");
    let newStatus = prompt("Enter the new status of the pet");
    pet.age = new Date(newAge);
    pet.weight = parseFloat(newWeight);
    pet.status = newStatus;
    console.log(`The pet ${petName} has been updated.`);
    console.log("Updated pets list:", pets);
  } else {
    console.log(`A pet with the name ${petName} was not found`);
  }
  return continuarOperacion(pets);
}

function deletePet(pets) {
  let petName = prompt("Enter the name of the pet you want to delete");
  let petIndex = pets.findIndex(
    (p) => p.name.toLowerCase() === petName.toLowerCase()
  );
  if (petIndex !== -1) {
    pets.splice(petIndex, 1);
    console.log(`The pet ${petName} has been deleted.`);
    console.log("Current pets list:", pets);
  } else {
    console.log(`A pet with the name ${petName} was not found`);
  }
  return continuarOperacion(pets);
}

function continuarOperacion(pets) {
  let continuar = prompt("¿Desea realizar otra operación? (si/no)").toLowerCase();
  if (continuar === 'si') {
    return menu(pets);
  } else {
    console.log("¡Gracias por usar nuestro sistema!");
    return pets;
  }
}

function menu(pets) {
  let option = prompt(
    "Enter an option: \n1. Add a new pet \n2. Update pet \n3. Delete pet \n4. List all pets \n5. List pets by owner"
  );

  switch (option) {
    case "1":
      return registerPet(pets);
    case "2":
      return updatePet(pets);
    case "3":
      return deletePet(pets);
    case "4":
      console.log("Current pets list:", pets);
      return continuarOperacion(pets);
    case "5":
      listarMascotasPorDueño(pets);
      return continuarOperacion(pets);
    default:
      console.log("Invalid option");
      return continuarOperacion(pets);
  }
}

//
menu(pets);

