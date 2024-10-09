import NavEN from '@/components/NavEN';
import { useState, useEffect } from 'react';

export default function Polls() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [votes, setVotes] = useState({ option1: 0, option2: 0 });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    const response = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName,
        email,
        optionVoted: selectedOption,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setSuccess(data.message);
      fetchVotes(); // Fetch updated votes
    } else {
      setError(data.error);
    }
  };

  const fetchVotes = async () => {
    const res = await fetch('/api/getVotes');
    const data = await res.json();
    setVotes({ option1: data.option1, option2: data.option2 });
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  const totalVotes = votes.option1 + votes.option2;
  const option1Percentage = totalVotes ? (votes.option1 / totalVotes) * 100 : 0;
  const option2Percentage = totalVotes ? (votes.option2 / totalVotes) * 100 : 0;

  return (
    <>
      <NavEN parent="Polls" />
      <header>
        <h2>Polls</h2>
      </header>
      <div className="pollContainer">
        <h1>Which of the following two options do you choose for Cuba?</h1>
        <div className="freedomPollContainer">
          <div className="results-container">
            <h2>Current Results</h2>
            <div className="progress-container">
              <p>Multiparty system and freedom in Cuba</p>
              <progress value={option1Percentage} max="100"></progress>
              <span>{option1Percentage.toFixed(1)}%</span>
            </div>

            <div className="progress-container">
              <p>Continuity of communism in Cuba</p>
              <progress value={option2Percentage} max="100"></progress>
              <span>{option2Percentage.toFixed(1)}%</span>
            </div>
          </div>
          <div className="form-container">
            <h2>Participate in the survey</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <input
                  type="radio"
                  id="option1"
                  name="option"
                  value="1"
                  checked={selectedOption === '1'}
                  onChange={() => setSelectedOption('1')}
                  required
                />
                <label htmlFor="option1">Multiparty system and freedom in Cuba</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="option2"
                  name="option"
                  value="2"
                  checked={selectedOption === '2'}
                  onChange={() => setSelectedOption('2')}
                  required
                />
                <label htmlFor="option2">Continuity of communism in Cuba</label>
              </div>

              <button type="submit">Vote</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
          </div>
        </div>
      </div>
    </>
  );
}