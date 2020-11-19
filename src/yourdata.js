/* eslint-disable import/no-anonymous-default-export */
export default
    {
        headerTagline: [//Line 1 For Header
            "Hello👋 I'm Kristy Kristy.",
            //Line 2 For Header
            "Full-Stack Web Developer",
            //Line 3 For Header
            "in Philadelphia, PA"
        ],
        //Contact Email
        contactEmail: 'keller.kristy@outlook.com',
        headerBrand:
        [
        "Full-Stack Web Development • Coding • QA Testing • Web Design • Product Management • Content Writing • eCommerce"
            ],
        // About Me
        abouttext: [
        "Adaptable, detail-oriented full-stack web developer with experience applying social coding, refactoring and debugging code, building and designing content, creating front end and back end websites, and executing problem solving with testing. My super power is proactive learning and teamwork, combining precision with creativity.", 
        "From design to execution, I utilize innovation and technical skills to provide seamless end to end projects and results through JavaScript, HTML5, CSS3, Reactjs, Jest Testing, jQuery, Bootstrap, MySql, MongoDB, and other libraries and frameworks.",
        "I have been in the eCommerce industry for nearly three years where I have enhanced and built dynamic web experiences. I adore the problem solving environment the technology field fosters, leading me to pursue a path further involved with back-end and front-end development and QA testing.",
        "I graduated with dual Master's degrees in Business Administration and Media Communication from Point Park University along with a Bachelor's degree in Communication from Keystone College. I have a Full-Stack Web Development certificate from the University of Pennsylvania. I also have experience as a freelance Content Marketer along with being an eCommerce Content Specialist at Dick's Sporting Goods. Check out my projects for a better look at my way of thinking."],
        aboutImage: "https://i.ibb.co/tzDb29q/bio-photo.jpg",
        ShowAboutImage: true,
        projects: [
            {
                id: 1,
                title: 'Ice Cream Truck ORM',
                description: "A ice cream logger app with MySQL, Node, Express, Handlebars and a homemade ORM that lets users input the names of ice cream flavors they'd like to eat. Whenever a user submits a ice cream flavor, the app will display the ice cream flavor on the page. Each ice cream flavor in the waiting area also has a Devour button. When the user clicks Devour, the ice cream will move to the right side of the page. This app stores every ice cream in a database, whether devoured or not.",
                service: "HTML5, Handlebars.js, CSS3, JavaScript, Homemade ORM, Node.js, Express, MySQL",
                imageSrc: "https://i.ibb.co/3h1KPZv/Screenshot-2.png",
                url: 'https://ice-cream-truck.herokuapp.com/',
                urlCode: "https://github.com/KristyKeller/IceCreamTruck"
            },
            {
                id: 2,
                title: 'Engineer Team Profile Generator', 
                description: "A software engineering team generator command line application. Prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application creates an HTML file that displays a formatted team roster based on the information provided by the user.",
                service: "HTML5, CSS3, JavaScript, Jest.js testing, Node.js, Express.js, Github API, CLI application",
                imageSrc: "https://i.ibb.co/q5dR8fy/team-gen-screenshot.png",
                url: 'https://drive.google.com/file/d/1bhLu0rQtZ7xfDRMs5FQ1AdVNLG6L_58Y/view',
                urlCode: "https://github.com/KristyKeller/TeamGenerator"
            },
            {
                id: 3,
                title: 'Stream Saver',
                description:"An application that lets the user search for any show or movie they'd like to stream. This application shows where this show or movie is currently streaming, the release date, and user ratings. The user can save the shows and movies they want to watch to a watch list viewable once they sign into their account. The user can mark which content they've finished watching and delete from their watch list at any time.",
                service: "HTML5, CSS3, JavaScript, JQuery, Handlebars.js, MySQL, JavaScript, API, Node.js",
                imageSrc: "https://i.ibb.co/DrHyHkn/screencapture-stream-saver-herokuapp-watchlist-2020-10-18-23-44-00.png",
                url: 'https://stream-saver.herokuapp.com/',
                urlCode: "https://github.com/KristyKeller/Stream-Saver"
            },
            {
                id: 4,
                title: 'Day Planner',
                description:"Work day planner developed to create a schedule based on standard business hours where the current date and time is displayed. Time blocks are color coded to indicate whether the event is in the past, present, or future. The user's entered schedule is saved in local storage and stored when the page is refreshed.",
                service: "HTML5, CSS3, JavaScript, Moment.js",
                imageSrc: "https://i.ibb.co/WvV1BwN/day-planner.png",
                url: 'https://kristykeller.github.io/DayPlanner/',
                urlCode: "https://github.com/KristyKeller/DayPlanner"
            },
            {
                id: 5,
                title: 'Note Taker',
                description:"Application that can be used to write, save, and delete notes. Uses an Express backend to save and retrieve note data from JSON. Made for users that need to keep track of a lot of information, allowing the user to have written information available when needed",
                service: "HTML, CSS3, JavaScript, Express.js, Inquirer, JSON, Node.js",
                imageSrc: "https://i.ibb.co/QMbgvhX/note-taker.png",
                url: 'https://note-taker-express-app.herokuapp.com/',
                urlCode: "https://github.com/KristyKeller/NoteTaker"
            },
            {
                id: 6,
                title: 'Weather Dashboard',
                description:"A weather dashboard that allows the user to search for a city that is then displayed to his or her search history. Current and future weather forecasts are presented through a 5-day forecast. Each day has the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. The UV index is assigned a color that showcases whether the conditions are favorable, moderate, or severe. The user can navigate using previously searched cities via the search history list.",
                service: "HTML5, CSS3, JavaScript, API, Moment.js",
                imageSrc: 'https://i.ibb.co/XpMgQGc/weather-screenshot.png',
                url: 'https://kristykeller.github.io/WeatherDashboard/',
                urlCode: "https://github.com/KristyKeller/WeatherDashboard"
            }
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {
                name: 'Phone: (570) 955-7724',

            },
            {
                name: 'Github',
                url: 'https://github.com/KristyKeller'
            
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/kellerkristy/'
            }
        ]
    }
