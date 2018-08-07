const search = document.getElementById('search');
const buttonFilter = document.getElementById('button-filter');
const listLocals = document.getElementById('list_locals');
const images = document.getElementById('images');

const clickFilter = () => {
  const filterRun = window.filter(
    search.value
  );
};
buttonFilter.addEventListener('click', clickFilter);

window.drawnList = (locals) => {
  console.log(locals);
  
  for (let i = 0; i < locals.length; i++) {
    images.style.display = 'none';
    listLocals.innerHTML += `
            <tr><th scope="col"> ${locals[i].objectLocal.localNum}</th>
                <th scope="col"> ${locals[i].objectLocal.localName}</th>
                <th scope="col">
                  <button class="btn btn-outline-secondary" type="button" id="button-filter">
                    Info
                  </button>
                </th>
            </tr>
            `;
  }
};

