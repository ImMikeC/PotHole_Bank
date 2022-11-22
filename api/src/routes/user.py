import uuid
from flask import Blueprint, jsonify, request, Flask
from models import User, db
from werkzeug.security import generate_password_hash, check_password_hash

bpUser = Blueprint('bpUser', __name__)

@bpUser.route('/users', methods=['GET'])
def all_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200


@bpUser.route('/users/<public_id>', methods=['GET'])
def one_user(public_id):
    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message': 'No user found!'}), 403

    user_data = {}
    user_data['email'] = user.email
    user_data['password'] = user.password
    user_data['profile_id'] = user.profile_id
    user_data['public_id'] = user.public_id

    return jsonify({'user': user_data}), 200


@bpUser.route('/management/create-user', methods=['POST'])
def create_user():
    data = request.get_json()
    print(data)

    hashed_password = generate_password_hash(data['password'])

    new_user = User(
        email=data['email'],
        password=hashed_password,
        profile_id=data['profile_id'],
        public_id=str(uuid.uuid4()),
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'New user created!'}), 200

#Create user municipality
@bpUser.route('/management/create-municipality', methods=['POST'])
def create_muni():
    data = request.get_json()

    hashed_password = generate_password_hash(data['password'])

    new_muni = User(
        muni_firstname=data['muni_firstname'],
        muni_lastname=data['muni_lastname'],
        email=data['email'],
        muni_phone=data['muni_phone'],
        password=hashed_password,
        muni_position=data['muni_position'],
        municipality=data['municipality'],
        profile_id= data['profile_id'],
        public_id=str(uuid.uuid4()),
    )

    db.session.add(new_muni)
    db.session.commit()

    return jsonify({'message': 'New muni created!'}), 200




@bpUser.route('/management/<int:id>/update_profile_id', methods=['PUT'])
def update_user_profile_id(id):
    data = request.get_json()
    user = User.query.filter_by(id=id).first()

    user.profile_id = data['profile_id']
    db.session.commit()

    return jsonify({'message': 'Profile_id updated!'})

@bpUser.route('/management/<int:id>/update_email', methods=['PUT'])
def update_user_email(id):
    data = request.get_json()
    user = User.query.filter_by(id=id).first()

    user.email = data['email']
    db.session.commit()

    return jsonify({'message': 'User email updated!'})

@bpUser.route('/management/<int:id>', methods=['DELETE'])
def delete_user(id):
    
    user = User.query.filter_by(id=id).first()

    if not user:
        return jsonify({'message': 'id not found'})

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message': 'User deleted'})
