function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchFieldRef = document.getElementById('searchField');
   const tableRows = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {
      let searchText = searchFieldRef.value;

      for (let tableRow of tableRows) {
         tableRow.classList.remove("select");
         let tableData = Array.from(tableRow.querySelectorAll("td"));
         for (let data of tableData) {
            if (data.textContent.includes(searchText)) {
               tableRow.classList.add("select");
            }
         }
      }
   }
}