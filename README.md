# Esa Custom Authentication

## Introduction

Esa Custom Authentication is an Odoo 17 module that provides custom authentication features for your Odoo website. It includes enhanced security features and custom authentication flows to improve user experience and security.

## Features

- Custom login and registration pages
- Enhanced security measures
- Integration with Odoo website module

## Compatibility

This module was designed and tested in Odoo 17 but may also work in Odoo 15, 16, and even 14. However, some features or functionalities may need adjustments for older versions.

## Installation

### Prerequisites

- Odoo 17
- Python 3.6 or higher

### Steps

1. Clone the repository into your Odoo custom addons directory:
    ```sh
    git clone https://github.com/esacodeBj/odoo-custom-auth.git
    ```

2. Update your Odoo configuration file to include the custom addons directory:
    ```sh
    addons_path = /path/to/your/custom/addons,/path/to/odoo/addons
    ```

3. Restart the Odoo server:
    ```sh
    ./odoo-bin -c /path/to/your/odoo.conf
    ```

4. Install the module via the Odoo interface:
    - Go to Apps
    - Click on Update Apps List
    - Search for "Esa Custom Authentication"
    - Click on Install

## Usage

After installation, you can access the custom authentication features by navigating to your Odoo website. The custom login and registration pages will be available, providing an enhanced authentication experience.

## Configuration

No additional configuration is required. However, you can customize the templates and styles by modifying the files in the `views` and `static` directories.

## Development

### Module Structure

- `__init__.py`: Initializes the module and imports controllers.
- `__manifest__.py`: Contains module metadata and configuration.
- `controllers`: Contains controller files for handling web requests.
- `security`: Contains access control and security-related files.
- `static`: Contains static files such as CSS, JS, and images.
- `views`: Contains XML files defining the frontend templates and views.

### Important Files

- `controllers/main.py`: Main controller for handling authentication-related web requests.
- `views/auth_templates.xml`: XML file defining the authentication templates.
- `static/src/css/styles.css`: Custom styles for the module.
- `static/src/js/auth.js`: Custom JavaScript for handling authentication logic.

## Contributing

We welcome contributions to enhance the module. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## Author

This module was developed by [Expédit ALAGBE](https://expeditalagbe.com/). For any inquiries or support, please contact [mail@expeditalagbe.com](mailto:mail@expeditalagbe.com).

## License

This module is licensed under the MIT License. See the LICENSE file for more details.

# Esa Custom Authentication

## Introduction

Esa Custom Authentication est un module Odoo 17 qui offre des fonctionnalités d'authentification personnalisées pour votre site web Odoo. Il comprend des fonctionnalités de sécurité améliorées et des flux d'authentification personnalisés pour améliorer l'expérience utilisateur et la sécurité.

## Fonctionnalités

- Pages de connexion et d'inscription personnalisées
- Mesures de sécurité améliorées
- Intégration avec le module de site web Odoo

## Compatibilité

Ce module a été conçu et testé dans Odoo 17, mais pourrait également fonctionner dans Odoo 15, 16 et même 14. Cependant, certaines fonctionnalités peuvent nécessiter des ajustements pour les versions plus anciennes.

## Installation

### Prérequis

- Odoo 17
- Python 3.6 ou supérieur

### Étapes

1. Cloner le dépôt dans votre répertoire d'addons personnalisés Odoo :
    ```sh
    git clone https://github.com/esacodeBj/odoo-custom-auth.git
    ```

2. Mettre à jour votre fichier de configuration Odoo pour inclure le répertoire des addons personnalisés :
    ```sh
    addons_path = /path/to/your/custom/addons,/path/to/odoo/addons
    ```

3. Redémarrer le serveur Odoo :
    ```sh
    ./odoo-bin -c /path/to/your/odoo.conf
    ```

4. Installer le module via l'interface Odoo :
    - Aller dans Apps
    - Cliquer sur Mettre à jour la liste des applications
    - Rechercher "Esa Custom Authentication"
    - Cliquer sur Installer

## Utilisation

Après l'installation, vous pouvez accéder aux fonctionnalités d'authentification personnalisées en naviguant sur votre site web Odoo. Les pages de connexion et d'inscription personnalisées seront disponibles, offrant une expérience d'authentification améliorée.

## Configuration

Aucune configuration supplémentaire n'est requise. Cependant, vous pouvez personnaliser les modèles et les styles en modifiant les fichiers dans les répertoires `views` et `static`.

## Développement

### Structure du Module

- `__init__.py`: Initialise le module et importe les contrôleurs.
- `__manifest__.py`: Contient les métadonnées et la configuration du module.
- `controllers`: Contient les fichiers de contrôleurs pour gérer les requêtes web.
- `security`: Contient les fichiers de contrôle d'accès et de sécurité.
- `static`: Contient les fichiers statiques tels que CSS, JS, et images.
- `views`: Contient les fichiers XML définissant les modèles et vues frontend.

### Fichiers Importants

- `controllers/main.py`: Contrôleur principal pour gérer les requêtes web liées à l'authentification.
- `views/auth_templates.xml`: Fichier XML définissant les modèles d'authentification.
- `static/src/css/styles.css`: Styles personnalisés pour le module.
- `static/src/js/auth.js`: JavaScript personnalisé pour gérer la logique d'authentification.

## Contribuer

Nous accueillons les contributions pour améliorer le module. Pour contribuer :

1. Fork le dépôt.
2. Créer une nouvelle branche pour votre fonctionnalité ou correction de bug.
3. Soumettre une pull request avec une description détaillée de vos changements.

## Auteur

Ce module a été développé par [Expédit ALAGBE](https://expeditalagbe.com/). Pour toute demande ou support, veuillez contacter [mail@expeditalagbe.com](mailto:mail@expeditalagbe.com).

## Licence

Ce module est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
