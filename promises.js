
// Creating a promise
var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
  function (resolve, reject) {
    if (isMomHappy) {
      var phone = {
        brand: 'Samsung',
        color: 'black'
      };
      resolve(phone); // fulfilled
    } else {
      var reason = new Error('mom is not happy');
      reject(reason); // reject
    }

  }
);

willIGetNewPhone
  .then(result => console.log(result))
  .catch(err => console.log(err.message));
