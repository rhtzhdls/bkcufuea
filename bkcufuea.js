  $(document).ready(function(){
    if(window.location.pathname === '/' || window.location.pathname === '/index.html'){
      var logo = document.querySelector('.logo');
      if(logo){
        logo.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxHmC-3dnZf6QV8V0wprFKq1KBBz1RdgbSOTs5UhE9uaqH16ylU4-UFU80RDiJPWj796EpvMKB__Xd3GtQd-rdPdLC_Obyn9s81nZeLCCRTHsHQIkxhpEoVyk2mmzVYfTSxiFpsggWtSEbeAGB8ZzbWUF-8bpe_peSy8EMHBIsdIfDARn_cNOwh22TZPJI/s16000/%ED%99%94%EC%9D%B4%ED%8A%B8%EB%A1%9C%EA%B3%A03.webp";
      }
      var vds = document.getElementById('vds');
      if(vds){
        vds.src = "https://vod.plaync.com/lineage2/update/crusader/bg_03.mp4";
        document.getElementById('vd').load();
      }
    }
  });
