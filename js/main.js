
let popupWindow = document.getElementById('popupWindow');
let popupBackground = document.getElementById('popupBackground');

function showPopup(){
    if(popupWindow.classList.contains('fadeInDown')){
        popupWindow.classList.remove('fadeInDown');
    }
    popupWindow.classList.add('fadeInUp');
    popupWindow.showModal();
}
function closePopup(){
    popupWindow.classList.add('fadeInDown');
    setTimeout(() => {
    popupWindow.close();
   }, 500);
}


