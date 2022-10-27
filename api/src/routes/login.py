import uuid
from flask import Blueprint, jsonify, request , Flask, make_response
from models import db, User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import jwt
import datetime

bpLogin = Blueprint('bpLogin', __name__)

@bpLogin.route('/login', methods=['POST'])
def ingresar():
    email = request.json.get('email')
    password = request.json.get('password')

#Valido el formulario
    ##Dejamos el email como username para el registro
    if not email: return jsonify({"status": "error", "code":400, "mensaje": "El email del usuario es requerido"}), 400
    if not password : return jsonify({"status": "error", "code": 400, "mensaje": "La contraseña es requerida"}), 400

    usuario = User.query.filter_by(email=email).first()

    check = check_password_hash(usuario.password,password)
    print(check)
#Valido si el usuario existe
    if not usuario : return jsonify({"status": "error", "code": 401, "mensaje": "El email o la contraseña está incorrecto"}), 400
#Valido si la contraseña ingresada coincide con la guardada
    if not check_password_hash(usuario.password, password) : return jsonify ({"status": "error", "code": 401, "mensaje": "El email o la contraseña está incorrecto"}), 400

    # expires = datetime.timedelta(days=1)
    # access_token = create_access_token(identity = usuario.id, expires_delta =expires)

    data = {
    #"access_token" : access_token,
    "usuario": usuario.serialize()
}

    return jsonify({ "status": "éxito", "code": 200, "mensaje": "El usuario ha ingresado exitosamente", "data": data}), 200
    
        