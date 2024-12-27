// Results handling
function analyzeResume(jobTitle, file) {
    // Mock analysis - In production, this would be handled by your backend
    const mockResults = {
        score: Math.floor(Math.random() * 41) + 60, // Random score between 60-100
        missingKeywords: [
            'Python',
            'Machine Learning',
            'AWS',
            'Docker',
            'CI/CD'
        ],
        suggestions: [
            'Include more specific technical skills related to the job requirements',
            'Add quantifiable achievements from your previous roles',
            'Incorporate industry-standard tools and technologies',
            'Use more action verbs to describe your experiences',
            'Ensure your resume is properly formatted for ATS systems'
        ]
    };

    showResults(mockResults);
}

function showResults(results) {
    document.getElementById('resumeContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.remove('hidden');

    // Update score
    const scoreValue = document.getElementById('scoreValue');
    scoreValue.textContent = results.score;
    
    // Update score circle color based on score
    const scoreCircle = document.querySelector('.score-circle');
    if (results.score >= 80) {
        scoreCircle.style.backgroundColor = 'var(--success-color)';
    } else if (results.score >= 60) {
        scoreCircle.style.backgroundColor = '#ECC94B';
    } else {
        scoreCircle.style.backgroundColor = 'var(--error-color)';
    }

    // Update keywords
    const keywordsList = document.getElementById('keywordsList');
    keywordsList.innerHTML = results.missingKeywords
        .map(keyword => `<span class="keyword-tag">${keyword}</span>`)
        .join('');

    // Update suggestions
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = results.suggestions
        .map(suggestion => `<li>${suggestion}</li>`)
        .join('');
}

function resetUpload() {
    // Reset file input and states
    currentFile = null;
    document.getElementById('resumeFile').value = '';
    document.getElementById('jobTitle').value = '';
    updateFileInfo();

    // Show upload container
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('resumeContainer').classList.remove('hidden');
}