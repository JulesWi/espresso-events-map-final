import React from 'react'
import { Sidebar } from './Sidebar'
import { BottomPanel } from './BottomPanel'

interface MainLayoutProps {
  children: React.ReactNode
  topics: any[]
  publications: any[]
  events: any[]
  selectedEvent: any
  onEventSelect: (event: any) => void
  getStatusColor: (status: string) => string
  getStatusIcon: (status: string) => React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  topics,
  publications,
  events,
  selectedEvent,
  onEventSelect,
  getStatusColor,
  getStatusIcon
}) => {
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="map-area">
          {children}
        </div>
        
        <Sidebar 
          topics={topics}
          publications={publications}
          selectedEvent={selectedEvent}
        />
      </div>
      
      <BottomPanel 
        events={events}
        onEventSelect={onEventSelect}
        getStatusColor={getStatusColor}
        getStatusIcon={getStatusIcon}
      />
    </div>
  )
}
