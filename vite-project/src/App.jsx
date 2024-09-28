import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.vercel.app/blogLinks');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Blogs</h1>
      <button onClick={fetchBlogs}>Cargar Blogs</button>
      {loading && <p>Cargando...</p>}
      {blogs.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay blogs disponibles.</p>
      )}
    </div>
  );
}

export default App;
