from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Server running..."

@app.route('/about', methods=['GET'])
def about():
    about_info = {
        "title": "Never Broke Again",
        "description": "Our project promotes financial inclusion by addressing a critical challenge international students face in the U.S.: navigating the student loan process.",
        "goals": [
            "Estimate the loan amount they need.",
            "Manage their repayment plans effectively."
        ],
        "features": [
            "Calculate the optimal loan amount.",
            "Create a clear, manageable repayment schedule.",
            "Guide students through estimating their expenses, including tuition, living costs, and other variables.",
            "Generate personalized loan repayment schedules.",
            "Empower students to make informed financial decisions that align with their specific needs."
        ],
        "impact": "In the U.S. financial system, student loans play a crucial role in enabling access to education, but navigating different loan types, interest rates, and repayment options can be overwhelming, especially for international students. Our app bridges this gap by offering an easy-to-use tool that simplifies the complexities of student loans and helps students plan their finances with confidence, reducing the financial stress associated with higher education."
    }
    return jsonify(about_info)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)
