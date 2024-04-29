import React from 'react';import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import logo from '../assets/logo';
import blogData from '../data/blog';


function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={logo} about={blogData.about} />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
