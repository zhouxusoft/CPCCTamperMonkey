from flask import Flask, request, jsonify, make_response
import os

app = Flask(__name__)

@app.route('/uploadimg', methods=['POST'])
def uploadimg():
    for key in request.files:
        file = request.files[key]
    #print(file)
    filename = file.filename
    directory = os.path.join(os.getcwd(), './images')
    if not os.path.exists(directory):
        os.makedirs(directory)
    filepath = os.path.join(directory, filename) # type: ignore
    file.save(filepath)

    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)