import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TabNavigation from './components/TabNavigation'
import AdaptTab from './components/AdaptTab'
import CreateTab from './components/CreateTab'
import QuizTab from './components/QuizTab'
import ConvertTab from './components/ConvertTab'

function App() {
  const [activeTab, setActiveTab] = useState('adapt')
  const [profile, setProfile] = useState({
    conditions: ['autism'],
    subject: 'english',
    keyStage: 'ks3'
  })

  const updateProfile = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const addCondition = (condition) => {
    if (!profile.conditions.includes(condition) && profile.conditions.length < 3) {
      setProfile(prev => ({ ...prev, conditions: [...prev.conditions, condition] }))
    }
  }

  const removeCondition = (condition) => {
    if (profile.conditions.length > 1) {
      setProfile(prev => ({ 
        ...prev, 
        conditions: prev.conditions.filter(c => c !== condition) 
      }))
    }
  }

  return (
    <div className="app">
      <Header 
        profile={profile}
        updateProfile={updateProfile}
        addCondition={addCondition}
        removeCondition={removeCondition}
      />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {activeTab === 'adapt' && <AdaptTab profile={profile} />}
        {activeTab === 'create' && <CreateTab profile={profile} />}
        {activeTab === 'quiz' && <QuizTab profile={profile} />}
        {activeTab === 'convert' && <ConvertTab profile={profile} />}
      </main>
      <footer className="footer">
        <p>AdaptEd — Making education accessible for every learner</p>
      </footer>
    </div>
  )
}

export default App
