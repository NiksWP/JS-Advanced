function create(words) {
   const contentElement = document.getElementById('content');
   createAndAppendDivElement(contentElement);

   function createAndAppendDivElement(root){
      for (let i = 0; i < 4; i++) {
         const divElement = document.createElement('div');
         const pEl = document.createElement('p');

         pEl.textContent = words[i];
         pEl.style.display = 'none';
         divElement.appendChild(pEl)
         ;
         divElement.addEventListener('click', onClick);
         root.appendChild(divElement);
      }
   }

   function onClick(event){
      const target = event.currentTarget;
      const children = target.children;
      const paragraph = children[0];
      const currentStyle = paragraph.style.display;
      paragraph.style.display = currentStyle === 'block' ? 'none' : 'block';
   }
}