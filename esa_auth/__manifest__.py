{
    'name': 'Esa Custom Authentication ',
    'version': '1.0',
    'summary': 'Custom authentication module ',
    'author': 'Expédit Sourou ALAGBE',
    'website': 'https://expeditalagbe.com/',
    'category': 'Tools',
    'depends': ['base','website',],
    'data': [
        'security/ir.model.access.csv',
        'views/auth_templates.xml',
        'views/custom_web_templates.xml',
    ],
    'bootstrap': True,
    'assets': {
        'web.assets_frontend': [
            '/esa_auth/static/src/css/styles.css',
            '/esa_auth/static/src/js/auth.js',
            '/esa_auth/static/src/js/sweetalert2@11.js',
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': True,
}
