// ======================================
// SIDEBAR TOGGLE
// ======================================
function toggleSidebar() {
    document.getElementById("sidebar")
        .classList.toggle("collapsed");
}

// ======================================
// THEME TOGGLE
// ======================================
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}


// ======================================
// MAIN PREDICTION FUNCTION
// ======================================
async function handlePrediction(event) {

    event.preventDefault();

    const loader = document.getElementById("loader");
    loader.style.display = "block";

    try {

        const study = document.getElementById("study_hours").value;
        const sleep = document.getElementById("sleep_hours").value;
        const stress = document.getElementById("stress_level").value;

        const response = await fetch("/predict", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({study, sleep, stress})
        });

        const data = await response.json();

        loader.style.display = "none";

        document.getElementById("burnoutResult").innerText =
            data.prediction;

        document.getElementById("cgpaResult").innerText =
            data.percentage + "%";

        updateSuggestions(data.prediction);

        // SHOW RESULTS
        document.getElementById("results")
            .classList.add("active");

    } catch (error) {
        loader.style.display = "none";
        console.error(error);
    }
}


// ======================================
// AI SUGGESTION ENGINE
// ======================================
function updateSuggestions(prediction) {

    const box = document.getElementById("suggestionBox");
    const title = document.getElementById("suggestionTitle");
    const list = document.getElementById("suggestionList");

    list.innerHTML = "";
    box.className = "suggestion-box";

    let suggestions = [];

    // GOOD PERFORMANCE
    if (prediction === "Good Performance") {

        box.classList.add("suggestion-good");
        title.innerText = "✅ You're Doing Great!";

        suggestions = [
            "Maintain your current study routine.",
            "Keep consistent sleep schedule.",
            "Start building advanced projects.",
            "Add light exercise for productivity.",
            "Track weekly learning goals."
        ];
    }

    // AVERAGE
    else if (prediction === "Average") {

        box.classList.add("suggestion-average");
        title.innerText = "⚡ Improvement Needed";

        suggestions = [
            "Balance study and rest properly.",
            "Reduce unnecessary screen time.",
            "Use Pomodoro study technique.",
            "Improve daily consistency.",
            "Practice stress management."
        ];
    }

    // BURNOUT
    else {

        box.classList.add("suggestion-burnout");
        title.innerText = "🚨 Burnout Risk Detected";

        suggestions = [
            "Take short breaks regularly.",
            "Reduce workload temporarily.",
            "Sleep at least 7–8 hours.",
            "Do meditation or exercise.",
            "Talk with mentors or friends."
        ];
    }

    suggestions.forEach(text => {
        const li = document.createElement("li");
        li.innerText = text;
        list.appendChild(li);
    });
}

// ======================================
// MAIN PREDICTION FUNCTION
// ======================================
