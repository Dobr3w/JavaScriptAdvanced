function search() {
   let matches = 0;
   let towns = Array.from(document.querySelectorAll(`li`))
   let searched = document.getElementById(`searchText`).value
   for (let el of towns) {
      if (el.textContent.includes(searched)) {

         el.style.textDecoration = `underline`
         el.style.fontWeight = `bold`
         matches++
      }

   }
   document.getElementById(`result`).textContent = `${matches} matches found`
}