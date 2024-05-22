import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from 'react-toastify';

export const AdminContacts = () => {

    const [contacts, setContacts] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllContacts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/contacts', {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });
            const data = await response.json();
            console.log(`Contact ${data}`);
            setContacts(data);
        } catch (error) {
            console.log(error);
        }
    };

    // delete the Contact on delete button
    const deleteContact = async (id) => {
        try {
            console.log(id)
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    }
                }
            );

            const data = await response.json();
            console.log(`Contacts after deletion ${data}`);
            if (response.ok) {
                toast.success("Contact Deleted Successfully");
                getAllContacts();
            }
            else{
                toast.error("Failed to Delete Contact");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllContacts();
    }, []);

    return (
        <>
            <section className="admin-contacts-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                </div>
                <div className="container admin-contacts">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>message</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((curUser, index) => {
                                return <tr key={index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.message}</td>
                                    <td> <button onClick={() => deleteContact(curUser._id)}> Delete </button> </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}