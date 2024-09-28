import React, { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setBlogs(data); // Suponiendo que `data` es un array de blogs
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Lista de Blogs</h1>
      <button onClick={fetchBlogs}>Consultar Blogs</button>
      {loading && <p>Cargando...</p>}
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
          {blogs.length > 0 ? (
            blogs.map(blog => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay blogs disponibles.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
