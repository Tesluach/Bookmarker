
var list = document.querySelector('.output ul');
document.querySelector('.output').style.display = 'none';

var siteNameValue = document.getElementById('siteName');
var siteUrlValue = document.getElementById('siteUrl');

var addBookmarks = document.forms['userInput'];
addBookmarks.addEventListener('submit', function(e) {
    e.preventDefault();


    if (!siteNameValue.value && !siteUrlValue.value) {
        alert('Please fill in the form.');
        return false;
    }
        
        
        var bookmark = {
            name : siteNameValue.value,
            url : siteUrlValue.value
        }
        
        
          // local storage---

    if (localStorage.getItem('bookmarks') === null) {
        //init array
        var bookmarks = [];
        //add to array
        bookmarks.push(bookmark);
        //set to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    } else {
        //get bookmarks from localstorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //add bookmark to array
        bookmarks.push(bookmark);
        //re-set back to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    }
       fetchBookmarks(); 

   

});



function fetchBookmarks(){
    document.querySelector('.output').style.display = 'block';
        //get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    list.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        
        list.innerHTML +=  '<li>' + 
                    '<span class="site">'+name+'</span>' +
                    '<span class="delete">delete</span>' +
                    '<span class="visit"><a href="'+url+'">View</a></span>' +
                    '</li>';
        
    }
}

 fetchBookmarks();


// deleting the list items

list.addEventListener('click', deleting);

function deleting(e){
   
      e.preventDefault();
    
    if (e.target.className == 'delete') {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            for (let i = 0; i < bookmarks.length; i++) {
                if (bookmarks[i].name) {
                    bookmarks.splice(i, 1);
                }
            }
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        var lis = e.target.parentElement;
        list.removeChild(lis);
    }
}














