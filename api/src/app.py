from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
from models import db
import os
import sqlite3
from flask_sqlalchemy import SQLAlchemy

from routes.main import bpMain
from routes.user import bpUser
from routes.profile import bpProfile
from routes.coordinates import bpCoordinates
from routes.galleries import bpGallery

load_dotenv()

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////workspace/ProyectoFinalFrontEnd/api/database/Model.db"
#db = SQLAlchemy(app)


""" class Agenda(db.Model):
    __tablename__ = 'agendas'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return "<Agenda %r>" % self.name
 """

db.init_app(app)
Migrate(app, db)
CORS(app)

app.register_blueprint(bpMain)
app.register_blueprint(bpUser, url_prefix='/api')
app.register_blueprint(bpProfile, url_prefix='/api')
app.register_blueprint(bpCoordinates, url_prefix='/api')
app.register_blueprint(bpGallery, url_prefix='/api')

if __name__ == '__main__':
    app.run()


""" con = sqlite3.connect("./database/pothole.db")

cur = con.cursor()

ver = cur.execute("SELECT * FROM table_name")
print(ver.fetchone()) """
