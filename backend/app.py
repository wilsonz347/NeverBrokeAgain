from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Server running..."

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

@app.route('/about', methods=['GET'])
def about():
    print("This is the about page")

