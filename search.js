function search_projects() {
    let searchInput = document.getElementById('searchInput').value
    searchInput = searchInput.toLowerCase();
    let projects = document.getElementsByClassName('project-item');

    for (i = 0; i < projects.length; i++) {
        if (!projects[i].innerHTML.toLowerCase().includes(searchInput)) {
            projects[i].style.display = "none";
        }
        else {
            projects[i].style.display = "list-item";
        }
    }
}