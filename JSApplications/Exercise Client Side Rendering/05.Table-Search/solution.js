import { html, render } from "./node_modules/lit-html/lit-html.js";
import { loadAllData } from "./src/service/dataService.js";

const root = document.querySelector("tbody");

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick(e) {
      e.preventDefault();
      const searchField = document.getElementById("searchField").value;
      searchedValue(searchField);
   }

   async function loadData() {
      const data = await loadAllData();
      const option = Object.values(data).map(op => dataTemplate(op));
      update(option);
   }

   function dataTemplate(data) {
      return html
         `<tr id="${data._id}">
         <td>${data.firstName} ${data.lastName}</td>
         <td>${data.email}</td>
         <td>${data.course}</td>
      </tr>`;
   }

   function update(data) {
      render(data, root);
   }
   loadData();
}

function searchedValue(search) {
   const rows = root.querySelectorAll('tr');
   rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.includes(search.toLowerCase())) {
         row.classList.add('select');
      } else {
         row.classList.remove('select');
      }
   });
}

solve();