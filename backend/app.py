from flask import Flask, jsonify, render_template, request
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
        "description": "Our project promotes financial inclusion by addressing a critical challenge students face in the U.S.",
        "goals": [
            "Estimate the loan amount they need.",
            "Manage their repayment plans effectively."
        ],
        "features": [
            "loan_amount,term,interest_rate,installment,balance,expected number of years"
            "Checks if the loan can be repaid by that time.",
            "Empower students to make informed financial decisions that align with their specific needs."
        ],
        "impact": "In the U.S. financial system, student loans play a crucial role in enabling access to education, but navigating different loan types, interest rates, and repayment options can be overwhelming, especially for international students. Our app bridges this gap by offering an easy-to-use tool that simplifies the complexities of student loans and helps students plan their finances with confidence, reducing the financial stress associated with higher education."
    }
    return jsonify(about_info)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)
