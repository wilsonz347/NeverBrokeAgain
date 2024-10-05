from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Server running..."

@app.route('/about', methods=['GET'])
def about():
    return '', 204

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
