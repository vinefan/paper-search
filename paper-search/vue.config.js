module.exports = {
    pages: {
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            filename: 'index.html',
            title: '首页'
        },
        search: {
            entry: './src/search.js',
            template: './public/search.html',
            filename: 'search.html',
            title: '搜索'
        }
    }
}