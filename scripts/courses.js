const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//Code for button for all courses
const all = document.querySelector("#all");

all.addEventListener('click', () => showSelectedCourses(courses, "all"));

//Code for button for WDD courses
const wdd = document.getElementById("wdd");

wdd.addEventListener('click', () => showSelectedCourses(courses, "wdd"));

//Code for button for CSE courses
const cse = document.getElementById("cse");

cse.addEventListener('click', () => showSelectedCourses(courses, "cse"));

function showSelectedCourses(coursesArray, option = "all") {
    const course = document.getElementById("courses");
    course.innerHTML = "";
    if (option == "all") {
        const totalCredits = coursesArray.reduce((accumulator, credit) => {
            return accumulator + credit.credits
        }, 0);
        const p = document.createElement("p");
        p.innerHTML = `The total number of credits: ${totalCredits}`;
        course.appendChild(p);
        for (const object of coursesArray) {
            const button = document.createElement("button");
            button.textContent = `${object.subject} ${object.number}`;
            if (object.completed == true) {
                button.setAttribute("class", "courseCompleted");
            } else {
                button.setAttribute("class", "course");
            }
            course.appendChild(button);
            button.addEventListener("click", () => {
                showDialog(object);
            });
        }
    } else if (option == "wdd") {
        const wddCourses = coursesArray.filter(wdd => wdd.subject == "WDD");
        const totalCredits = wddCourses.reduce((accumulator, credit) => {
            return accumulator + credit.credits
        }, 0);
        const p = document.createElement("p");
        p.innerHTML = `The total number of credits: ${totalCredits}`;
        course.appendChild(p);
        for (const object of wddCourses) {
            const button = document.createElement("button");
            button.textContent = `${object.subject} ${object.number}`;
            if (object.completed == true) {
                button.setAttribute("class", "courseCompleted");
            } else {
                button.setAttribute("class", "course");
            }
            course.appendChild(button);
            button.addEventListener("click", () => {
                showDialog(object);
            });
        }
    } else if (option == "cse") {
        const cseCourses = coursesArray.filter(cse => cse.subject == "CSE");
        const totalCredits = cseCourses.reduce((accumulator, credit) => {
            return accumulator + credit.credits
        }, 0);
        const p = document.createElement("p");
        p.innerHTML = `The total number of credits: ${totalCredits}`;
        course.appendChild(p);
        for (const object of cseCourses) {
            const button = document.createElement("button");
            button.textContent = `${object.subject} ${object.number}`;
            if (object.completed == true) {
                button.setAttribute("class", "courseCompleted");
            } else {
                button.setAttribute("class", "course");
            }
            course.appendChild(button);
            button.addEventListener("click", () => {
                showDialog(object);
            });
        }
    }

    //course.innerHTML = content;
}

function showDialog(courses) {
    const modal = document.querySelector("#course-details");
    modal.innerHTML = "";
    const subject = document.createElement("h2");
    const closeModal = document.createElement("button");
    const title = document.createElement("h3");
    const credits = document.createElement("p");
    const certificate = document.createElement("p");
    const description = document.createElement("p");
    const technology = document.createElement("p");

    subject.textContent = `${courses.subject}${courses.number}`;
    closeModal.innerHTML = `&#10060;`;
    title.textContent = `${courses.title}`;
    credits.textContent = `${courses.credits} credits`;
    certificate.textContent = `Certificate: ${courses.certificate}`;
    description.textContent = `${courses.description}`;
    technology.textContent = `Technology: ${courses.technology}`;

    modal.appendChild(subject);
    modal.appendChild(closeModal);
    modal.appendChild(title);
    modal.appendChild(credits);
    modal.appendChild(certificate);
    modal.appendChild(description);
    modal.appendChild(technology);

    modal.showModal();
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}