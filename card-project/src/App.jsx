import React from "react";
import Card from "./components/Card";
const jobOpenings = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    date_posted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay_per_hour: 45,
    location: "Mumbai, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    date_posted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay_per_hour: 55,
    location: "Bangalore, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    date_posted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay_per_hour: 60,
    location: "Hyderabad, India",
  },
  {
    logo: "https://images.icon-icons.com/2699/PNG/512/amazon_logo_icon_169611.png",
    company: "Amazon",
    date_posted: "3 days ago",
    post: "SDE Intern",
    tag1: "Part Time",
    tag2: "Internship",
    pay_per_hour: 25,
    location: "Chennai, India",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qgo_V4Z7E1SgVpCc44eB3dL63ibb_zMdVw&s",
    company: "Meta",
    date_posted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay_per_hour: 50,
    location: "Remote",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    date_posted: "4 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay_per_hour: 70,
    location: "Remote",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    company: "Tesla",
    date_posted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay_per_hour: 48,
    location: "Pune, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    company: "Adobe",
    date_posted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay_per_hour: 52,
    location: "Noida, India",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrzkVDKf1Tvp0W1VajjJh8_VLZd4f9CCp2Q&s",
    company: "Uber",
    date_posted: "12 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay_per_hour: 58,
    location: "Bangalore, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    company: "Airbnb",
    date_posted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay_per_hour: 53,
    location: "Remote",
  },
];
const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.company}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay_per_hour={elem.pay_per_hour}
              logo={elem.logo}
              date_posted={elem.date_posted}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
