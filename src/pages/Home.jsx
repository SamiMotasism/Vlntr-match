import volunteerImage from "../assets/download.jpeg";

export default function Home() {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Home Page</h1>
        <img 
        src={volunteerImage} 
        alt="Volunteering" 
        className="w-96 h-auto rounded-lg shadow-lg"
        />

        <p className="text-lg text-gray-700 text-center max-w-2xl px-4">
          Welcome to VolunteerMatch, where you can find volunteering opportunities that match your skills.
        </p>
      </div>
    );
  }
  