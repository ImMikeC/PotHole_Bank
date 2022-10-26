from flask import Blueprint, request, jsonify
from models import Coordinates
import cloudinary.uploader


bpCoordinates = Blueprint('bpCoordinates', __name__)

@bpCoordinates.route('/coordinates', methods=['GET'])
def coordinates():
          coordinates = Coordinates.query.all()
          coordinates = list(map(lambda imagen: imagen.serialize(), coordinates))
          return jsonify(coordinates), 200

        # if request.method == 'POST':
        
        # title = request.form['title']
        # active = request.form['active']
        # image = request.files['image']

        # resp = cloudinary.uploader.upload(image, folder="gallery")

        # if not resp: return jsonify({ "msg": "error uploading image"}), 400

        # gallery_image = Gallery()
        # gallery_image.title = title
        # gallery_image.active = True if active == 'true' else False
        # gallery_image.filename = resp['secure_url']
        # gallery_image.save()

        # return jsonify(gallery_image.serialize()), 200


    if request.method == 'POST':
        
        title = request.form['title']
        active = request.form['active']
        images = request.files.getlist("images")

        print(images)
        data = []

        for image in images:

          print(image)

          resp = cloudinary.uploader.upload(image, folder="coordinates")

          if not resp: return jsonify({ "msg": "error uploading image"}), 400

          gallery_image = Coordinates()
          gallery_image.title = title
          gallery_image.active = True if active == 'true' else False
          gallery_image.filename = resp['secure_url']
          gallery_image.save()

          data.append(coordinates_image.serialize())

        return jsonify(data), 200


@bpCoordinates.route('/coordinates/<int:id>', methods=['PUT'])
def coordinates_update_active(id):

        active = request.json.get('active')

        gallery_image = Coordinates.query.get(id)
        gallery_image.active = active
        gallery_image.update()

        return jsonify(coordinates_image.serialize()), 200



""" 
{   
  u'bytes': 29802,
  u'created_at': u'2017-06-25T17:20:30Z',
  u'format': u'jpg',
  u'height': 282,
  u'public_id': u'hl22acprlomnycgiudor',
  u'resource_type': u'image',
  u'secure_url': u'https://res.cloudinary.com/demo/image/upload/v1571218039/hl22acprlomnycgiudor.jpg',
  u'signature': u'10594f028dbc23e920fd084f8482394798edbc68',
  u'type': u'upload',
  u'url': u'http://res.cloudinary.com/demo/image/upload/v1571218039/hl22acprlomnycgiudor.jpg',
  u'version': 1571218039,
  u'width': 292
}
"""