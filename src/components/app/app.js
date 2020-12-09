
import React, { useState } from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import { faHome, 
         faFileInvoiceDollar,
         faFileAlt,
         faFileContract,
         faCogs,
         faAddressCard,
         faFileMedicalAlt,
         faBell,
         faEnvelope, 
         faDesktop,
         faClock,
         faCalendar,
         faComments} from "@fortawesome/free-solid-svg-icons";

import Sidebar from 'components/sidebar';
import Content from 'components/content';

import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    
    
  
    //Sidebar state variables
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    const items = [
      { title: 'Home', target: 'Home', icon: faHome },
      { title: 'Billing', 
        target: 'Billing',
        icon:  faFileInvoiceDollar,
        items: [
          { title: 'Statements', target: 'statements', icon: faFileAlt  },
          { title: 'Reports', target: 'reports', icon: faFileContract},
        ]
      },
      { 
        title: 'Settings', 
        target: 'Settings', 
        icon: faCogs, 
        items: [
          { title: 'Profile', target: 'profile', icon: faAddressCard },
          { title: 'Insurance', target: 'insurance', icon: faFileMedicalAlt},
          { title: 'Notification', 
            target: 'notification',
            icon: faBell,
            items: [
              { title: 'Email', target: 'email', icon: faEnvelope},
              {
                title: 'Desktop',
                target: 'Desktop',
                icon: faDesktop,
                items: [
                  { title: 'Schedule', target: 'schedule', icon: faClock },
                  { title: 'Frequency', target: 'frequency', icon: faCalendar },
                ],
              },
              { title: 'SMS', target: 'sms', icon: faComments }
            ] 
          }
        ]
      }
    ];

    

    return (
        <Router>
          <div className="App wrapper">
            <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} items={items} depthStep={10} depth={0}/>
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
          </div>
        </Router>
      );
};


export default App;