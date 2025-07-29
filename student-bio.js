// For handling drop down behaviour
// Object containing departments grouped by faculty
const departmentOptions = {
  SchoolOfAgricultureAndAgriculturalTechonology : ["Agribusiness", "Agricultural Economics and Extension", "Animal Production", "Crop Production", "Geology", "Horticulture", "Soil Science and Land Management", "Water Resources Aquaculture and Fisheries Technology", "Zoology"],
  SchoolOfElectricalEngineeringTechonology : ["Computer Engineering", "Electrical Engineering", "Mechatronics Engineering", "Telecomunnications Engineering"],
  SchoolOfEntreprenurshipManagementTechonology : [],
  SchoolOfEnvironmentalTechonology : ["Architecture", "Building", "Estate Management", "Quantity Surveying", "Surveying and Geoinformatics"],
  SchoolOfInformationCommunicationTechonology : ["Cyber Security Science", "Computer Science", "Data Science"],
  SchoolOfIndustrialProcessAndEngineeringTechonology : ["Agric and Bio-resources Engineering", "Chemical Engineering", "Civil Engineering", "Material and Metallurgical Engineering", "Mechanical Engineering", "Petroluem and Gas Engineering" ],
  SchoolOfInnovationTechonology : ["Entrepreneurship and Business studies ", " Project Management Technology ", "Transport and Logistics Management  ",],
  SchoolOfLifeSciences : ["Biochemistry", "Biology", "Microbiology", "Geography"],
  SchoolOfPhysicalSciences : ["Chemistry", "Mathematics", "Physics", "Statistics", "Applied Geophysics"],
  SchoolOfScienceAndTechonologyEducation : [],
  };
  
  // Wait for the DOM to load before accessing elements
  document.addEventListener("DOMContentLoaded", () => {
    const facultySelect = document.getElementById("faculty");
    const departmentSelect = document.getElementById("department");
  
    facultySelect.addEventListener("change", () => {
      const faculty = facultySelect.value;
      departmentSelect.innerHTML = '<option value="">--Select Department--</option>'; // reset
  
      if (departmentOptions[faculty]) {
        departmentOptions[faculty].forEach(dept => {
          const option = document.createElement("option");
          option.value = dept;
          option.textContent = dept;
          departmentSelect.appendChild(option);
        });
      }
    });
  });
  
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop normal form submission
  
    const formData = new FormData(this);
  
        window.location.href = "create-account.html";
      } else {
        alert("Submission failed.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    });
  
  
