function create(words) {
   const contentRef = document.getElementById('content');

   for (let word of words) {
      let divEl = document.createElement('div');

      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      divEl.addEventListener('click', onClick);

      divEl.appendChild(p);
      contentRef.appendChild(divEl);
   }

   function onClick(event) {
      let target = event.currentTarget;
      let child = target.children;
      let p = child[0];
      p.style.display = 'block';
   }
}