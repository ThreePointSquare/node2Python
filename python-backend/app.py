from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)

cors = CORS(app)

#Create the receiver API POST endpoint:
@app.route("/receiver", methods=["POST"])

####### CREATE METHOD TO GET DATA

def postME():
   data = request.get_json()
   data = jsonify(data)
   return data


if __name__ == "__main__": 
   app.run(debug=True)