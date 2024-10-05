from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load('training_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from form
    loan_amount = float(request.form['loan_amount'])
    term = int(request.form['term'])
    interest_rate = float(request.form['interest_rate'])
    installment = float(request.form['installment'])
    balance = float(request.form['balance'])
    expected_years = int(request.form['expected_years'])

    input_data = pd.DataFrame({
        'loan_amount': [loan_amount],
        'term': [term],
        'interest_rate': [interest_rate],
        'installment': [installment],
        'balance': [balance]
    })

    predicted_years = model.predict(input_data)[0]

    if expected_years >= round(predicted_years):
        result = f"You can do it! You can clear the loan in {expected_years} years."
    else:
        result = f"Based on the inputs, you'd need approximately {round(predicted_years)} years to clear the loan. Adjust your plan accordingly."

    return render_template('index.html', prediction_text=result)

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
