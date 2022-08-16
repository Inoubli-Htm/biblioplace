import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers, updateUser } from "../redux/actions/userActions";
import "./userlists.css";

function UsersLists() {
  const users = useSelector((state) => state.userReducer.users);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handledelete = async (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteUser(id));
      dispatch(getUsers());
    }
  };
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-around",
    //     flexWrap: "wrap",
    //     width: "90%",
    //     margin: "auto",
    //   }}
    // >
    //   <Table striped bordered hover>
    //     <thead>
    //       <tr>
    //         <th>User Name</th>
    //         <th>User Mail</th>
    //         <th>Change Role</th>
    //         <th>Delete</th>
    //       </tr>
    //     </thead>
    //     {users.map((user) => (
    //       <tbody>
    //         <tr>
    //           <td>{user.userName}</td>
    //           <td>{user.email}</td>

    //           <td>
    //             {" "}
    //             <Form.Group
    //               className="mb-3"
    //               onChange={(e) => setRole(e.target.value)}
    //             >
    //               <Form.Select id="disabledSelect">
    //                 <option>{user.role}</option>
    //                 {user.role === "Administrateur" ? (
    //                   <option>Bibliophile</option>
    //                 ) : (
    //                   <option>Administrateur</option>
    //                 )}
    //               </Form.Select>
    //             </Form.Group>
    //             <Button
    //               variant="outline-dark"
    //               onClick={() => {
    //                 dispatch(
    //                   updateUser(user._id, {
    //                     role,
    //                   })
    //                 );
    //               }}
    //             >
    //               Confirm
    //             </Button>
    //           </td>
    //           <td>
    //             {user.role === "Bibliophile" ? (
    //               <Button
    //                 variant="outline-danger"
    //                 onClick={() => handledelete(user._id)}
    //               >
    //                 Delete
    //               </Button>
    //             ) : (
    //               <Button
    //                 disabled
    //                 variant="outline-danger"
    //                 onClick={() => handledelete(user._id)}
    //               >
    //                 Delete
    //               </Button>
    //             )}
    //           </td>
    //         </tr>
    //       </tbody>
    //     ))}
    //   </Table>
    // </div>
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="main-box clearfix">
            <div className="table-responsive">
              <table
                className="table user-list"
                style={{ width: "90%", margin: "auto" }}
              >
                <thead>
                  <tr>
                    <th>
                      <h5>Utilisateur</h5>
                    </th>

                    <th className="text-center">
                      <h5>Email</h5>
                    </th>
                    <th style={{ width: "260px" }}>
                      <h5>Role</h5>
                    </th>
                    <th>
                      <h5>Supprimer</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr>
                      <td>
                        <img
                          src={`imgprofile/${user.imageUrl}`}
                          alt="My Picture"
                        />

                        {user.userName}
                      </td>

                      <td>{user.email}</td>
                      <td
                        className="text-center"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Form.Group
                          className="mb-3"
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <Form.Select>
                            <option>{user.role}</option>
                            {user.role === "Administrateur" ? (
                              <option>Bibliophile</option>
                            ) : (
                              <option>Administrateur</option>
                            )}
                          </Form.Select>
                        </Form.Group>
                        <Button
                          variant="outline-dark"
                          style={{ height: "50%" }}
                          onClick={() => {
                            dispatch(
                              updateUser(user._id, {
                                role,
                              })
                            );
                          }}
                        >
                          Confirmer
                        </Button>
                      </td>
                      <td style={{ width: "20%" }}>
                        {user.role === "Bibliophile" ? (
                          <Button
                            variant="outline-danger"
                            onClick={() => handledelete(user._id)}
                          >
                            Supprimer
                          </Button>
                        ) : (
                          <Button
                            disabled
                            style={{ height: "50%" }}
                            variant="outline-danger"
                            onClick={() => handledelete(user._id)}
                          >
                            Supprimer
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersLists;
