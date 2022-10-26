import uuid
from flask import Blueprint, jsonify, request, Flask, make_response
from models import db
from werkzeug.security import generate_password_hash, check_password_hash
import jwt

bpLogin = Blueprint('bpLogin', __name__)

@bpLogin.route('/login')
def login():
    auth = request.authorization

    if not auth or not auth.email or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required"'})

    user = User.query.filter_by(name=auth.email).first()

    if not user:
        return jsonify({'WWW-Authenticate' : 'Basic realm="Login required"'})

    if check_password_hash(user.password, auth.password):
        