1. 运行
2. 读代码，
    研究大概的框架
    研究基本功能的实现
        主页在什么地方配置？
            layout -> partials ->home_info.html TODO ?
        菜单
            config.yml(menu)
            # 左上角图标            
        菜单定位逻辑
            一级目录
            eg: 关于(about)
                    content 
                        about.md
            二级目录
            eg: 文章.技术（tech）
                    content
                        tech
                            _index.md (二级标题的描述)
                            tech.md

        search
            /assets/js/fastsearch.js
            /layouts/_default/
            https://gist.github.com/cmod/5410eae147e4318164258742dd053993

3. 问题
    1. 搜索不能定位到原文
    2. tag 不能及时更新，加了tag 需要重启

4. 代码提交格式
[Topic/要点]:知识点


        
