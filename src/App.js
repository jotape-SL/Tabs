import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchjobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchjobs();
  }, []);

  if (isLoading) {
    return (
      <section className='section loaing'>
        <h1>loading...</h1>
      </section>
    );
  }
  return <h2>tabs project setup</h2>;
}

export default App;
