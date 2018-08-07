let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=';
let lat = 19.43;
let lng = -99.13;
// let queryS = 'comida%20mexicana';
let queryS = 'comida';


let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS +
  '&intent=browse&radius=2000&limit=50&client_id=QSZ45N3E21PNFK2QJEP0YW4TVQDSNSE5EOZHUYEJFIDYUAAK&client_secret=00AT2EFNGN1YJK4HEGCLGFITRZHHDXNTTIVVXNVZSHOFLNVW';

window.realoadApi = () => {
  fetch(url)
    .then(response => response.json())
    .then((res) => {
      const mexFood = res;
      const locals = getMexFood(mexFood);
      filterLocal(locals, search);
    });
  // .catch(error => {
  //   console.log(error);
  // });
};

realoadApi();
let arrayLocal = [];
let objectLocal = {};
let localFood;
let localName;
let localDirection;
let localCategory;
let localNum = 0;

// function que itera locales
window.getMexFood = (mexFood) => {
  localFood = mexFood.response.venues;
  //   console.log(localFood);
  for (let i = 0; i < localFood.length; i++) {
    localName = localFood[i].name;
    if (localFood[i].location.address) {
      localDirection = `Estamos en ${localFood[i].location.address} en ${localFood[i].location.country}.`;
    } else {
      localDirection = `En la zona centro de la ciudad, en ${localFood[i].location.country}`;
    }
    localCategory = localFood[i].categories[0].name;
    localNum++;
    objectLocal = {
      localNum,
      localName,
      localDirection,
      localCategory
    };
    arrayLocal.push({
      objectLocal
    });
  };
  //   console.log(arrayLocal);

  return arrayLocal;
};

const search = 'mexicana'; // document.getElementById('search');

// window.filterLocal = (arrayLocal, search) => {
// //   let newLocal = arrayLocal.filter(function (item) {
//     // let localSearch = item.objectLocal.localCategory;    
//     for (let i = 0; i < arrayLocal.length; i++) {
//         let localSearch = arrayLocal[i].objectLocal.localCategory;
//     //   console.log(localSearch);
//       let newLocal = arrayLocal.filter(arrayLocal => arrayLocal[i].objectLocal.localCategory == search);
//       console.log(newLocal);
      
//       // localSearch[i]
//     }
//     // if (localSearch == search) {
//     //     swal();
//     // }
// };
