// 项目数据加载
document.addEventListener('DOMContentLoaded', function() {
    // 模拟项目数据（实际应用中可以从contents/projects.yml加载）
    const projectsData = {
        "course-projects": [
            {
                "title": "数据结构课程设计",
                "description": "实现了一个基于二叉搜索树的学生信息管理系统",
                "tags": ["C++", "数据结构", "课程设计"]
            },
            {
                "title": "数据库系统实验",
                "description": "设计并实现了一个简单的图书馆管理系统",
                "tags": ["MySQL", "Java", "数据库"]
            },
            {
                "title": "Web开发课程项目",
                "description": "使用HTML、CSS和JavaScript开发了一个响应式网站",
                "tags": ["HTML", "CSS", "JavaScript", "响应式设计"]
            }
        ],
        "competition-projects": [
            {
                "title": "ACM程序设计大赛",
                "description": "参加了2022年ACM程序设计大赛，解决了多个算法问题",
                "tags": ["算法", "C++", "竞赛"]
            },
            {
                "title": "数学建模竞赛",
                "description": "使用数学模型解决实际问题的项目",
                "tags": ["数学建模", "Python", "数据分析"]
            }
        ],
        "personal-projects": [
            {
                "title": "个人博客系统",
                "description": "使用React和Node.js开发的全栈博客系统",
                "tags": ["React", "Node.js", "MongoDB", "全栈"]
            },
            {
                "title": "天气预报应用",
                "description": "基于第三方API的天气预报移动应用",
                "tags": ["React Native", "API", "移动开发"]
            },
            {
                "title": "在线代码编辑器",
                "description": "支持多种语言的在线代码编辑和运行环境",
                "tags": ["JavaScript", "代码高亮", "Web开发"]
            }
        ]
    };
    
    // 加载项目到页面
    function loadProjects() {
        for (const category in projectsData) {
            const projectList = document.getElementById(`${category}-list`);
            if (projectList) {
                projectsData[category].forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    
                    projectCard.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    `;
                    
                    projectList.appendChild(projectCard);
                });
            }
        }
    }
    
    // 如果当前页面是项目页面，则加载项目
    if (document.querySelector('.project-list')) {
        loadProjects();
    }
});