let items = JSON.parse(localStorage.getItem("blogs-list")) || [];
let addDialog = document.getElementById('addDialog');
let addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
    let isEdit = document.getElementById('isEdit');
    let titleBox = document.getElementById('title');
    let dateBox = document.getElementById('date');
    let summaryBox = document.getElementById('summary');
    titleBox.value = "";
    dateBox.value = "2000-01-01";
    summaryBox.value = "";
    isEdit.value = -1;
    addDialog.showModal();
});

addDialog.addEventListener('close', () => {
    if (!addDialog.returnValue) {
        return;
    }

    let titleBox = document.getElementById('title');
    let dateBox = document.getElementById('date');
    let summaryBox = document.getElementById('summary');
    let isEditBox = document.getElementById('isEdit');
    let title = titleBox.value;
    let date = dateBox.value;
    let summary = summaryBox.value;
    let isEdit = parseInt(isEditBox.value);

    if (!title || !date || !summary) {
        return alert('Please enter data');
    }
    
    if (isEdit >= items.length) {
        return alert('Index error');
    } else if(isEdit >= 0) {
        items[isEdit].title = title;
        items[isEdit].date = date;
        items[isEdit].summary = summary;
    } else {
        items.push({
        title: title,
        date: date,
        summary: summary,
    });
    }
    localStorage.setItem('blogs-list', JSON.stringify(items));
    listItems();
});

function deleteBlog(index) {
    items.splice(index, 1);
    localStorage.setItem("blogs-list", JSON.stringify(items));
    listItems();
}

function editBlog(index) {
    let titleBox = document.getElementById('title');
    let dateBox = document.getElementById('date');
    let summaryBox = document.getElementById('summary');
    let isEdit = document.getElementById('isEdit');
    index = parseInt(index);
    titleBox.value = items[index].title;
    dateBox.value = items[index].date;
    summaryBox.value = items[index].summary;
    isEdit.value = index;
    addDialog.showModal();
}

function listItems() {
    let list = "";
    for (let i = 0; i < items.length; i++) {
        list += "<li>";
        list += "<span id='displayTitle'>" + items[i].title + "</span> ";
        list += "<span id='displayDate'>" + items[i].date + "</span> ";
        list += "<span id='displaySummary'>" + items[i].summary + "</span> ";
        list += "<button id='deleteButton' onclick='deleteBlog(" + i +")'>Delete</button> ";
        list += "<button id='editButton' onclick='editBlog(" + i +")'>Edit</button>";
        list += "</li>";
    }
    document.querySelector("#list-items").innerHTML = list;
}

window.editBlog = editBlog;
window.deleteBlog = deleteBlog;

(function () {
    listItems();
})();