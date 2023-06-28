function montaCarta(simbolo,nipe,cor,z_index){ //Funcao para retornar um objeto carta contendo numero e simbolo para ser adicionado na pagina
    let div = `<div class="carta" id="card_${z_index}" style="z-index:${z_index}">`;
    let simb_esq = `<div class="simb-esq-carta"><i class="num-carta ${cor}">${simbolo}</i><img class="nipe ${nipe}"/></div>`;
    let simb_dir = `<div class="simb-dir-carta"><i class="num-carta ${cor}">${simbolo}</i><img class="nipe ${nipe}"/></div>`;
    div += simb_esq + simb_dir + '</div>';
    return div;
}