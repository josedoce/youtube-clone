let search = document.getElementById('search');
let inputSearch = document.getElementById('input-search');

inputSearch.addEventListener('focus', function(){
  search.style.border = '1px solid #065fd4'
});

inputSearch.addEventListener('blur', function(){
  search.style.border = ''
});

