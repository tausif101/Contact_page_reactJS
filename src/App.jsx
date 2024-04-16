import ContactForm from "./components/ContactForm/ContactForm.jsx"
import ConatactHeader from "./components/ContactHeader/ContactHeader.jsx"
import Navigation from "./components/Navigation/Navigation.jsx"


function App() {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <ConatactHeader />
        <ContactForm />
      </main>
      
    </>
  )
}

export default App
