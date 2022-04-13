let link1 = 'https://www.google.com/search?q=1&sxsrf=APq-WBsnT9jn9jptF99VQVxZpRi3kcd7RQ:1649434957542&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjJteWF8IT3AhX2rZUCHQr3BC0Q_AUoAXoECAIQAw&biw=1366&bih=649&dpr=1';
let link2 = 'https://www.google.com/search?q=2&tbm=isch&ved=2ahUKEwiD67aZ8IT3AhWWMLkGHX57DeYQ2-cCegQIABAA&oq=2&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBAgAEENQmAVY2QZg7gtoAHAAeACAAYABiAG5AZIBAzEuMZgBAKABAaoBC2d3cy13aXotaW1nsAEAwAEB&sclient=img&ei=dmFQYoPYK5bh5OUP_va1sA4&bih=649&biw=1366';
let link3 = 'https://www.google.com/search?q=3&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjstqWu8IT3AhXEtJUCHd4MBDgQ_AUoAXoECAIQAw&biw=681&bih=639&dpr=1';

let vidBox1 = document.getElementById("vidBox1");
let vidBox2 = document.getElementById("vidBox2");
let vidBox3 = document.getElementById("vidBox3");

vidBox1.addEventListener("click",function(){goToLink(link1)});
vidBox2.addEventListener("click",function(){goToLink(link2)});
vidBox3.addEventListener("click",function(){goToLink(link3)});

function goToLink(link){
    window.location.href = link;
}
