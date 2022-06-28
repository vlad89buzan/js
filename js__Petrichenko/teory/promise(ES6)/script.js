console.log("zapros");

const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("podgotovka");
    const product = {
      name: "tv",
      price: 2000,
    };

    resolve(product);
  }, 2000);
});

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order";

        resolve(product);

      }, 2000);
    });
  })
  .then((data) => {
    data.modify = true;
    return data;
    
  })
  .then((data) => {
    
    console.log(data);
  }).catch(() => {
    
    console.log('mistake');
  }).finally(() => {
    
    console.log('finally');
  });
