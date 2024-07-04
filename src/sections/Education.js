import React from 'react';

const Education = () => {
  return (
    <div className="min-h-screen w-screen bg-customYellow flex flex-col items-center justify-center section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl text-center p-8">
        <div className="col-span-1 md:col-span-2 text-4xl font-bold mb-8">
          EDUCATION
          <div className="text-2xl italic">and other Experiences</div>
        </div>
        <div className="space-y-2">
          <div className="font-bold">Bachelor of Science in Computer Science</div>
          <div>University of San Carlos - Cebu, Philippines</div>
          <div>2019-2022</div>
        </div>
        <div className="space-y-2">
          <div className="font-bold">Bachelor of Science in Computer Science</div>
          <div>University of Cebu - Cebu, Philippines</div>
          <div>Expected Graduation: June 2025</div>
        </div>
        <div className="space-y-2">
          <div className="font-bold">University of Cebu</div>
          <div>Guidance and Counseling Peer Facilitator</div>
        </div>
        <div className="space-y-2">
          <div className="font-bold">University of Cebu</div>
          <div>Working Scholar</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
