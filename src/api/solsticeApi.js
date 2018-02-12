import axios from 'axios';

const billsJson = [
  {
    "year": 2017,
    "month": 4,
    "kwh": 1000,
    "bill": 124.04,
    "savings": 12.99
  },
  {
    "year": 2017,
    "month": 3,
    "kwh": 730,
    "bill": 94.14,
    "savings": 2.99
  },
  {
    "year": 2017,
    "month": 2,
    "kwh": 500,
    "bill": 70.04,
    "savings": 1.32
  },
  {
    "year": 2017,
    "month": 1,
    "kwh": 750,
    "bill": 73.29,
    "savings": 3.49
  },
  {
    "year": 2016,
    "month": 12,
    "kwh": 1500,
    "bill": 144.04,
    "savings": 19.81
  }
];
const userJson = {
  "uname": "Sean Weiss",
  "userId": "1234",
  "email": "weisssean@gmail.com"
};


if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = 'https://' + window.location.hostname;
} else {
  axios.defaults.baseURL = 'http://localhost:3004';
}

class SolsticeApiClass {
  constructor() {
    //do stuff here
  }
}

SolsticeApiClass.prototype = {
  getUser() {
    const url = process.env.NODE_ENV === "production" ? "/solstice/solstice.php" : "/user-result";
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: {
          tab: 1
        }
      })
        .then(function (response) {

          resolve(Object.assign({}, userJson));
        })
        .catch(function (error) {
          reject(`User not found!`);
        });
    });
  },
  getAllBills() {
    const url = process.env.NODE_ENV === "production" ? "/solstice/solstice.php" : "/bills-result";

    return new Promise((resolve, reject) => {
      // console.log("uid", this.uId);
      axios.get(url, {
        params: {
          tab: 2
        }
      })
        .then(function (response) {

          resolve(Object.assign([], billsJson));
        })
        .catch(function (error) {
          reject(`Fetch bills error`);
        });
    });
  }
};


const SolsticeApi = new SolsticeApiClass();

export default SolsticeApi;
