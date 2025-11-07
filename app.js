document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("postForm");
  console.log("Form loaded:", form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    const title = document.getElementById("contentTitle").value.trim();
    const author = document.getElementById("contentAuthor").value.trim();
    const content = document.getElementById("content").value.trim();
    const token = document.getElementById("token").value.trim();
    const filename = `${Date.now()}.json`;

    const storyJSON = JSON.stringify({ title, author, content }, null, 2);
    const apiurl = `https://api.github.com/repos/parbat-debnath/LekhaLikhi/contents/stories/${filename}`;
    const encoded = btoa(encodeURIComponent(storyJSON));

    const payload = {
      message: `Add new story: ${title}`,
      content: encoded,
    };

    try {
      console.log("Uploading to:", apiurl);

      const response = await fetch(apiurl, {
        method: "PUT",
        headers: {
          "Authorization": `token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("✅ Story uploaded successfully!");
      } else {
        throw new Error(data.message || "Upload failed");
      }
    } catch (err) {
      alert(`❌ Error: ${err.message}`);
      console.error(err);
    }
  });
});
