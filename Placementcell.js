/** 
// Navbar links active state on scroll
*/
const onscroll =(el, listener)=>{
    el.addEventListener("scroll", listener);
};

let navbarlinks=select("#navbar .scrollto", true);
const navbarlinksActive=() =>{
    let position=window.scrollY +200;
    navbarlinks.forEach((navbarlinks)=> {
        if(!navbarlinks.hash ) return;
        let section = select(navbarlinks.hash);
        if(!section)return;
        if(
            position >= section.offsetTop && position<= section.offsetTop +section.offsetTopsetHeight
        ){
            navbarlinks.classList.add("active");
        }else{
            navbarlinks.classList.remove("active");
        }
        
    });
}
window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);
