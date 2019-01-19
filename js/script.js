// para cambiar el color del menu
window.onscroll = function(){
    myfunction()
};
function myfunction(){
    var menu = document.getElementById('menu');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        menu.className = 'navbar navbar-expand-lg navbar-dark bg-primary fixed-top';
    } else{
        menu.className = 'navbar navbar-expand-lg navbar-dark bg-transp fixed-top'; 
    }
};
