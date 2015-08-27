Package.describe({
    name: 'divramod:api-check',
    version: '7.3.0',
    summary: 'VanillaJS version of ReactJS propTypes',
    git: 'https://github.com/divramod/api-check',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.addFiles('dist/api-check.js', 'client');
});
