// Resume upload handling
let currentFile = null;

function initializeDropZone() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('resumeFile');

    dropZone.addEventListener('click', () => fileInput.click());
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    ['dragleave', 'dragend'].forEach(type => {
        dropZone.addEventListener(type, (e) => {
            dropZone.classList.remove('drag-over');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

function handleFiles(files) {
    if (files.length) {
        const file = files[0];
        const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        if (validTypes.includes(file.type)) {
            currentFile = file;
            updateFileInfo();
        } else {
            alert('Please upload a PDF or DOCX file');
        }
    }
}

function updateFileInfo() {
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const submitBtn = document.getElementById('submitBtn');

    if (currentFile) {
        fileName.textContent = currentFile.name;
        fileInfo.classList.remove('hidden');
        submitBtn.disabled = false;
    } else {
        fileInfo.classList.add('hidden');
        submitBtn.disabled = true;
    }
}

function removeFile() {
    currentFile = null;
    document.getElementById('resumeFile').value = '';
    updateFileInfo();
}

function handleResumeSubmit(event) {
    event.preventDefault();
    
    const jobTitle = document.getElementById('jobTitle').value;
    
    if (!currentFile || !jobTitle) {
        return false;
    }

    // Mock resume analysis - In production, this would call your backend
    analyzeResume(jobTitle, currentFile);
    
    return false;
}

// Initialize drop zone when the page loads
document.addEventListener('DOMContentLoaded', initializeDropZone);