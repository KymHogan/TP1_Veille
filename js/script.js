(function(){
    /****************  Tracé de la signature  ********************/

    var signature = document.querySelectorAll("#signature path")[0];	
    var longueur = signature.getTotalLength();
    signature.style.strokeDasharray = longueur;
    signature.style.strokeDashoffset = longueur;
    
    var docParallax = document.getElementsByClassName("parallax")[0];
    docParallax.addEventListener("scroll", maTrace);
    
    function maTrace() {
        var fractionDuScroll = (docParallax.scrollTop + docParallax.scrollTop) / (docParallax.scrollHeight - docParallax.clientHeight);
        var trace = longueur * fractionDuScroll;
        var ligne = longueur - trace
        if(ligne>=0)
            signature.style.strokeDashoffset = ligne;
    }
})();