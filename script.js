/* 
META PIXEL PRACTICE:
After creating your Meta Pixel/Dataset, paste the Meta base code
inside <head> of every HTML page. Then use these standard events.
*/

let cart=JSON.parse(localStorage.getItem('cart')||'[]');

function updateCartCount(){const el=document.getElementById('cartCount');if(el)el.textContent=cart.length}
updateCartCount();

function trackViewContent(){console.log('Practice event: ViewContent');}
function viewProduct(name,value){console.log('Practice event: ViewContent',name,value); alert(name+' — ₹'+value+'\n\nViewContent event should fire here.');}
function addToCart(name,value){
 cart.push({name,value});localStorage.setItem('cart',JSON.stringify(cart));updateCartCount();
 console.log('Practice event: AddToCart',name,value);
 alert(name+' added to cart. AddToCart event should fire here.');
}
function viewCart(){
 if(!cart.length){alert('Cart is empty.');return}
 window.location.href='checkout.html';
}
function submitLead(e){
 e.preventDefault();
 console.log('Practice event: Lead');
 alert('Lead submitted. Lead event should fire here.');
 e.target.reset();
}
function purchase(e){
 e.preventDefault();
 const total=cart.reduce((s,p)=>s+p.value,0)||1;
 console.log('Practice event: Purchase',total);
 localStorage.removeItem('cart'); cart=[]; updateCartCount();
 window.location.href='thank-you.html';
}
if(location.pathname.endsWith('checkout.html')){
 const s=document.getElementById('summary');
 const total=cart.reduce((a,p)=>a+p.value,0);
 s.innerHTML='<p>Items: '+cart.length+' | Practice Order Value: ₹'+total+'</p>';
}
