const item_menu_compra = document.getElementById('item_menu_compra');
const item_menu_auth = document.getElementById('item_menu_auth');
const item_menu_catalogo = document.getElementById('item_menu_catalogo');
const item_menu_login = document.getElementById('item_menu_login');
const item_menu_notifications = document.getElementById('item_menu_notifications');
const item_menu_principal = document.getElementById('item_menu_principal');
const item_menu_profile = document.getElementById('item_menu_profile');
const item_menu_settings = document.getElementById('item_menu_settings');
const item_menu_task = document.getElementById('item_menu_task');

//menu-item del cliente
item_menu_compra.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('interfaz.html')
    .then(response => response.text())

}); 

item_menu_auth.addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('auth.html')
      .then(response => response.text())
  
  });

  item_menu_catalogo.addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('catalogo.html')
      .then(response => response.text())
  
  });

  item_menu_login.addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('login.html')
      .then(response => response.text())
  
  }); 

  item_menu_notifications.addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('notifications.html')
      .then(response => response.text())
  
  }); 

  item_menu_principal.addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('principal.html')
      .then(response => response.text())
  
  }); 

  item_menu_profile.addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('profile.html')
      .then(response => response.text())
  
  }); 

  item_menu_settings.addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('settings.html')
      .then(response => response.text())
  
  }); 

  item_menu_task.addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('task.html')
      .then(response => response.text())
  
  }); 