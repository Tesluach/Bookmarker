var addBookmarks = document.forms['userInput'];
var list = document.querySelector('.output ul');
document.querySelector('.output').style.display = 'none';

var siteNameValue = document.getElementById('siteName');
var siteUrlValue = document.getElementById('siteUrl');


addBookmarks.addEventListener('submit', function(e) {
    e.preventDefault();
    var siteNameValue = document.getElementById('siteName').value;
    var siteUrlValue = document.getElementById('siteUrl').value;
    addBookmarks.querySelector('#siteName').value = "";
    addBookmarks.querySelector('#siteUrl').value = "";





    if (siteNameValue !== "" && siteUrlValue !== "") {
        document.querySelector('.output').style.display = 'block';
        // create elements 



        var li = document.createElement('li');
        var siteName = document.createElement('span');
        var deleteSpan = document.createElement('span');
        var linkSpan = document.createElement('span');
        linkSpan.innerHTML = '<a href=' + siteUrlValue + '>View</a>';


        //classes
        siteName.classList.add('site');
        deleteSpan.classList.add('delete');
        linkSpan.classList.add('visit');

        //text content
        siteName.textContent = siteNameValue;
        deleteSpan.textContent = 'Delete';


        //append elements
        list.appendChild(li);
        li.appendChild(siteName);
        li.appendChild(deleteSpan);
        li.appendChild(linkSpan);


    } else {
        alert('Please fill all the inputs');
    }

    // var expression = /[-a-zA-Z0-9@:$_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:$_\+.~#?&//=]*)?/gi;
    // var regex = new RegExp(expression);
    // if (!siteUrlValue.match(regex)) {
    //     alert('Please use a valid URL');
    //     return false;
    // }

});





// deleting the list items

list.addEventListener('click', function(e) {
    // e.preventDefault();
    if (e.target.className == 'delete') {
        var lis = e.target.parentElement;
        list.removeChild(lis);
    }
});