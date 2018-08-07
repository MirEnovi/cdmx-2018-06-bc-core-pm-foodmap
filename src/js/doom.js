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
  // console.log(locals);
  for (let i = 0; i < locals.length; i++) {
    images.style.display = 'none';
    listLocals.innerHTML += `
            <tr><th scope="col"> ${locals[i].objectLocal.localNum}</th>
                <th scope="col"> ${locals[i].objectLocal.localName}</th>
                <th scope="col">
                  <button class="type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="button-info${locals[i].objectLocal.localNum}">
                    Info
                  </button>
                </th>
            </tr>
            `;
  }
};

const btnInfo = document.getElementById('button-info');
const modalInfo = document.getElementById('modal-info');

// window.drawModalInfo = () => {
//   modalInfo.innerHTML = `
//   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//   `;
// };

// btnInfo.addEventListener('click', drawModalInfo);
