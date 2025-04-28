const uniqueNumbers = [];

const generateUniqueNumbers = () => {
  while (uniqueNumbers.length < 6) {
    //mientras se cumpla esta condición, el bucle se ejecuta
    //numeros entre 0-10, unicos

    const number = Math.floor(Math.random() * 11);

    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }
  //   const newArray = [...uniqueNumbers, ...uniqueNumbers];
  uniqueNumbers.push(...uniqueNumbers);
  uniqueNumbers.sort(() => Math.random() - 0.5);

  console.log(uniqueNumbers);
};

generateUniqueNumbers();
