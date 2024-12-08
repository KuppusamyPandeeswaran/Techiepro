import React, { useState } from "react";
import ProfileView from "./pages/ProfileView";
import Login from "./pages/login";
import ProfileDashboard from "./pages/ProfileDashboard";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfileEdit from "./pages/ProfileEdit";
import Navbar from "./components/Navbar";
import { initialVideos } from "./VideoData";
import Resources from "./Pages/Resources";
import AddVideo from "./Pages/AddVideo";
import VideoDetails from "./Pages/VideoDetails";

export default function App() {
  const [techies, setTechies] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [videos, setVideos] = useState(initialVideos);

  const addVideo = (newVideo) => {
    const videoWithId = { id: videos.length + 1, ...newVideo };
    setVideos([...videos, videoWithId]);
  };

  function handleTechies(data) {
    setTechies(data);
  }

  function handleSelectedId(id) {
    setSelectedId(id);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Profiles"
          element={
            <ProfileDashboard
              techies={techies}
              handleTechies={handleTechies}
              handleSelectedId={handleSelectedId}
            />
          }
        />
        <Route
          path="/Profile/:id"
          element={<ProfileView selectedId={selectedId} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
        <Route path="/Resources" element={<Resources videos={videos} />} />
        <Route path="/AddVideo" element={<AddVideo addVideo={addVideo} />} />
        <Route
          path="/VideoDetails/:videoId"
          element={<VideoDetails videos={videos} />}
        />
      </Routes>
    </div>
  );
}
