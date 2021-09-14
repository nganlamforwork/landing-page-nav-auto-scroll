const navItem=document.querySelectorAll('.navbar--item');
const contentItem=document.querySelectorAll('.content-item');

//Add class - remove class

function moveClass(item, name){
    const tmp=document.querySelector(`.${name}`);
    if (tmp!=null)tmp.classList.toggle(`${name}`);
    if (item!=null)item.classList.toggle(`${name}`);

}

//Add event click for each nav item

for (let item of navItem){
    item.addEventListener('click',function(){
        moveClass(item,'current');
    });
}

//Add even scroll for the body
document.addEventListener("scroll", function (){
    var posA = document.body.scrollTop+150;
    let ok=0;
    for(let i of contentItem){
        var posB = i.offsetTop;
        if (posB < posA){
            const idName=i.getAttribute('id');
            const tmp=document.querySelector("[href='#"+idName+"']");
            const tmp2=document.querySelector("#"+idName);
            moveClass(tmp,'current');
            moveClass(tmp2,'your-active-class');
            ok=1;
        }
    }
    if (!ok){
        const tmp=document.querySelector('.current');
        if (tmp!=null)tmp.classList.toggle('current');
    }
});

// Scroll To Top Button 
const topBtn=document.querySelector('.scroll-to-top');
console.log(topBtn);
const section2=document.querySelector('#section2')
window.addEventListener('scroll',()=>{
    if (document.body.scrollTop > (section2.offsetTop-400)){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
    }
})