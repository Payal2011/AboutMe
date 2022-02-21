function downloadResume(){
    var path= "resume/SejalHirjiGothi_Resume.pdf"; 
    var save = document.createElement('a');  
    save.href = path; 
    save.download = "SejalHirjiGothi_Resume"; 
    save.target = '_blank'; 
    document.body.appendChild(save);
    save.click();
    document.body.removeChild(save);
}