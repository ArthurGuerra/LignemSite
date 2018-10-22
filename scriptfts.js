var fonts = new Object();
let selectStt = document.querySelector('#slcst');
let fontDiv = document.querySelector('#fontLoc');
document.querySelector('#fontPage').addEventListener('click', function() {
  if(selectStt.value === '')
  alert('Escolha um estado primeiro!');
  if(selectStt.value === 'AC'){
    fonts.font0 = 'https://www.wwf.org.br/natureza_brasileira/questoes_ambientais/biomas/bioma_caatinga/?56923/Acre-Amazonas-e-Rondonia-vao-trabalhar-juntos-na-implementacao-do-Codigo-Florestal';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Geografia_do_Acre#Vegeta%C3%A7%C3%A3o';
    fonts.font2 = 'http://portalamazonia.com/noticias/governo-do-acre-atua-na-criacao-definitiva-da-floresta-estadual-do-afluente';
    fonts.font3 = 'http://ambienteacreano.blogspot.com/2011/04/passado-presente-e-futuro-do-cultivo-de.html';
    fonts.font4 = 'https://www.significados.com.br/curica/';
    fonts.font5 = 'https://canaldopet.ig.com.br/guia-bichos/passaros/tucano-toco/57a24d19c144e671ccdd91cd.html';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5;
}
  if(selectStt.value === 'AL'){
    fonts.font0 = 'https://www.grupoescolar.com/pesquisa/fauna-e-flora-de-alagoas.html';
    fonts.font1 = 'https://argosfoto.photoshelter.com/image/I0000bsYxQfo1RXA';
    fonts.font2 = 'https://www.flickr.com/photos/ana_cotta/2521898117';
    fonts.font3 = 'https://www.sosma.org.br/blog/projeto-identifica-aves-centro-de-experimentos-florestais/anu-preto-crotophaga-ani-01/';
    fonts.font4 = 'https://www.oeco.org.br/colunas/colunistas-convidados/29222-mutum-de-alagoas-extinto-na-natureza-mas-com-caminho-de-volta/';
    fonts.font5 = 'https://www.embrapa.br/semiarido/busca-de-imagens/-/midia/1457001/umbuzeiro';
    fonts.font6 = 'https://www.youtube.com/watch?v=aMEQJOnwFHI';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
}
  if(selectStt.value === 'AP'){
    fonts.font0 = 'http://www.brasil-turismo.com/amapa.htm';
    fonts.font1 = 'https://tvlagartixa.blogspot.com/2017/02/ave-da-semana-flamingo.html';
    fonts.font2 = 'https://amazonianarede.com.br/pesquisa-e-monitoramento-garantem-preservacao-de-gaviao-real-a-mais-poderosa-e-predadora-das-aves/';
    fonts.font3 = 'http://casteloroger.blogspot.com/2011/04/o-amapazeiro.html';
    fonts.font4 = 'http://br.viarural.com/servicos/turismo/florestas-estaduais/floresta-estadual-do-amapa/default.htm';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4;
}
  if(selectStt.value === 'AM'){
    fonts.font0 = 'http://www.brasil-turismo.com/amazonas.htm';
    fonts.font1 = 'https://www.acritica.com/channels/cotidiano/news/rede-de-observadores-criada-ha-cinco-anos-reune-pessoas-que-observam-passaros';
    fonts.font2 = 'https://www.suapesquisa.com/fauna_flora/amazonas.htm';
    fonts.font3 = 'http://meioambiente.culturamix.com/natureza/o-clima-da-amazonia';
    fonts.font4 = 'https://estudandoabiologia.wordpress.com/2012/11/06/onca-pintada/';
    fonts.font5 = 'https://www.youtube.com/watch?v=5b4zeWOyOY4';
    fonts.font6 = 'http://meioambiente.culturamix.com/ecologia/recursos-naturais-da-amazonia';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
}
  if(selectStt.value === 'BA'){
    fonts.font0 = 'http://meioambiente.culturamix.com/natureza/vegetacao-da-bahia';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Macuco';
    fonts.font2 = 'https://www.todabahia.com.br/curaca-tera-centro-de-reproducao-de-ararinhas-azuis-ate-2019/';
    fonts.font3 = 'https://www.flickr.com/photos/jeilsonandrade/23653389545';
    fonts.font4 = 'https://pt.wikipedia.org/wiki/Adamantinia';
    fonts.font5 = 'http://sertaobaiano.com.br/noticia/mpf-planeja-acoes-coordenadas-em-defesa-do-rio-sao-francisco';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5;
}
  if(selectStt.value === 'CE'){
    fonts.font0 = 'http://meioambiente.culturamix.com/natureza/a-vegetacao-do-ceara-terra-da-caatinga';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Soldadinho-do-araripe';
    fonts.font2 = 'http://www.meioambiente.ufrn.br/?p=36452';
    fonts.font3 = 'https://escola.britannica.com.br/levels/fundamental/assembly/view/217253';
    fonts.font4 = 'https://pauloiran.blogspot.com/2017/09/com-49-dos-votos-carnauba-e-eleita.html';
    fonts.font5 = 'https://www.fazfacil.com.br/jardim/cacto-cabeca-de-frade/';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5;
}
  if(selectStt.value === 'ES'){
    fonts.font0 = 'http://g1.globo.com/espirito-santo/noticia/2016/11/parque-estadual-pedra-azul-volta-receber-visitantes-no-es.html';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Geografia_do_Esp%C3%ADrito_Santo#Hidrografia';
    fonts.font2 = 'https://pt.wikipedia.org/wiki/Esp%C3%ADrito_Santo_(estado)';
    fonts.font3 = 'https://domtotal.com/noticias/detalhes.php?notId=765102';
    fonts.font4 = 'https://www.achetudoeregiao.com.br/animais/ourico_preto.htm';
    fonts.font5 = 'http://ericajardinagem.blogspot.com/2015/01/bromelia-em-forma-de-vaso-porto-seguro.html';
    fonts.font6 = 'http://basilio.fundaj.gov.br/pesquisaescolar/index.php?option=com_content&view=article&id=393:jequitiba&catid=45:letra-j';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
}
  if(selectStt.value === 'GO'){
    fonts.font0 = 'https://brasilescola.uol.com.br/brasil/aspectos-naturais-goias.htm';
    fonts.font1 = 'http://www.avesderapinabrasil.com/sarcoramphus_papa.htm';
    fonts.font2 = 'http://animais.culturamix.com/informacoes/aves/aguia-cinzenta-harpyhaliaetus-coronatus-especie-ameacada';
    fonts.font3 = 'http://curiosidadesvegetais.blogspot.com/2015/02/voce-sabia-que-mangabeira.html';
    fonts.font4 = 'https://www.beneficiosdasplantas.com.br/jequitiba/';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4;
}
  if(selectStt.value === 'MA'){
    fonts.font0 = 'http://meioambiente.culturamix.com/ecologia/a-riqueza-da-vegetacao-do-maranhao';
    fonts.font1 = 'http://www.melhoresdestinos.com.br/lencois-maranhenses-dicas-viagem.html';
    fonts.font2 = 'https://aquiondeeumoro.wordpress.com/2011/10/06/codigo-florestal-ou-codigo-da-biodiversidade/pifeiros-dia-de-domingo-em-01-outubro-2011-por-terezinha-souto-271-2/';
    fonts.font3 = 'https://pt.wikipedia.org/wiki/Sabi%C3%A1-da-praia';
    fonts.font4 = 'http://animais.culturamix.com/informacoes/aves/marreca-de-asa-azul';
    fonts.font5 = 'https://www.embrapa.br/busca-de-projetos/-/projeto/210746/integracao-de-atividades-da-pequena-e-media-exploracao-do-cajueiro-no-nordeste-do-brasil';
    fonts.font6 = 'https://pt.wikipedia.org/wiki/Tucum';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
}
  if(selectStt.value === 'MT'){
    fonts.font0 = 'https://hotelmt.com.br/blog/descubra-as-7-cachoeiras-do-mato-grosso-mais-bonitas/';
    fonts.font1 = 'https://www.estadosecapitaisdobrasil.com/estado/mato-grosso/attachment/cachoeira-veu-de-noiva-parque-nacional-chapada-dos-guimaraes-mato-grosso/';
    fonts.font2 = 'https://brasilescola.uol.com.br/brasil/aspectos-naturais-mato-grosso-sul.htm';
    fonts.font3 = 'http://www.matogrossonamidia.com.br/do-pantanal-ao-araguaia-mato-grosso-oferece-opcoes-de-turismo-em-todas-as-regioes/tuiuiu-pantanal/';
    fonts.font4 = 'http://www.rbpantanal.org.br/news/v/23/a-flora-pantaneira';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4;
}
  if(selectStt.value === 'MS'){
    fonts.font0 = 'https://www.resumoescolar.com.br/geografia-do-brasil/geografia-do-mato-grosso-do-sul/';
    fonts.font1 = 'http://animais.culturamix.com/informacoes/aves/tuiuiu-ou-jaburu-o-simbolo-do-pantanal';
    fonts.font2 = 'http://g1.globo.com/natureza/noticia/2013/10/cientistas-descobrem-que-tocas-de-tatu-canastra-ajudam-outras-especies.html';
    fonts.font3 = 'https://www.oeco.org.br/noticias/28763-estudo-revela-repertorio-vocal-das-ariranhas/';
    fonts.font4 = 'http://espacodamusica11.blogspot.com/2011/05/wekeend.html';
    fonts.font5 = 'https://www.natue.com.br/natuelife/tudo-sobre-aroeira-propriedades-e-beneficios-para-a-saude.html';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5;
}
  if(selectStt.value === 'MG'){
    fonts.font0 = 'https://pt.wikipedia.org/wiki/Ficheiro:Tamandu%C3%A1-bandeira_com_filhote_em_pastagem_-_cropped.jpg';
    fonts.font1 = 'http://www.naturezaterra.com.br/brasil-MG.htm';
    fonts.font2 = 'http://meioambiente.culturamix.com/ecologia/fauna/fauna-da-mata-atlantica';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2;
}
  if(selectStt.value === 'PA'){
    fonts.font0 = 'http://anapuemfoco.blogspot.com/2013/07/vegetacao-natural-cobre-77-do-estado-do.html';
    fonts.font1 = 'https://escola.britannica.com.br/levels/fundamental/article/Par%C3%A1/483433';
    fonts.font2 = 'https://www.tudosobreplantas.com.br/asp/plantas/ficha.asp?id_planta=371191';
    fonts.font3 = 'https://www.pensamentoverde.com.br/meio-ambiente/mogno-brasileiro-conheca-os-riscos-que-colocam-arvore-caminho-da-extincao/';
    fonts.font4 = 'https://www.embrapa.br/busca-de-imagens/-/midia/3630001/acaizeiro-em-producao';
    fonts.font5 = 'http://www.iguiecologia.com/o-maior-espetaculo-da-terra-esta-chegando/preguic%CC%A7a-de-tre%CC%82s-dedos';
    fonts.font6 = 'http://www.orm.com.br/noticias/para/MjU2OTM=/Tartaruga-da-amazonia-e-resgatada-no-sul-do-Para';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
}
  if(selectStt.value === 'PB'){
    fonts.font0 = 'http://paisagensdaparaiba.blogspot.com/2010/12/sao-joao-do-cariri-cariri-oriental-pb.html';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Para%C3%ADba#Meio_ambiente';
    fonts.font2 = 'https://pt.wikipedia.org/wiki/Jabuti-piranga';
    fonts.font3 = 'https://casadospassaros.net/galo-de-campina/';
    fonts.font4 = 'http://fotosdenatureza.blogspot.com/2008/04/paraba.html';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4;
}
  if(selectStt.value === 'PR'){
    fonts.font0 = 'http://www.guiageo-parana.com/geografia.htm';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Clima_do_Paran%C3%A1';
    fonts.font2 = 'http://universodanatureza.blogspot.com/2015/02/gralha-azul.html';
    fonts.font3 = 'https://www.gazetadopovo.com.br/vida-e-cidadania/verao/bichos-do-parana-a-solta-no-litoral-8v1q41pdh7tyyva7slmwfqxo0/';
    fonts.font4 = 'https://www.infoescola.com/mamiferos/jaguatirica/';
    fonts.font5 = 'https://www.embrapa.br/busca-de-imagens/-/midia/672002/imbuia';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5;
}
  if(selectStt.value === 'PE'){
    fonts.font0 = 'http://br.geoview.info/vegetacao_do_agreste_pernambucanoregiao_de_sao_caetanope,1686679p';
    fonts.font1 = 'https://casadospassaros.net/murucutu/';
    fonts.font2 = 'http://faunaefloradorn.blogspot.com/2010/10/pintor-verdadeirotangara-fastuosa-fauna.html';
    fonts.font3 = 'https://www.csfotojornalismo.net/%C3%81rvores-e-Plantas';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3;
}
  if(selectStt.value === 'PI'){
    fonts.font0 = 'http://geotufao.blogspot.com/2012/09/vegetacao-do-piaui.html';
    fonts.font1 = 'https://www.infoescola.com/aves/ema/';
    fonts.font2 = 'https://www.achetudoeregiao.com.br/animais/andorinha.htm';
    fonts.font3 = 'https://www.youtube.com/watch?v=NptCEAnKXy8';
    fonts.font4 = 'https://commons.wikimedia.org/wiki/File:Moc%C3%B3_(Kerodon_rupestris)_no_Parque_Nacional_da_Serra_da_Capivara.jpg';
    fonts.font5 = 'https://www.youtube.com/watch?v=xlj7OtJtOoc';
    fonts.font6 = 'https://suburbanodigital.blogspot.com/2017/07/carnauba-arvore-da-vida-da-prosperidade-e-da-beleza.html';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
}
  if(selectStt.value === 'RJ'){
    fonts.font0 = 'http://axelgrael.blogspot.com/2013/08/inventario-florestal-do-rio-de-janeiro.html';
    fonts.font1 = 'https://pt.wikibooks.org/wiki/Estado_do_Rio_de_Janeiro/Natureza';
    fonts.font2 = 'https://trilhatranscarioca.com.br/fauna-e-flora/';
    fonts.font3 = 'https://trilhatranscarioca.com.br/fauna-e-flora/';
    fonts.font4 = 'http://www.riodejaneiroaqui.com/pt/natureza-no-rio-de-janeiro.html';
    fonts.font5 = 'http://www.a12.com/radio/noticias/conheca-as-curiosidades-sobre-o-rio-onde-foi-encontrada-a-imagem-de-nossa-senhora-aparecida';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5;
}
  if(selectStt.value === 'RN'){
    fonts.font0 = 'https://www.aslembrancinhasdecasamento.com/rio-grande-do-norte-lugares-para-lua-de-mel/';
    fonts.font1 = 'http://www.omossoroense.com.br/semarh-inicia-monitoramento-das-nascentes-do-rio-apodi-mossoro/';
    fonts.font2 = 'https://escola.britannica.com.br/levels/fundamental/article/Rio-Grande-do-Norte/483516';
    fonts.font3 = 'https://pt.m.wikipedia.org/wiki/Ficheiro:Carnauba.jpg';
    fonts.font4 = 'http://g1.globo.com/sp/campinas-regiao/terra-da-gente/flora/noticia/2015/01/aroeira-vermelha.html';
    fonts.font5 = 'https://pt.wikipedia.org/wiki/Tatupeba';
    fonts.font6 = 'https://sobrevivencialismo.com/2011/09/24/fauna-brasileira-juriti/'
    fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
  }
  if(selectStt.value === 'RS'){
    fonts.font0 = 'https://projetoriograndetche.weebly.com/a-vegetaccedilatildeo-no-rs.html';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Geografia_do_Rio_Grande_do_Sul#Clima';
    fonts.font2 = 'https://pt.wikipedia.org/wiki/Geografia_do_Rio_Grande_do_Sul#Hidrografia';
    fonts.font3 = 'https://casadospassaros.net/gralha-azul/';
    fonts.font4 = 'http://conexaoplaneta.com.br/blog/descoberta-nova-especie-de-peixe-nos-pampas-gauchos/';
    fonts.font5 = 'http://www.ciflorestas.com.br/conteudo.php?tit=projeto_vai_mapear_florestas_gauchas_&id=2595';
    fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5;
  }
  if(selectStt.value === 'RO'){
    fonts.font0 = 'https://maisro.com.br/parque-nacional-de-pacaas-novos-e-barreira-ao-desmatamento-em-rondonia/';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Rond%C3%B4nia#Clima,_hidrografia_e_vegeta%C3%A7%C3%A3o';
    fonts.font2 = 'http://www.apocalipsenews.com/brasil/rondonia-floresta-privatizada-esconde-o-niobio-o-mineral-mais-estrategico-e-raro-no-mundo/';
    fonts.font3 = 'https://escola.britannica.com.br/levels/fundamental/article/Rond%C3%B4nia/483527';
    fonts.font4 = 'https://www.agron.com.br/publicacoes/noticias/ecologia-agro-sustentavel/2015/06/22/044511/cumaru-verdadeiro.html';
    fonts.font5 = 'http://ruralcentro.uol.com.br/noticias/quem-sabe-responde-pacu-manteiga-em-acudes-56960';
    fonts.font6 = 'https://www.infoescola.com/aves/arara-azul/';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
}
  if(selectStt.value === 'RR'){
    fonts.font0 = 'http://www.hike-venezuela.com/pt/tour-roraima-6d.html';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Geografia_de_Roraima#Clima';
    fonts.font2 = 'https://www.tudosobreplantas.com.br/asp/plantas/ficha.asp?id_planta=14721';
    fonts.font3 = 'https://pt.wikipedia.org/wiki/Jequitib%C3%A1-rosa';
    fonts.font4 = 'https://pt.wikipedia.org/wiki/Cutia';
    fonts.font5 = 'https://pt.wikipedia.org/wiki/Podocnemis_unifilis';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5;
}
  if(selectStt.value === 'SC'){
    fonts.font0 = 'http://geoesporte.blogspot.com/2014/09/aspectos-fisicos-de-santa-catarina-o.html';
    fonts.font1 = 'http://faunaeflora.terradagente.g1.globo.com/fauna/aves/NOT,0,0,1223537,Araponga.aspx';
    fonts.font2 = 'http://www.faunacps.cnpm.embrapa.br/mamifero/onca_p.html';
    fonts.font3 = 'http://www.avescatarinenses.com.br/animais/2-fauna/595-macaco-prego/4045';
    fonts.font4 = 'https://www.tripadvisor.com.br/LocationPhotoDirectLink-g303441-d1493739-i209783357-Jardim_Botanico_de_Curitiba-Curitiba_State_of_Parana.html';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4;
}
  if(selectStt.value === 'SP'){
    fonts.font0 = 'http://www.cidadedesaopaulo.com/ecoturismo/bemvindo/fauna-e-flora/';
    fonts.font1 = 'https://www.suapesquisa.com/fauna_flora/estado_sao_paulo.htm';
    fonts.font2 = 'https://curiosidadeanimalbrasil.wordpress.com/tag/muriqui-do-sul/';
    fonts.font3 = 'http://qplantaeessa.blogspot.com/2016/04/flor-de-sao-joao-ou-cipo-de-sao-joao.html#.W5p7KXVKjCI';
    fonts.font4 = 'http://regbor.blogspot.com/2010/07/o-ipe-beira-da-estrada.html';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4;
}
  if(selectStt.value === 'SE'){
    fonts.font0 = 'https://desvendesergipe.wordpress.com/2016/11/01/principais-aspectos-geograficos-de-sergipe/';
    fonts.font1 = 'https://www.temporadalivre.com/blog/melhores-destinos-no-sergipe/';
    fonts.font2 = 'https://pt.wikipedia.org/wiki/Rio_S%C3%A3o_Francisco';
    fonts.font3 = 'http://sergipeemfotos.blogspot.com/2012/09/caatinga-no-municipio-de-poco-redondo.html';
    fonts.font4 = 'https://pt.wikipedia.org/wiki/Mandacaru';
    fonts.font5 = 'https://pt.wikipedia.org/wiki/Veado-catingueiro';
    fonts.font6 = 'https://www.infoescola.com/anfibios/sapo-cururu/';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4+'<br>'+fonts.font5+'<br>'+fonts.font6;
}
  if(selectStt.value === 'TO'){
    fonts.font0 = 'http://www.portaldotocantins.com/2015/05/04/unidades-de-conservacao-do-tocantins-preservam-mais-de-240-mil-hectares-e-garantem-sustentabilidade/';
    fonts.font1 = 'https://pt.wikipedia.org/wiki/Tocantins';
    fonts.font2 = 'https://escola.britannica.com.br/levels/fundamental/article/Tocantins/483594';
    fonts.font3 = 'https://pt.wikipedia.org/wiki/Ficheiro:Lixeira_do_cerrado_de_Mato_Grosso.JPG';
    fonts.font4 = 'https://www.arteblog.net/2013/10/31/conheca-artesanato-produzido-tocantins/';
  fontDiv.innerHTML = 'Fontes das imagens:<br><br>'+fonts.font0+'<br>'+fonts.font1+'<br>'+fonts.font2+'<br>'+fonts.font3+'<br>'+fonts.font4;
}
});
