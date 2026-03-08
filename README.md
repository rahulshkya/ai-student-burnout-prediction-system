
# 🧠 AI Student Burnout Prediction System
[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)](https://www.python.org/)
[![Machine Learning](https://img.shields.io/badge/ML-Prediction-orange.svg)](https://scikit-learn.org/)
[![FastAPI](https://img.shields.io/badge/API-FastAPI-009688.svg)](https://fastapi.tiangolo.com/)

🧠 Project Overview
The AI Student Burnout Prediction System is a sophisticated machine learning solution designed to quantify and predict burnout levels among students by analyzing behavioral and academic data.

In an era of increasing academic pressure, this system serves as an early-warning mechanism. By identifying subtle patterns in student stress indicators, it empowers educators and mental health professionals to provide proactive, timely support before burnout reaches a critical stage.

![Project Screenshot](https://github.com/user-attachments/assets/fcc92b34-01e4-437b-b281-5fbd5eb2d68d)


🚀 Key Features
* **Multi-Algorithm Support:** Comparison between Logistic Regression, Random Forest, KNN, and Decision Trees.
* **End-to-End Pipeline:** Robust data preprocessing, feature scaling, and model serialization.
* **Real-time API:** Powered by **FastAPI** for low-latency predictions.
* **Data Insights:** Comprehensive Exploratory Data Analysis (EDA) visualized through Seaborn/Matplotlib.

---

🛠️ Tech Stack
* **Language:** Python
* **ML Libraries:** Scikit-learn, Pandas, NumPy
* **Visualization:** Matplotlib, Seaborn
* **Backend:** FastAPI, Uvicorn
* **Environment:** Jupyter Notebook / Lab

---

## 📊 Machine Learning Workflow



1. **Data Collection & Cleaning:** Handling missing values and ensuring data integrity.
2. **Feature Engineering:** Extracting meaningful patterns from academic and behavioral data.
3. **Model Selection:** Evaluated multiple algorithms to find the most accurate predictor.
4. **Evaluation:** Metrics used include Accuracy, Precision, Recall, and F1-Score.
5. **Deployment:** Wrapping the `.pkl` model into a REST API using FastAPI.

---

## 📂 Project Structure
```text
AI-Burnout-Prediction
│
├── static/             # backend and api , css file
├── template/          # UI - html file
├── app.py              # FastAPI source code (main.py) 
├── model.pkl           # Serialized model.pkl
├── scaler.pkl           #scaler for model
└── untitled1            #model traing code
└── README.md         # Project Documentation

```

---
📊 requirements

Flask==2.3.3
pandas==2.2.2
numpy==1.26.4
scikit-learn==1.4.2
joblib==1.4.2
werkzeug==2.3.7

```
pip install -r requirements.txt
```

## ⚙️ Installation & Usage

### 1. Clone the Repository

```bash
git clone [https://github.com/rahulshkya/student-burnout-prediction.git](https://github.com/rahulshkya/student-burnout-prediction.git)
cd student-burnout-prediction

```

### 2. Set Up Environment

```bash
pip install -r requirements.txt

```

### 3. Launch the API

```bash
uvicorn api.main:app --reload

```

*Access API Docs at:* `http://127.0.0.1:8000/docs`

---

## 📈 Model Performance

Algorithm 
Logistic Regression (Classification)

---

## 🔮 Future Enhancements

* **Deep Learning:** Implementing Neural Networks (ANN) for higher precision.
* **Web Dashboard:** Developing a React.js frontend for non-technical users.
* **Real-time Monitoring:** Integrating with wearable stress-monitoring devices.

---

## 👤 Author

**Rahul Saini**
*Machine Learning Enthusiast | Full Stack Developer*
[LinkedIn](https://www.google.com/search?q=https://linkedin.com/in/rahul-shakya) | [Portfolio](https://www.google.com/search?q=https://github.com/rahulshkya)

```


