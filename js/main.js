
// Blog Loader
const blogData = [
  { title: "The-Block-Chain", url: "/posts/The-Block-Chain.html" },
  { title: "How We Launched Our First Product", url: "blog.html#launch-product" },
  { title: "Top 5 Tools We Use to Stay Productive", url: "blog.html#top-tools" }
];

const blogList = document.getElementById('latest-blogs');
if (blogList) {
  blogData.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${post.url}">${post.title}</a>`;
    blogList.appendChild(li);
  });
}

// Scroll animation for sections
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  section.classList.add('invisible');
  observer.observe(section);
});
