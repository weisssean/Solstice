import axios from 'axios';

axios.defaults.baseURL = window.location.origin;
// if (process.env.NODE_ENV === "production") {
//   axios.defaults.baseURL = 'https://' + window.location.hostname;
// } else {
//   axios.defaults.baseURL = 'http://localhost:3004';
// }

class SolsticeApiClass {
  constructor() {
    //do stuff here
  }
}

SolsticeApiClass.prototype = {
  getUser() {
    const url = process.env.NODE_ENV === "production"?"/solstice/user.php":"/user";
    return new Promise((resolve, reject) => {
      axios.get(url, {
        // params: {
        //   tab: 1
        // }
      })
        .then(function (response) {

          resolve(Object.assign({}, response.data[0]));
        })
        .catch(function (error) {
          reject(`User not found!`);
        });
    });
  },
  getAllBills() {
    const url = process.env.NODE_ENV === "production"?"/solstice/bills.php":"/data";
    return new Promise((resolve, reject) => {
      // console.log("uid", this.uId);
      axios.get(url, {
        // params: {
        //   tab: 2
        // }
      })
        .then(function (response) {

          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(`Fetch bills error`);
        });
    });
  }
};


const SolsticeApi = new SolsticeApiClass();

export default SolsticeApi;
