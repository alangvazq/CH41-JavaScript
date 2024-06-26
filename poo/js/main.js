let divPersonas = document.getElementById("divPersonas");

class Person {
  name = "";
  email = "";
  age = 0;
  resume = "";
  id = 0;

  static total = 0;
  constructor(name, email, age, resume) {
    this.name = name.toUpperCase();
    this.email = email.toLowerCase();
    this.age = age < 18 ? 18 : age;
    this.resume = resume;
    Person.total++;
    this.id = Person.total;
  }

  printInfo(div) {
    div.insertAdjacentHTML(
      "beforeend",
      `<div class="card text-bg-info mb-3 mx-auto" style="max-width: 18rem;">
    <div class="card-header">${this.email}</div>
    <div class="card-body" id="cardBody_${this.id}">
      <h5 class="card-title">${this.name} - ${this.age}</h5>
      <p class="card-text">${this.resume}</p>
    </div>
  </div>`
    );
  }
  static printTotal(div) {
    div.insertAdjacentHTML(
      "beforeend",
      `<div class="alert alert-success" role="alert">
    Personas en total: <strong>${Person.total}<strong>
  </div>`
    );
  }
}

class Employee extends Person {
  department = "";
  salary = 0;

  constructor(name, email, age, resume, department, salary) {
    super(name, email, age, resume);
    this.department = department;
    this.salary = salary;
  }

  printInfo(div) {
    super.printInfo(div);
    let cardBody = document.getElementById(`cardBody_${this.id}`);
    cardBody.insertAdjacentHTML(
      "beforeend",
      `<p class="card-text">${this.department}</p>
      <p class="card-text text-end"><strong>${this.salary}</strong></p>`
    );
  }

  setEmail(email) {
    let re = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+");
    this.email = re.test(email) ? email : "correo@dominio.com";
  }
}

let empleados = new Array();

empleados.push(
  new Employee("Alan", "a@gmail.com", 22, "Java Developer FullStack", "TI", 150)
);
empleados.push(new Employee("Sebas", "v@gmail.com", 25, "Developer", "TI", 150));
empleados.push(
  new Employee("Paco", "ar@gmail.com", 27, "Developer Jr", "TI", 150)
);
empleados.push(
  new Employee("Luis", "l@gmail.com", 50, "Desarrollador", "RH", 10000)
);

empleados[1].setEmail("1234gmail.com");

empleados.forEach((empleado) => empleado.printInfo(divPersonas));

Person.printTotal(divPersonas);
