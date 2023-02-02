var listaNomeFilmesFavoritos = ['The Godfather','Interstellar', 'The Lord of the Rings', 'The Skeleton Key', 'Mulan', 'Rent', 'Gladiator', 'Indiana Jones', 'The Silence of the Lambs', 'Scent of a woman'];
var listaFilmesFavoritos = ['https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg','https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg', 'https://m.media-amazon.com/images/M/MV5BM2YzNTlhZWYtNDQ2Ny00OTI0LWI0MzMtMWJkZTQ1MGVlMGVhXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg', 'https://m.media-amazon.com/images/M/MV5BODkxNGQ1NWYtNzg0Ny00Yjg3LThmZTItMjE2YjhmZTQ0ODY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg', 'https://images.moviesanywhere.com/9c8500540f82b4dacd8e52f50094c4ac/a2f1b7c0-4fa9-479b-9c29-533198ebfded.jpg', 'https://m.media-amazon.com/images/I/61O9+6+NxYL.jpg', 'https://cominsitu.files.wordpress.com/2018/02/indiana-jones-and-the-temple-of-doom-poster-5.jpg', 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', 'https://blimey.pro/wp-content/uploads/2021/12/Scent-of-a-Woman-poster.jpg'];
var listaTrailersFilmesFavoritos = ['https://www.youtube.com/watch?v=UaVTIH8mujA','https://www.youtube.com/watch?v=hHBsKHVLAYc','https://www.youtube.com/watch?v=V75dMMIW2B4', 'https://www.youtube.com/watch?v=nPegIryJ5DM', 'https://www.youtube.com/watch?v=WQ1ltXlGIFo', 'https://www.youtube.com/watch?v=KGciEYSshrQ', 'https://www.youtube.com/watch?v=P5ieIbInFpg', 'https://www.youtube.com/watch?v=WBdyLyijZhU', 'https://www.youtube.com/watch?v=W6Mm8Sbe__o', 'https://www.youtube.com/watch?v=F2zTd_YwTvo'];

var listaInicial = document.getElementById('listaFilmes')
for(i=0; i < listaFilmesFavoritos.length ; i++){
    listaInicial.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaNomeFilmesFavoritos[i]}</a>`;
}  


function adicionarFilme(){
  var nomeFilmeFavorito = document.getElementById('nomefilme').value;
  var filmeFavorito = document.getElementById('filme').value;
  var trailerFilmeFavorito = document.getElementById('trailer').value;
  
    if((filmeFavorito.endsWith('jpg') ) || (filmeFavorito.endsWith('jpeg') ) || (filmeFavorito.endsWith('png') ) || (filmeFavorito.endsWith('svg') )){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaNomeFilmesFavoritos.push(nomeFilmeFavorito)
      listaFilmesFavoritos.push(filmeFavorito);
      listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
      
      limpaCampos();
      recarregarFilmes();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
      limpaCampos();
      
    }
  }

function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(i=0; i < listaFilmesFavoritos.length ; i++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaNomeFilmesFavoritos[i]}</a>`;
  }
}

function limpaCampos(){
  document.getElementById('nomefilme').value = '';
  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
}

function removerFilme(){
    var nomeFilme = document.getElementById('nomefilme').value;
    var posicao = listaNomeFilmesFavoritos.indexOf(nomeFilme)
    var elementoListaFilmes = document.getElementById('listaFilmes');
    if (posicao == -1) {
      alert("O filme não foi encontrato");
    } else {
      listaNomeFilmesFavoritos.splice(posicao, 1)
      listaFilmesFavoritos.splice(posicao, 1)
      listaTrailersFilmesFavoritos.splice(posicao, 1)
      document.getElementById('nomefilme').value = "";

      elementoListaFilmes.innerHTML = "";
      for(i=0; i < listaFilmesFavoritos.length ; i++){
      elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaNomeFilmesFavoritos[i]}</a>`;
    }
}
}