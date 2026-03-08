from flask import Flask, render_template, request, jsonify
import pickle
import pandas as pd

# -----------------------
# App create
# -----------------------
app = Flask(__name__)

# -----------------------
# Load ML model
# -----------------------
model = pickle.load(open("model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

# -----------------------
# Home (UI)
# -----------------------
@app.route("/")
def home():
    return render_template("index.html")


# -----------------------
# Prediction API
# -----------------------
@app.route("/predict", methods=["POST"])
def predict():
    
    data = request.json

    # JSON → DataFrame
    df = pd.DataFrame([[ 
    data.get("study", 0),
    data.get("sleep", 0),
    data.get("screen", 0),
    data.get("attendance", 0),
    data.get("stress", 0),
    data.get("exercise", 0)
]],
columns=[
    "study",
    "sleep",
    "screen",
    "attendance",
    "stress",
    "exercise"
])


    print("✅ DATA RECEIVED FROM FRONTEND:", data)

    # Scaling
    scaled = scaler.transform(df)

    # Prediction
    pred = model.predict(scaled)[0]

    labels = {
        0: "Good Performance",
        1: "Average",
        2: "Burnout Risk"
    }

    result = labels[pred]

    return jsonify({
        "prediction": result
    })


# -----------------------
# Run server
# -----------------------
if __name__ == "__main__":
    app.run(debug=True)