import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Support from "./components/Support/Surpport";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Album from "./components/Gallery/Album";
import Notice from "./components/Notice/Notice";
import Contact from "./components/Contact/Contact";
import Form from "./components/Contact/Form";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminContacts from "./components/Admin/AdminContact";
import AdminUsers from "./components/Admin/AdminUsers";
import AdminNotices from "./components/Admin/AdminNotices";
import SignUp from "./components/Admin/SignUp";
import Login from "./components/Admin/Login";
import Logout from "./components/Admin/Logout";
import UserEdit from "./components/Admin/UserEdit";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import NoticeEdit from "./components/Admin/NoticeEdit";
import AdminCertificate from "./components/Admin/AdminCertificate";
import Certificates from "./components/Certificate/Certificates";
import Error from "./components/Error Page/Error";
// import Team2k23 from "./components/Team/Team2k23";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/support" element={<Support />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Album />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/team2k23" element={<Team2k23 />}/> */}
        <Route path="/logout" element={<Logout />}/>
        <Route path="/verify" element={<Certificates />}/>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/notices" element={<AdminNotices />} />
          <Route path="/admin/certificates" element={<AdminCertificate />} />
        </Route>
        <Route path="/admin">
          <Route path="users" >
            <Route path=":id" element={<UserEdit />}>
              <Route path="edit" element={<UserEdit />} />
            </Route>
          </Route>
        </Route>
        <Route path="/admin">
          <Route path="servicelist" >
            <Route path=":id" element={<NoticeEdit />}>
              <Route path="edit" element={<NoticeEdit />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
