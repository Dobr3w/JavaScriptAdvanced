function loadRepos() {
   let XmlHttpRequest = new XMLHttpRequest();
   let url = "https://api.github.com/users/testnakov/repos";

   XmlHttpRequest.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
         document.getElementById('res').innerHTML = this.responseText;
      }
   };

   XmlHttpRequest.open("GET",url,true);
   XmlHttpRequest.send();
}