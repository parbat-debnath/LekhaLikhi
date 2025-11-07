document.getElementById("postBtn").addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('contentTitle').value.trim();
    const author = document.getElementById('contentAuthor').value.trim();
    const content = document.getElementById('content').value.trim();
    const token = document.getElementById('token').value.trim();
    const filename = `${new Date()}.json`;

    const storyJSON = JSON.stringify({ title, author, content }, null, 2);

});