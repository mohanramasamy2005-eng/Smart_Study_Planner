document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element References ---
    const addGoalBtn = document.getElementById('add-goal-btn');
    const goalsList = document.getElementById('goals-list');
    const emptyGoalsView = document.getElementById('empty-goals-view');
    const totalGoalsEl = document.getElementById('total-goals');
    const completedGoalsEl = document.getElementById('completed-goals');
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    
    // --- State Management ---
    // Load goals from local storage or initialize an empty array
    let goals = JSON.parse(localStorage.getItem('studyGoals')) || [];

    // --- Functions ---
    const saveGoals = () => {
        localStorage.setItem('studyGoals', JSON.stringify(goals));
    };

    const updateStats = () => {
        const totalGoals = goals.length;
        const completedGoals = goals.filter(goal => goal.completed).length;
        const progress = totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;
        
        totalGoalsEl.textContent = totalGoals;
        completedGoalsEl.textContent = completedGoals;
        
        progressBar.style.width = `${progress}%`;
        progressPercent.textContent = `${Math.round(progress)}%`;

        // Toggle the "No study goals yet" message
        if (totalGoals > 0) {
            emptyGoalsView.style.display = 'none';
        } else {
            emptyGoalsView.style.display = 'block';
        }
    };

    const renderGoals = () => {
        // Clear the current list content except for the empty view
        goalsList.innerHTML = ''; 
        goalsList.appendChild(emptyGoalsView); 

        goals.forEach((goal, index) => {
            const goalItem = document.createElement('li');
            goalItem.classList.add('goal-item');
            if (goal.completed) {
                goalItem.classList.add('completed');
            }

            goalItem.innerHTML = `
                <span class="goal-text">${goal.text}</span>
                <div class="goal-actions">
                    <button class="complete-btn" data-index="${index}">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class="delete-btn" data-index="${index}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            goalsList.appendChild(goalItem);
        });
        
        updateStats();
    };

    const addGoal = () => {
        const goalText = prompt('Enter your new study goal:');
        if (goalText && goalText.trim() !== '') {
            goals.push({ text: goalText.trim(), completed: false });
            saveGoals();
            renderGoals();
        }
    };

    const handleGoalClick = (e) => {
        const target = e.target.closest('button');
        if (!target) return;

        const index = target.dataset.index;

        if (target.classList.contains('complete-btn')) {
            // Toggle completion status
            goals[index].completed = !goals[index].completed;
        }

        if (target.classList.contains('delete-btn')) {
            // Remove the goal from the array
            goals.splice(index, 1);
        }
        
        saveGoals();
        renderGoals();
    };

    // --- Event Listeners ---
    addGoalBtn.addEventListener('click', addGoal);
    goalsList.addEventListener('click', handleGoalClick);

    // --- Initial Render ---
    renderGoals();
});