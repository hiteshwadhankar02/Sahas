// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Link, useNavigate } from 'react-router-dom';
// // import Cookies from 'js-cookie';
// // import "./CSS/Dashboard.css";

// // export default function Attendance({ dbpath }) {
// //   const [attendanceList, setAttendanceList] = useState([]);
// //   const [type1, setType1] = useState('');
// //   const [type2, setType2] = useState('');
// //   const [filter1, setFilter1] = useState('');
// //   const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
// //   const navigate = useNavigate();
// //   const isUserLoggedIn = Cookies.get('userLoggedIn');

// //   const loadUser = async (query) => {
// //     try{    //---new code---//
// //       const result = await axios.get(dbpath+"dynamicQuery.php?query="+query);
// //       setUser(result.data.phpresult);
// //       console.log(result.data.phpresult); 
// //     }   //----new code;----//
// //     catch (error) {   //new code;
// //       console.error("Error loading user data", error);    //new code;
// //     }   //new code;
// //   }

// //       if (type1 === '1') {
// //         if (type2 === '1') {
// //           query = `select * from tregister where id ="${filter1}" AND id != 0;`;
// //         } else if (type2 === '2') {
// //           query = `select * from rregister where id ="${filter1}" AND id != 0;`;
// //         }
// //       } else if (type1 === '2') {
// //         if (type2 === '1') {
// //           query = `select * from tregister where name LIKE "%${filter1}%" AND id != 0;`;
// //         } else if (type2 === '2') {
// //           query = `select * from tregister where name LIKE "%${filter1}%" AND id != 0;`;
// //         }
// //       } else if (type1 === '3') {
// //         if (type2 === '1') {
// //           query = `select * from tregister where mobile LIKE "${filter1}" AND id != 0;`;
// //         } else if (type2 === '2') {
// //           query = `select * from tregister where mobile LIKE "${filter1}" AND id != 0;`;
// //         }
// //       }

// //       const result = await axios.get(`${dbpath}dynamicQuery.php?query=${query}`);
// //       setAttendanceList(result.data.phpresult);
// //       console.log(result.data.phpresult);
// //     } catch (error) {
// //       console.error("Error loading attendance data", error);
// //     }
// //   }

// //   useEffect(() => {
// //     if (isUserLoggedIn !== 'true') {
// //       navigate('/AdminLogin');
// //     } else {
// //       loadAttendance();
// //     }
// //   }, [isUserLoggedIn]);

// //   const handleSearch = (event) => {
// //     event.preventDefault();
// //     if (type1 && type2 && filter1) {
// //       loadAttendance();
// //     } else {
// //       navigate('/attendance');
// //     }
// //   }

// //   const handleAttendanceSubmit = (studentId, attendanceStatus) => {
// //     // Logic to submit attendance for a particular student
// //     console.log(`Attendance for student ${studentId} marked as ${attendanceStatus}`);
// //   }

// //   return (
// //     <>
// //       <br /><br />
// //       <p className='sp1'>Attendance</p>
// //       <br />
// //       <center>
// //         {/* Add any additional components related to attendance, e.g., date picker, type dropdown */}
// //       </center>
// //       <br />
// //       <form style={{ display: 'flex' }} onSubmit={handleSearch}>
// //         <div className="mb-3" style={{ marginLeft: '27%', display: 'flex' }}>
// //           <div className="input-group mb-3">
// //             <select className="form-select" id="inputGroupSelect01" value={type1} onChange={(e) => setType1(e.target.value)}>
// //               <option value="">Search by...</option>
// //               <option value="1">ID</option>
// //               <option value="2">Name</option>
// //               <option value="3">Number</option>
// //               <option value="4">Age Group</option>
// //             </select>
// //           </div>
// //           &nbsp;&nbsp;&nbsp;
// //           {type1 === '4' && (
// //             <div className="input-group mb-3">
// //               <select className="form-select" id="inputGroupSelect01" value={selectedAgeGroup} onChange={(e) => setSelectedAgeGroup(e.target.value)}>
// //                 <option value="">Select Age Group...</option>
// //                 <option value="Under-19">Under-19</option>
// //                 <option value="Under-17">Under-17</option>
// //                 <option value="Under-15">Under-15</option>
// //                 <option value="Under-13">Under-13</option>
// //               </select>
// //             </div>
// //           )}
// //           &nbsp;&nbsp;&nbsp;
// //           <div className="input-group mb-3">
// //             <select className="form-select" id="inputGroupSelect01" value={type2} onChange={(e) => setType2(e.target.value)}>
// //               <option value="">from...</option>
// //               <option value="1">Coaching</option>
// //               <option value="2">Recreational</option>
// //             </select>
// //           </div>
// //           &nbsp;&nbsp;&nbsp;
// //           {type1 !== "4" && <input type="text" className="form-control" placeholder='Type Here..' style={{ height: '38px' }} onChange={(e) => setFilter1(e.target.value)} />}
// //         </div>
// //         <br />
// //         <br />
// //         <center>
// //           &nbsp;&nbsp;&nbsp;
// //           <button type="submit" className="btn btn-primary">
// //             Search
// //           </button> &nbsp;&nbsp;&nbsp;
// //           <Link to="/dashboard"><button type="button" className="btn btn-primary">
// //             Dashboard
// //           </button></Link>
// //         </center>
// //       </form>
// //       <br /><br />
// //       <div id="tablediv">
// //         <table className="table">
// //           <thead>
// //             <tr>
// //               <th scope="col">ID</th>
// //               <th scope="col">VCA ID</th>
// //               <th scope="col">Name</th>
// //               <th scope="col">Timing</th>
// //               <th scope="col">Coach</th>
// //               <th scope="col">Attendance</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {attendanceList.map((res) =>
// //               <tr key={res.id}>
// //                 <td>{res.id}</td>
// //                 <td>{res.vca}</td>
// //                 <td>{res.name}</td>
// //                 <td>{res.timing}</td>
// //                 <td>{res.coach}</td>
// //                 <td>
// //                   <form>
// //                     <label>
// //                       <input type="radio" name={`attendance_${res.id}`} value="present" onChange={() => handleAttendanceSubmit(res.id, 'present')} />
// //                       Present
// //                     </label>
// //                     <label>
// //                       <input type="radio" name={`attendance_${res.id}`} value="absent" onChange={() => handleAttendanceSubmit(res.id, 'absent')} />
// //                       Absent
// //                     </label>
// //                   </form>
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //       <br /><br /><br /><br />
// //     </>
// //   )
// // }




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import "./CSS/Dashboard.css";

// export default function Attendance({ dbpath }) {
//   const [attendanceList, setAttendanceList] = useState([]);
//   const [type1, setType1] = useState('');
//   const [type2, setType2] = useState('');
//   const [filter1, setFilter1] = useState('');
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
//   const navigate = useNavigate();
//   const isUserLoggedIn = Cookies.get('userLoggedIn');

//   const loadAttendance = async () => {
//     try {
//       let query = '';

//       if (selectedAgeGroup === "Under-19") {
//         query += ` AND ageGroup = "${selectedAgeGroup}"`;
//       }

//       if (type1 === '1') {
//         if (type2 === '1') {
//           query = select * from tregister where id ="${filter1}" AND id != 0;;
//         } else if (type2 === '2') {
//           query = select * from rregister where id ="${filter1}" AND id != 0;;
//         }
//       } else if (type1 === '2') {
//         if (type2 === '1') {
//           query = select * from tregister where name LIKE "%${filter1}%" AND id != 0;;
//         } else if (type2 === '2') {
//           query = select * from tregister where name LIKE "%${filter1}%" AND id != 0;;
//         }
//       } else if (type1 === '3') {
//         if (type2 === '1') {
//           query = select * from tregister where mobile LIKE "${filter1}" AND id != 0;;
//         } else if (type2 === '2') {
//           query = select * from tregister where mobile LIKE "${filter1}" AND id != 0;;
//         }
//       }

//       const result = await axios.get(${dbpath}dynamicQuery.php?query=${query});
//       setAttendanceList(result.data.phpresult);
//       console.log(result.data.phpresult);
//     } catch (error) {
//       console.error("Error loading attendance data", error);
//     }
//   }
  

//   useEffect(() => {
//     if (isUserLoggedIn !== 'true') {
//       navigate('/AdminLogin');
//     } else {
//       loadAttendance();
//     }
//   }, [isUserLoggedIn]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (type1 && type2 && filter1) {
//       loadAttendance();
//     } else {
//       navigate('/attendance');
//     }
//   }

//   // const handleAttendanceSubmit = (studentId, attendanceStatus) => {
//   //   // Logic to submit attendance for a particular student
//   //   console.log(Attendance for student ${studentId} marked as ${attendanceStatus});
//   // }

//   return (
//     <>
//       <br /><br />
//       <p className='sp1'>Attendance</p>
//       <br />
//       <center>
//         {/* Add any additional components related to attendance, e.g., date picker, type dropdown */}
//       </center>
//       <br />
//       <form style={{ display: 'flex' }} onSubmit={handleSearch}>
//         <div className="mb-3" style={{ marginLeft: '27%', display: 'flex' }}>
//           <div className="input-group mb-3">
//             <select className="form-select" id="inputGroupSelect01" value={type1} onChange={(e) => setType1(e.target.value)}>
//               <option value="">Search by...</option>
//               <option value="1">ID</option>
//               <option value="2">Name</option>
//               <option value="3">Number</option>
//               <option value="4">Age Group</option>
//             </select>
//           </div>
//           &nbsp;&nbsp;&nbsp;
//           {type1 === '4' && (
//             <div className="input-group mb-3">
//               <select className="form-select" id="inputGroupSelect01" value={selectedAgeGroup} onChange={(e) => setSelectedAgeGroup(e.target.value)}>
//                 <option value="">Select Age Group...</option>
//                 <option value="Under-19">Under-19</option>
//                 <option value="Under-17">Under-17</option>
//                 <option value="Under-15">Under-15</option>
//                 <option value="Under-13">Under-13</option>
//               </select>
//             </div>
//           )}
//           &nbsp;&nbsp;&nbsp;
//           <div className="input-group mb-3">
//             <select className="form-select" id="inputGroupSelect01" value={type2} onChange={(e) => setType2(e.target.value)}>
//               <option value="">from...</option>
//               <option value="1">Coaching</option>
//               <option value="2">Recreational</option>
//             </select>
//           </div>
//           &nbsp;&nbsp;&nbsp;
//           {type1 !== "4" && <input type="text" className="form-control" placeholder='Type Here..' style={{ height: '38px' }} onChange={(e) => setFilter1(e.target.value)} />}
//         </div>
//         <br />
//         <br />
//         <center>
//           &nbsp;&nbsp;&nbsp;
//           <button type="submit" className="btn btn-primary">
//             Search
//           </button> &nbsp;&nbsp;&nbsp;
//           <Link to="/dashboard"><button type="button" className="btn btn-primary">
//             Dashboard
//           </button></Link>
//         </center>
//       </form>
//       <br /><br />
//       <div id="tablediv">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">ID</th>
//               <th scope="col">VCA ID</th>
//               <th scope="col">Name</th>
//               <th scope="col">Timing</th>
//               <th scope="col">Coach</th>
//               <th scope="col">Attendance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {attendanceList.map((res) =>
//               <tr key={res.id}>
//                 <td>{res.id}</td>
//                 <td>{res.vca}</td>
//                 <td>{res.name}</td>
//                 <td>{res.timing}</td>
//                 <td>{res.coach}</td>
//                 <td>
//                   <form>
//                     <label>
//                       <input type="radio" name={attendance_${res.id}} value="present" onChange={() => handleAttendanceSubmit(res.id, 'present')} />
//                       Present
//                     </label>
//                     <label>
//                       <input type="radio" name={attendance_${res.id}} value="absent" onChange={() => handleAttendanceSubmit(res.id, 'absent')} />
//                       Absent
//                     </label>
//                   </form>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       <br /><br /><br /><br />
//     </>
//   )
// }