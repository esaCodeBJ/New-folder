from odoo import http
from odoo.http import request
import logging
import datetime as dt


logger = logging.getLogger(__name__)

def create_user(login, name, password):
    """
    Crée un nouvel utilisateur dans Odoo .
    :param login: Le login de l'utilisateur à créer (email).
    :param name: Le nom de l'utilisateur à créer.
    :param password: Mot de passe de l'utilisateur à créer.
    :return: Un dictionnaire contenant le statut et le message de la création.
    """
    Users = request.env['res.users'].sudo()
    
    if Users.search_count([('login', '=', login)]) > 0:
        return {'status': 'error', 'message': 'L\'utilisateur existe déjà'}
    
    try:
        new_user = Users.create({
            'login': login,
            'email': login,
            'name': name,
            'password':password,
            'groups_id': [(6, 0, [request.env.ref('base.group_portal').id])] # Portal user

            # 'groups_id': [(6, 0, [request.env.ref('base.group_user').id])],  #Internal user minim access            
        })
        
        if new_user.partner_id:           
        
            return {'status': 'success', 'message': 'Utilisateur créé avec succès'}
    
    except Exception as e:
        return {'status': 'error', 'message': 'Échec de la création de l’utilisateur', 'details': str(e)}

class UserController(http.Controller):
    
    @http.route('/create_user', type='json', auth='public', website=True)
    def create_user_route(self, **kwargs):
        name = kwargs.get('name')
        login = kwargs.get('email')
        password = kwargs.get('password')

        missing_fields = []
        if not name:
            missing_fields.append('Nom')
        if not login:
            missing_fields.append('Email')
        if not password:
            missing_fields.append('Mot de passe')
        

        if missing_fields:
            return {'status': 'error', 'message': f'Veuillez remplir les champs suivants : {", ".join(missing_fields)}.'}

        try:
            result = create_user(login, name, password)
            return result
        except Exception as e:
            return {'status': 'error', 'message': 'Échec de la création de l’utilisateur', 'details': str(e)}


class EsaAuthModule(http.Controller):
    
        
    @http.route('/register', auth='public', website=True)
    
    def render_register(self, **kwargs):
        return request.render('esa_auth.template_register', {
           
        })
    
    
    
  
    

     
    