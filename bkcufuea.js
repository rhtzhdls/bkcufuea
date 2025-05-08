  $(document).ready(function(){
    if(window.location.pathname === '/' || window.location.pathname === '/index.html'){
      var logo = document.querySelector('.logo');
      if(logo){
        logo.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEsfYFUxh03ABi4k06e3S3B5HC30q9RcUMdrGvVF68cJrZZ8210Ewn4mfWhz09tnfpiFlIaCJXXPb9aLgCZhpH7XaDUqJheqHUqn5ggCGRn9TL_VdoRHVz_rVX2N73oM2GClGlSA5vsG_VubETpQ4vUC1fyQ56XSDKLluWx5csMt6mu6hACeBtklICqZeI/s16000/%ED%99%94%EC%9D%B4%ED%8A%B8%EB%A1%9C%EA%B3%A03.webp";
      }
      var vds = document.getElementById('vds');
      if(vds){
        vds.src = "https://vod.plaync.com/lineage2/update/crusader/bg_03.mp4";
        document.getElementById('vd').load();
      }
    }
  });
