import { Header } from "./features/layout/components/Header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer" 
import { Article } from "./features/layout/components/Article" 
import Props from "./features/layout/components/Props" 
import { HashRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Props" element={<Props />} />
        <Route path="/Article" element={<Article />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
