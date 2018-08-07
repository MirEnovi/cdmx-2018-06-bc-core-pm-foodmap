// funcion de filtro
window.filter = (search) => {
  let stringSearch = '';
  for (let i = 0; i < search.length; i++) {
    let letter = search[i];
    if (letter === ' ') {
      letter = '%20';
    }
    stringSearch += letter;
  }
  getApi(stringSearch);
  //   console.log(stringSearch);
  return stringSearch;
};

window.getApi = (query) => {
  let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=';
  let lat = 19.43;
  let lng = -99.13;
  // let queryS = 'comida%20mexicana';
  let queryS = query;

  let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS +
    '&intent=browse&radius=2000&limit=30&client_id=ZP4OZIAYLCQC4OS1AGSFKASVXWYXCBJ4TXQGQ42YME4YV2DJ&client_secret=5JAKQV2CNB1NF1CJE0AZYKE5XIC0HAZIPBIA5N1AGQSB3B3N';
  realoadApi(url);
  return url;
};

window.realoadApi = (url) => {
  // console.log(apiUrl);
  fetch(url)
    .then(response => response.json())
    .then((res) => {
      const mexFood = res;
      getMexFood(mexFood);
      const locals = getMexFood(mexFood);
      drawnList(locals);
    })
    .catch(error => {
      console.log(error);
      alert('tu busqueda no arrojo resultados, intenta otra palabra');
    });
};


// function que itera locales
window.getMexFood = (mexFood) => {
  console.log(mexFood);
  let arrayLocal = [];
  let objectLocal = {};
  let localFood;
  let localName;
  let localDirection;
  let localCategory;
  let localNum = 0;
  localFood = mexFood.response.venues;
  for (let i = 0; i < localFood.length; i++) {
    localName = localFood[i].name;
    if (localFood[i].location.address) {
      localDirection = `Estamos en ${localFood[i].location.address} en ${localFood[i].location.country}.`;
    } else {
      localDirection = `En la zona centro de la ciudad, en ${localFood[i].location.country}`;
    }
    console.log(localFood[i].categories[0].name);

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
    // console.log(arrayLocal);
  };
  return arrayLocal;
};
