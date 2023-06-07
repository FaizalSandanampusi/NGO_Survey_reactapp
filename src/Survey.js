import React, { useState } from 'react';

const Survey = () => {
  const [headOfFamily, setHeadOfFamily] = useState({
    name: '',
    aadharNumber: '',
    gender: '',
    dob: '',
    maritalStatus: '',
    contact: {
      phoneNumber: '',
      email: '',
    },
    address: '',
    occupation: '',
    income: '',
    nearbyMasjid: '',
  });

  const [members, setMembers] = useState([]);

  const handleChangeHeadOfFamily = (e) => {
    const { name, value } = e.target;
    setHeadOfFamily((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeContact = (e) => {
    const { name, value } = e.target;
    setHeadOfFamily((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [name]: value,
      },
    }));
  };

  const handleChangeMember = (e, index) => {
    const { name, value } = e.target;
    const updatedMembers = [...members];
    updatedMembers[index][name] = value;
    setMembers(updatedMembers);
  };

  const handleAddMember = () => {
    setMembers((prevMembers) => [...prevMembers, {}]);
  };

  const handleDeleteMember = (index) => {
    setMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Head of Family:', headOfFamily);
    console.log('Members:', members);
    setHeadOfFamily({
      name: '',
      aadharNumber: '',
      gender: '',
      dob: '',
      maritalStatus: '',
      contact: {
        phoneNumber: '',
        email: '',
      },
      address: '',
      occupation: '',
      income: '',
      nearbyMasjid: '',
    });
    setMembers([]);
  };

  return (
    <div>
      <div className="survey-container">
        <div className="survey-page">
          <h2 className="survey-title">Survey Form</h2>
          <form className="survey-form" onSubmit={handleSubmit}>
            {/* Head of the Family */}
            <div className="section">
              <h3>Head of the Family</h3>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={headOfFamily.name}
                  onChange={handleChangeHeadOfFamily}
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="aadharNumber">Aadhar Number</label>
                <input
                  type="text"
                  id="aadharNumber"
                  name="aadharNumber"
                  className="form-input"
                  value={headOfFamily.aadharNumber}
                  onChange={handleChangeHeadOfFamily}
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="form-input"
                  value={headOfFamily.gender}
                  onChange={handleChangeHeadOfFamily}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="dob">DOB</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="form-input"
                  value={headOfFamily.dob}
                  onChange={handleChangeHeadOfFamily}
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="maritalStatus">Marital Status</label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  className="form-input"
                  value={headOfFamily.maritalStatus}
                  onChange={handleChangeHeadOfFamily}
                  required
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
              <div className="form-control">
                <label>Contact Details</label>
                <div className="form-subcontrol">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="form-input"
                    value={headOfFamily.contact.phoneNumber}
                    onChange={handleChangeContact}
                    required
                  />
                </div>
                <div className="form-subcontrol">
                  <label htmlFor="email">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={headOfFamily.contact.email}
                    onChange={handleChangeContact}
                  />
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  className="form-input"
                  value={headOfFamily.address}
                  onChange={handleChangeHeadOfFamily}
                ></textarea>
              </div>
              <div className="form-control">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  className="form-input"
                  value={headOfFamily.occupation}
                  onChange={handleChangeHeadOfFamily}
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="income">Income</label>
                <input
                  type="text"
                  id="income"
                  name="income"
                  className="form-input"
                  value={headOfFamily.income}
                  onChange={handleChangeHeadOfFamily}
                />
              </div>
              <div className="form-control">
                <label htmlFor="nearbyMasjid">Nearby Masjid</label>
                <select
                  id="nearbyMasjid"
                  name="nearbyMasjid"
                  className="form-input"
                  value={headOfFamily.nearbyMasjid}
                  onChange={handleChangeHeadOfFamily}
                >
                  <option value="">Select Nearby Masjid</option>
                  <option value="Quba Masjid">Quba Masjid</option>
                  <option value="Modi Masjid">Modi Masjid</option>
                </select>
              </div>
            </div>

            {/* Member Details */}
            <div className="section">
              <h3>Member Details</h3>
              {members.map((member, index) => (
                <div key={index} className="member">
                  <div className="form-control">
                    <label htmlFor={`memberName${index}`}>Name</label>
                    <input
                      type="text"
                      id={`memberName${index}`}
                      name="name"
                      className="form-input"
                      value={member.name || ''}
                      onChange={(e) => handleChangeMember(e, index)}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor={`memberAadhar${index}`}>Aadhar Number</label>
                    <input
                      type="text"
                      id={`memberAadhar${index}`}
                      name="aadharNumber"
                      className="form-input"
                      value={member.aadharNumber || ''}
                      onChange={(e) => handleChangeMember(e, index)}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor={`memberRelation${index}`}>Relation to Head of Family</label>
                    <input
                      type="text"
                      id={`memberRelation${index}`}
                      name="relation"
                      className="form-input"
                      value={member.relation || ''}
                      onChange={(e) => handleChangeMember(e, index)}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor={`memberDOB${index}`}>DOB</label>
                    <input
                      type="date"
                      id={`memberDOB${index}`}
                      name="dob"
                      className="form-input"
                      value={member.dob || ''}
                      onChange={(e) => handleChangeMember(e, index)}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor={`memberMaritalStatus${index}`}>Marital Status</label>
                    <select
                      id={`memberMaritalStatus${index}`}
                      name="maritalStatus"
                      className="form-input"
                      value={member.maritalStatus || ''}
                      onChange={(e) => handleChangeMember(e, index)}
                      required
                    >
                      <option value="">Select Marital Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <button type="button" className="delete-button" onClick={() => handleDeleteMember(index)}>
                      &#8722;
                    </button>
                  </div>
                </div>
              ))}
              <div className="form-control">
                <button type="button" className="add-button" onClick={handleAddMember}>
                  &#43; Add Member
                </button>
              </div>
            </div>

            <div className="form-control">
              <button type="submit" className="form-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Survey;
