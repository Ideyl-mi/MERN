const printHello = () => {
  console.log("Hello");
  printBye();
};

const printBye = () => {
  console.log("Bye");
};

const onClick = () => {
  sayhello();
};

const sayhello = () => {
  console.log(
    "Hi! Namaste, I am from Daraz, is there any inquiry regarding us? Please feel free to ask. Contact: gogogo@gmail.com",
  );
};

onClick(sayhello());

const sayHello = (sayGoodNight) => {
  console.log("Hello");
  sayGoodNight();
};

const saySomething = () => {
  console.log("Goodnight broski");
};

sayHello(saySomething);
