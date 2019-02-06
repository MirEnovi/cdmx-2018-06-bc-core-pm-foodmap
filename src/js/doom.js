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
  listLocals.innerHTML = '';
  for (let i = 0; i < locals.length; i++) {
    images.style.display = 'none';
    listLocals.innerHTML += `
            <tr><th scope="col"> ${locals[i].objectLocal.localNum}</th>
              <th scope="col"> ${locals[i].objectLocal.localName}</th>
              <th scope="col">
                <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#modal${locals[i].objectLocal.localID}">
                  Info
                </button>
              </th>
            </tr>
            <!--modal-->
            <div class="modal fade" id="modal${locals[i].objectLocal.localID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${locals[i].objectLocal.localName}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>${locals[i].objectLocal.localCategory}</p>
                    <p>${locals[i].objectLocal.localDirection}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Hacer Pedido</button>
                  </div>
                </div>
              </div>
            </div>
            `;
  }
};

