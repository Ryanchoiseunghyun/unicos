// Get references to popup elements
const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');

// Function to open the popup
function openPopup() {
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Event listeners
openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);

// Close the popup if the user clicks anywhere outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
});




// 생활코딩

//function func()
//{
//    alert ('추석에는 배송이 어렵습니다.')
//}
//func()

/*
let startUnderline = document.getElementById("mainFirst");
let firstUnderline = document.querySelectorAll("nav:Nav_first a")


horizontalMenus.forEach(menu=>menu.addEventListener("click",(e)=>horizontalIndicator(e)))

function horizontalIndicator(e)
{
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top =
    e.currentTarget.offsetTop+e.currentTarget.offsetHeight + "px";
}
*/
function openSidebar() {
    document.querySelector('.sidebar').style.width = '250px';
    document.querySelector('.content').style.marginLeft = '250px';
  }
  
  function closeSidebar() {
    document.querySelector('.sidebar').style.width = '0';
    document.querySelector('.content').style.marginLeft = '0';
  }