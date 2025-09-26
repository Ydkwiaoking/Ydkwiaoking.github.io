// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 设置原始页面标题
    const originalTitle = document.title;
    let isTitleChanged = false;
    
    // 隐藏/显示页头的逻辑
    let lastScrollY = window.scrollY;
    
    function handleScroll() {
        // 隐藏/显示页头
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // 向下滚动且不在顶部
            header.classList.add('hidden');
        } else {
            // 向上滚动或在顶部
            header.classList.remove('hidden');
        }
        
        lastScrollY = window.scrollY;
        
        // 显示/隐藏返回顶部按钮
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
    
    // 返回顶部功能
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // 页面标题变化逻辑
    function handleVisibilityChange() {
        if (document.hidden) {
            document.title = "点我呀!呜呜~ (°ˊДˋ°)° 快点我吖!!";
            isTitleChanged = true;
        } else if (isTitleChanged) {
            document.title = originalTitle;
            isTitleChanged = false;
        }
    }
    
    // 加载Markdown内容
    function loadMarkdownContent() {
        // 定义Markdown文件与对应容器的映射
        const mdFiles = {
            'personal-info': 'contents/personal_info.md',
            'awards': 'contents/awards.md',
            'experiences': 'contents/experiences.md'
        };
        
        // 为每个Markdown容器加载内容
        for (const [containerId, filePath] of Object.entries(mdFiles)) {
            const container = document.getElementById(containerId);
            if (container) {
                fetch(filePath)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    })
                    .then(markdown => {
                        // 使用marked.js将Markdown转换为HTML
                        container.innerHTML = marked.parse(markdown);
                    })
                    .catch(error => {
                        console.error('Error loading markdown file:', error);
                        container.innerHTML = '<p>加载内容时出错，请刷新页面重试。</p>';
                    });
            }
        }
    }
    
    // 事件监听
    window.addEventListener('scroll', handleScroll);
    backToTopBtn.addEventListener('click', scrollToTop);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // 设置当前页面激活状态
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // 加载Markdown内容
    loadMarkdownContent();
});